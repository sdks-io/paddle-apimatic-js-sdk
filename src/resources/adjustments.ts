import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  adjustmentActionQuerySchema,
  type AdjustmentActionQuery,
} from "../models/adjustment-action-query.js";
import { adjustmentCreateSchema, type AdjustmentCreate } from "../models/adjustment-create.js";
import {
  adjustmentStatusQuerySchema,
  type AdjustmentStatusQuery,
} from "../models/adjustment-status-query.js";
import {
  adjustmentsCreditNoteResponseSchema,
  type AdjustmentsCreditNoteResponse,
} from "../models/adjustments-credit-note-response.js";
import { adjustmentsResponseSchema, type AdjustmentsResponse } from "../models/adjustments-response.js";
import { adjustmentsResponse1Schema, type AdjustmentsResponse1 } from "../models/adjustments-response1.js";
import { dispositionSchema, type Disposition } from "../models/disposition.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Adjustment entities describe post-billing adjustments to billed or completed transactions.
 */
export class Adjustments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an adjustment
   *
   * @remarks
   * Creates an adjustment for one or more transaction items.
   *
   * You can create adjustments to refund or credit all or part of a transaction and its items:
   *
   * * Refunds return an amount to a customer's original payment method. You can create refund
   *   adjustments for transactions that are `completed`.
   * * Credits reduce the amount that a customer has to pay for a transaction. You can create credit
   *   adjustments for manually-collected transactions that are `billed` or `past_due`.
   *
   * You can create adjustments to refund transactions that are `completed`, or to reduce the amount
   * to due on manually-collected transactions that are `billed` or `past_due`. Most refunds for
   * live accounts are created with the status of `pending_approval` until reviewed by Paddle, but
   * [some are automatically
   * approved](https://developer.paddle.com/build/transactions/create-transaction-adjustments#background-refunds).
   * For sandbox accounts, Paddle automatically approves refunds every ten minutes.
   *
   * Adjustments can apply to some or all items on a transaction. You'll need the Paddle ID of the
   * transaction to create a refund or credit for, along with the Paddle ID of any transaction items
   * (`details.line_items[].id`).
   *
   * If successful, your response includes a copy of the new adjustment entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Adjustments.CreateAdjustmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAdjustment(
    request: Adjustments.CreateAdjustmentRequest,
    options?: RequestOptions,
  ): ApiPromise<AdjustmentsResponse1, Adjustments.CreateAdjustmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/adjustments"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adjustmentCreateSchema },
      },
      {
        success: { kind: "json", schema: adjustmentsResponse1Schema },
        errorFactory: Adjustments.CreateAdjustmentError,
      },
      options,
    );
  }

  /**
   * Get a PDF credit note for an adjustment
   *
   * @remarks
   * Returns a link to a credit note PDF for an adjustment.
   *
   * Credit note PDFs are created for refunds and credits as a record of an adjustment.
   *
   * The link returned is not a permanent link. It expires after an hour.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Adjustments.GetAdjustmentCreditNoteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAdjustmentCreditNote(
    request: Adjustments.GetAdjustmentCreditNoteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdjustmentsCreditNoteResponse, Adjustments.GetAdjustmentCreditNoteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/adjustments/{adjustment_id}/credit-note"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "adjustment_id", value: request.adjustmentId, schema: s.string() }],
        query: [
          {
            name: "disposition",
            value: request.disposition,
            schema: s.optional(s.lazy(() => dispositionSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adjustmentsCreditNoteResponseSchema },
        errorFactory: Adjustments.GetAdjustmentCreditNoteError,
      },
      options,
    );
  }

  /**
   * List adjustments
   *
   * @remarks
   * Returns a paginated list of adjustments. Use the query parameters to page through results.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Adjustments.ListAdjustmentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAdjustments(
    request: Adjustments.ListAdjustmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AdjustmentsResponse, Adjustments.ListAdjustmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/adjustments"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          {
            name: "action",
            value: request.action,
            schema: s.optional(s.array(s.lazy(() => adjustmentActionQuerySchema))),
          },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.array(s.string())) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 10) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => adjustmentStatusQuerySchema))),
          },
          { name: "subscription_id", value: request.subscriptionId, schema: s.optional(s.array(s.string())) },
          { name: "transaction_id", value: request.transactionId, schema: s.optional(s.array(s.string())) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adjustmentsResponseSchema },
        errorFactory: Adjustments.ListAdjustmentsError,
      },
      options,
    );
  }
}

export namespace Adjustments {
  export type CreateAdjustmentRequest = {
    body: AdjustmentCreate;
  };

  export class CreateAdjustmentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateAdjustmentError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAdjustmentCreditNoteRequest = {
    /** Paddle ID of the adjustment entity to work with. */
    adjustmentId: string;
    /**
     * Determine whether the generated URL should download the PDF as an attachment saved locally,
     * or open it inline in the browser.
     *
     * Default: `attachment`.
     */
    disposition?: Disposition;
  };

  export class GetAdjustmentCreditNoteError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetAdjustmentCreditNoteError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListAdjustmentsRequest = {
    /** Return only the IDs specified. Use a comma-separated list to get multiple entities. */
    id?: string[];
    /**
     * Return entities after the specified Paddle ID when working with paginated endpoints. Used in
     * the `meta.pagination.next` URL in responses for list operations.
     */
    after?: string;
    /**
     * Return entities for the specified action. Use a comma-separated list to specify multiple
     * action values.
     */
    action?: AdjustmentActionQuery[];
    /**
     * Return entities related to the specified customer. Use a comma-separated list to specify
     * multiple customer IDs.
     */
    customerId?: string[];
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `id`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /**
     * Set how many entities are returned per page. Paddle returns the maximum number of results if
     * a number greater than the maximum is requested. Check `meta.pagination.per_page` in the
     * response to see how many were returned.
     *
     * Default: `10`; Maximum: `50`.
     *
     * @default 10
     */
    perPage?: number;
    /**
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: AdjustmentStatusQuery[];
    /**
     * Return entities related to the specified subscription. Use a comma-separated list to specify
     * multiple subscription IDs.
     */
    subscriptionId?: string[];
    /**
     * Return entities related to the specified transaction. Use a comma-separated list to specify
     * multiple transaction IDs.
     */
    transactionId?: string[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListAdjustmentsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListAdjustmentsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
