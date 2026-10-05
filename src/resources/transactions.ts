import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { collectionModeSchema, type CollectionMode } from "../models/collection-mode.js";
import { dispositionSchema, type Disposition } from "../models/disposition.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  getInvoicePdfResponseSchema,
  type GetInvoicePdfResponse,
} from "../models/get-invoice-pdf-response.js";
import { transactionCreateSchema, type TransactionCreate } from "../models/transaction-create.js";
import {
  transactionIncludeQuerySchema,
  type TransactionIncludeQuery,
} from "../models/transaction-include-query.js";
import {
  transactionOriginQuerySchema,
  type TransactionOriginQuery,
} from "../models/transaction-origin-query.js";
import { transactionReviseSchema, type TransactionRevise } from "../models/transaction-revise.js";
import {
  transactionStatusQuerySchema,
  type TransactionStatusQuery,
} from "../models/transaction-status-query.js";
import { transactionUpdateSchema, type TransactionUpdate } from "../models/transaction-update.js";
import {
  transactionsPreviewResponseSchema,
  type TransactionsPreviewResponse,
} from "../models/transactions-preview-response.js";
import { transactionsResponseSchema, type TransactionsResponse } from "../models/transactions-response.js";
import { transactionsResponse1Schema, type TransactionsResponse1 } from "../models/transactions-response1.js";
import {
  transactionsReviseResponseSchema,
  type TransactionsReviseResponse,
} from "../models/transactions-revise-response.js";
import {
  transactionPreviewCreateSchema,
  type TransactionPreviewCreate,
} from "../models/unions/transaction-preview-create.js";
import type { Servers } from "../servers.js";

/**
 * Transaction entities calculate and capture revenue. They hold information about an amount that
 * you're billing for.
 */
