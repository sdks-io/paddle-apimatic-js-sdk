import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { pricePreviewRequestSchema, type PricePreviewRequest } from "../models/price-preview-request.js";
import {
  pricingPreviewResponseSchema,
  type PricingPreviewResponse,
} from "../models/pricing-preview-response.js";
import type { Servers } from "../servers.js";

/**
 * Pricing previews are calculated totals for prices.
 */
export class PricingPreview {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Preview prices
   *
   * @remarks
   * Previews calculations for one or more prices. Typically used for building pricing pages.
   *
   * You can provide location information when previewing prices. You must provide this if you want
   * Paddle to calculate tax or [automatically localize
   * prices](https://developer.paddle.com/build/products/offer-localized-pricing). You can provide
   * one of:
   *
   * * `customer_ip_address`: Paddle fetches location using the IP address to calculate totals.
   * * `address`: Paddle uses the country and ZIP code (where supplied) to calculate totals.
   * * `customer_id`, `address_id`, `business_id`: Paddle uses existing customer data to calculate
   *   totals. Typically used for logged-in customers.
   *
   * If successful, your response includes the data you sent with a `details` object that includes
   * totals for the supplied prices.
   *
   * Each line item includes `formatted_unit_totals` and `formatted_totals` objects that return
   * totals formatted for the country or region you're working with, including the currency symbol.
   *
   * You can work with the preview prices operation using the
   * [`Paddle.PricePreview()`](https://developer.paddle.com/paddlejs/methods/paddle-pricepreview)
   * method in Paddle.js. When working with `Paddle.PricePreview()`, request and response fields are
   * `camelCase` rather than `snake_case`.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link PricingPreview.PreviewPricesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewPrices(
    request: PricingPreview.PreviewPricesRequest,
    options?: RequestOptions,
  ): ApiPromise<PricingPreviewResponse, PricingPreview.PreviewPricesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pricing-preview"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pricePreviewRequestSchema },
      },
      {
        success: { kind: "json", schema: pricingPreviewResponseSchema },
        errorFactory: PricingPreview.PreviewPricesError,
      },
      options,
    );
  }
}

export namespace PricingPreview {
  export type PreviewPricesRequest = {
    body: PricePreviewRequest;
  };

  export class PreviewPricesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<PreviewPricesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