export class Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a transaction
   *
   * @remarks
   * Creates a new transaction.
   *
   * Transactions are typically created with the status of `draft` or `ready` initially:
   *
   * * Draft transactions have `items` against them, but don't have all of the required fields for
   *   billing. Paddle creates draft transactions automatically when a checkout is opened.
   * * Paddle automatically marks transactions as `ready` when all of the required fields are
   *   present for billing. This includes `customer_id` and `address_id` for automatically-collected
   *   transactions, and `billing_details` for manually-collected transactions.
   *
   * The `collection_mode` against a transaction determines how Paddle tries to collect for payment:
   *
   * * Manually-collected transactions are for sales-assisted billing. Paddle sends an invoice to
   *   your customer when a transaction is `billed`. Payment is often by wire transfer.
   * * Automatically-collected transactions are for self-serve checkouts. You may pass the
   *   transaction to a checkout or use the returned `checkout.url` to collect for payment.
   *
   * When a manually-collected transaction is marked as `billed` or an automatically-collected
   * transaction is `completed`, Paddle automatically creates a related subscription for the items
   * on the transaction.
   *
   * If successful, your response includes a copy of the new transaction entity.
   *
   * Use the `include` parameter to include related entities in the response.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Transactions.CreateTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTransaction(
    request: Transactions.CreateTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsResponse1, Transactions.CreateTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => transactionIncludeQuerySchema))),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionCreateSchema },
      },
      {
        success: { kind: "json", schema: transactionsResponse1Schema },
        errorFactory: Transactions.CreateTransactionError,
      },
      options,
    );
  }

  /**
   * Get a transaction
   *
   * @remarks
   * Returns a transaction using its ID.
   *
   * Use the `include` parameter to include related entities in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Transactions.GetTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransaction(
    request: Transactions.GetTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsResponse1, Transactions.GetTransactionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => transactionIncludeQuerySchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionsResponse1Schema },
        errorFactory: Transactions.GetTransactionError,
      },
      options,
    );
  }

  /**
   * Get a PDF invoice for a transaction
   *
   * @remarks
   * Returns a link to an invoice PDF for a transaction.
   *
   * Invoice PDFs are available for both automatically and manually-collected transactions:
   *
   * * The PDF for manually-collected transactions includes payment terms, purchase order number,
   *   and notes for your customer. It's a demand for payment from your customer. It's available for
   *   transactions that are `billed` or `completed`.
   * * The PDF for automatically-collected transactions lets your customer know that payment was
   *   taken successfully. Customers may require this for for tax-reporting purposes. It's available
   *   for transactions that are `completed`.
   *
   * Invoice PDFs aren't available for zero-value transactions.
   *
   * The link returned is not a permanent link. It expires after an hour.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Transactions.GetTransactionInvoiceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransactionInvoice(
    request: Transactions.GetTransactionInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<GetInvoicePdfResponse, Transactions.GetTransactionInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/invoice"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
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
        success: { kind: "json", schema: getInvoicePdfResponseSchema },
        errorFactory: Transactions.GetTransactionInvoiceError,
      },
      options,
    );
  }

  /**
   * List transactions
   *
   * @remarks
   * Returns a paginated list of transactions. Use the query parameters to page through results.
   *
   * Use the `include` parameter to include related entities in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Transactions.ListTransactionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactions(
    request: Transactions.ListTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsResponse, Transactions.ListTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => transactionIncludeQuerySchema))),
          },
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "billed_at", value: request.billedAt, schema: s.optional(s.string()) },
          {
            name: "collection_mode",
            value: request.collectionMode,
            schema: s.optional(s.lazy(() => collectionModeSchema)),
          },
          { name: "created_at", value: request.createdAt, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.array(s.string())) },
          { name: "invoice_number", value: request.invoiceNumber, schema: s.optional(s.array(s.string())) },
          {
            name: "origin",
            value: request.origin,
            schema: s.optional(s.array(s.lazy(() => transactionOriginQuerySchema))),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => transactionStatusQuerySchema))),
          },
          {
            name: "subscription_id",
            value: request.subscriptionId,
            schema: s.optionalNullable(s.array(s.string())),
          },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 30) },
          { name: "updated_at", value: request.updatedAt, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionsResponseSchema },
        errorFactory: Transactions.ListTransactionsError,
      },
      options,
    );
  }

  /**
   * Preview a transaction
   *
   * @remarks
   * Previews a transaction without creating a transaction entity. Typically used for creating more
   * advanced, dynamic pricing pages where users can build their own plans.
   *
   * Consider using [the preview prices
   * operation](https://developer.paddle.com/api-reference/pricing-preview/preview-prices) for
   * simpler pricing pages.
   *
   * You can provide location information when previewing a transaction. You must provide this if
   * you want Paddle to calculate tax or [automatically localize
   * prices](https://developer.paddle.com/build/products/offer-localized-pricing). You can provide
   * one of:
   *
   * * `customer_ip_address`: Paddle fetches location using the IP address to calculate totals.
   * * `address`: Paddle uses the country and ZIP code (where supplied) to calculate totals.
   * * `customer_id`, `address_id`, `business_id`: Paddle uses existing customer data to calculate
   *   totals. Typically used for logged-in customers.
   *
   * When supplying items, you can exclude items from the total calculation using the
   * `include_in_totals` boolean.
   *
   * By default, recurring items with trials are considered to have a zero charge when previewing.
   * Set `ignore_trials` to `true` to ignore trial periods against prices for transaction preview
   * calculations.
   *
   * If successful, your response includes the data you sent with a `details` object that includes
   * totals for the supplied prices.
   *
   * Transaction previews don't create transactions, so no `id` is returned.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Transactions.PreviewTransactionCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewTransactionCreate(
    request: Transactions.PreviewTransactionCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsPreviewResponse, Transactions.PreviewTransactionCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/preview"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionPreviewCreateSchema },
      },
      {
        success: { kind: "json", schema: transactionsPreviewResponseSchema },
        errorFactory: Transactions.PreviewTransactionCreateError,
      },
      options,
    );
  }

  /**
   * Revise customer information on a billed or completed transaction
   *
   * @remarks
   * Revises customer information for a billed or completed transaction.
   *
   * Revise a transaction to rectify incorrect customer, address, or business information on invoice
   * documents generated by Paddle.
   *
   * You can revise transaction details that don't impact the tax rates on a transaction. This
   * includes:
   *
   * * Customer name
   * * Business name and tax or VAT number (`tax_identifier`)
   * * Address details, apart from the country
   *
   * You can't remove a valid tax or VAT number, only replace it with another valid one. If a valid
   * tax or VAT number is added, Paddle automatically creates an adjustment to refund any tax where
   * applicable.
   *
   * Transactions can only be revised once.
   *
   * If successful, your response includes a copy of the transaction entity. [Get a
   * transaction](https://developer.paddle.com/api-reference/transactions/get-transaction) using the
   * `include` parameter with the `customer`, `address`, and `business` values to see the revised
   * customer information.
   *
   * Only the customer information for this transaction is updated. The related customer, address,
   * and business entities aren't updated.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Transactions.ReviseTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reviseTransaction(
    request: Transactions.ReviseTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsReviseResponse, Transactions.ReviseTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/revise"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionReviseSchema },
      },
      {
        success: { kind: "json", schema: transactionsReviseResponseSchema },
        errorFactory: Transactions.ReviseTransactionError,
      },
      options,
    );
  }

  /**
   * Update a transaction
   *
   * @remarks
   * Updates a transaction using its ID.
   *
   * You can update transactions that are `draft` or `ready`. `billed` and `completed` transactions
   * are considered records for tax and legal purposes, so they can't be changed. You can either:
   *
   * * Create [an adjustment](https://developer.paddle.com/api-reference/adjustments/overview) to
   *   record a refund or credit for a transaction.
   * * Cancel a `billed` transaction by sending a PATCH request to set `status` to `canceled`.
   *
   * The transaction `status` may only be set to `billed` or `canceled`. Other statuses are set
   * automatically by Paddle. Set a manually-collected transaction to `billed` to mark it as
   * finalized. This is essentially issuing an invoice. At this point, it becomes a legal record so
   * you can't make changes to it. Paddle automatically assigns an invoice number, creates [a
   * related subscription](https://developer.paddle.com/api-reference/subscriptions/overview), and
   * sends it to your customer.
   *
   * When making changes to items on a transaction, send the complete list of items that you'd like
   * to be on a transaction — including existing items. For each item, send an object containing
   * `price_id` and `quantity`. Paddle responds with the full `price` object for each item. See:
   * [Work with lists](https://developer.paddle.com/api-reference/about/lists)
   *
   * If successful, your response includes a copy of the updated transaction entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Transactions.UpdateTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTransaction(
    request: Transactions.UpdateTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsResponse1, Transactions.UpdateTransactionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => transactionIncludeQuerySchema))),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionUpdateSchema },
      },
      {
        success: { kind: "json", schema: transactionsResponse1Schema },
        errorFactory: Transactions.UpdateTransactionError,
      },
      options,
    );
  }
}

export namespace Transactions {
  export type CreateTransactionRequest = {
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: TransactionIncludeQuery[];
    body: TransactionCreate;
  };

  export class CreateTransactionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateTransactionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTransactionRequest = {
    /** Paddle ID of the transaction entity to work with. */
    transactionId: string;
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: TransactionIncludeQuery[];
  };

  export class GetTransactionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetTransactionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTransactionInvoiceRequest = {
    /** Paddle ID of the transaction entity to work with. */
    transactionId: string;
    /**
     * Determine whether the generated URL should download the PDF as an attachment saved locally,
     * or open it inline in the browser.
     *
     * Default: `attachment`.
     */
    disposition?: Disposition;
  };

  export class GetTransactionInvoiceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetTransactionInvoiceError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListTransactionsRequest = {
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: TransactionIncludeQuery[];
    /** Return only the IDs specified. Use a comma-separated list to get multiple entities. */
    id?: string[];
    /**
     * Return entities after the specified Paddle ID when working with paginated endpoints. Used in
     * the `meta.pagination.next` URL in responses for list operations.
     */
    after?: string;
    /**
     * Return entities billed at a specific time. Pass an RFC 3339 datetime string, or use `[LT]`
     * (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than
     * or equal to) operators. For example, `billed_at=2023-04-18T17:03:26` or
     * `billed_at[LT]=2023-04-18T17:03:26`.
     */
    billedAt?: string;
    /** Return entities that match the specified collection mode. */
    collectionMode?: CollectionMode;
    /**
     * Return entities created at a specific time. Pass an RFC 3339 datetime string, or use `[LT]`
     * (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than
     * or equal to) operators. For example, `created_at=2023-04-18T17:03:26` or
     * `created_at[LT]=2023-04-18T17:03:26`.
     */
    createdAt?: string;
    /**
     * Return entities related to the specified customer. Use a comma-separated list to specify
     * multiple customer IDs.
     */
    customerId?: string[];
    /**
     * Return entities that match the invoice number. Use a comma-separated list to specify multiple
     * invoice numbers.
     */
    invoiceNumber?: string[];
    /**
     * Return entities related to the specified origin. Use a comma-separated list to specify
     * multiple origins.
     */
    origin?: TransactionOriginQuery[];
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `billed_at`, `created_at`, `id`, and `updated_at`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /**
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: TransactionStatusQuery[];
    /**
     * Return entities related to the specified subscription. Use a comma-separated list to specify
     * multiple subscription IDs. Pass `null` to return entities that aren't related to any
     * subscription.
     */
    subscriptionId?: string[] | null;
    /**
     * Set how many entities are returned per page. Paddle returns the maximum number of results if
     * a number greater than the maximum is requested. Check `meta.pagination.per_page` in the
     * response to see how many were returned.
     *
     * Default: `30`; Maximum: `30`.
     *
     * @default 30
     */
    perPage?: number;
    /**
     * Return entities updated at a specific time. Pass an RFC 3339 datetime string, or use `[LT]`
     * (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than
     * or equal to) operators. For example, `updated_at=2023-04-18T17:03:26` or
     * `updated_at[LT]=2023-04-18T17:03:26`.
     */
    updatedAt?: string;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListTransactionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListTransactionsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PreviewTransactionCreateRequest = {
    body: TransactionPreviewCreate;
  };

  export class PreviewTransactionCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<PreviewTransactionCreateError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ReviseTransactionRequest = {
    /** Paddle ID of the transaction entity to work with. */
    transactionId: string;
    body: TransactionRevise;
  };

  export class ReviseTransactionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ReviseTransactionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateTransactionRequest = {
    /** Paddle ID of the transaction entity to work with. */
    transactionId: string;
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: TransactionIncludeQuery[];
    body: TransactionUpdate;
  };

  export class UpdateTransactionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateTransactionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
