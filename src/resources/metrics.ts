import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  metricsActiveSubscribersResponseSchema,
  type MetricsActiveSubscribersResponse,
} from "../models/metrics-active-subscribers-response.js";
import {
  metricsChargebacksResponseSchema,
  type MetricsChargebacksResponse,
} from "../models/metrics-chargebacks-response.js";
import {
  metricsCheckoutConversionResponseSchema,
  type MetricsCheckoutConversionResponse,
} from "../models/metrics-checkout-conversion-response.js";
import {
  metricsMonthlyRecurringRevenueChangeResponseSchema,
  type MetricsMonthlyRecurringRevenueChangeResponse,
} from "../models/metrics-monthly-recurring-revenue-change-response.js";
import {
  metricsMonthlyRecurringRevenueResponseSchema,
  type MetricsMonthlyRecurringRevenueResponse,
} from "../models/metrics-monthly-recurring-revenue-response.js";
import {
  metricsRefundsResponseSchema,
  type MetricsRefundsResponse,
} from "../models/metrics-refunds-response.js";
import {
  metricsRevenueResponseSchema,
  type MetricsRevenueResponse,
} from "../models/metrics-revenue-response.js";
import type { Servers } from "../servers.js";

/**
 * Metrics entities contain timeseries data about your Paddle account, including revenue,
 * subscribers, and conversions.
 */
export class Metrics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get active subscribers metrics
   *
   * @remarks
   * Returns timeseries data for active subscriber counts in a given date range. Trends have a daily
   * granularity. Current number of paying users with active subscriptions (does not include
   * trialling users).
   *
   * When `to` and `from` are the same, returns an empty timeseries.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Metrics.GetMetricsActiveSubscribersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsActiveSubscribers(
    request: Metrics.GetMetricsActiveSubscribersRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricsActiveSubscribersResponse, Metrics.GetMetricsActiveSubscribersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics/active-subscribers"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsActiveSubscribersResponseSchema },
        errorFactory: Metrics.GetMetricsActiveSubscribersError,
      },
      options,
    );
  }

  /**
   * Get chargeback metrics
   *
   * @remarks
   * Returns timeseries data for chargebacks in a given date range. Trends have a daily granularity.
   * Total number of chargebacks received for the period. Does not include pre-chargeback alerts or
   * chargeback reversals.
   *
   * When `to` and `from` are the same, returns an empty timeseries.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Metrics.GetMetricsChargebacksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsChargebacks(
    request: Metrics.GetMetricsChargebacksRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricsChargebacksResponse, Metrics.GetMetricsChargebacksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics/chargebacks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsChargebacksResponseSchema },
        errorFactory: Metrics.GetMetricsChargebacksError,
      },
      options,
    );
  }

  /**
   * Get checkout conversion metrics
   *
   * @remarks
   * Returns timeseries data for checkout conversion in a given date range. Trends have a daily
   * granularity. The conversion rate for checkouts in the period. A checkout is considered
   * converted when a payment is successfully completed.
   *
   * When `to` and `from` are the same, returns an empty timeseries.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Metrics.GetMetricsCheckoutConversionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsCheckoutConversion(
    request: Metrics.GetMetricsCheckoutConversionRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricsCheckoutConversionResponse, Metrics.GetMetricsCheckoutConversionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics/checkout-conversion"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsCheckoutConversionResponseSchema },
        errorFactory: Metrics.GetMetricsCheckoutConversionError,
      },
      options,
    );
  }

  /**
   * Get MRR (monthly recurring revenue) metrics
   *
   * @remarks
   * Returns timeseries data for monthly recurring revenue in a given date range. Trends have a
   * daily granularity. Current monthly recurring revenue total. Includes new subscriptions,
   * upgrades, downgrades and churn. Does not include one-time payments or deductions for Paddle
   * fees.
   *
   * When `to` and `from` are the same, returns an empty timeseries.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Metrics.GetMetricsMonthlyRecurringRevenueError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsMonthlyRecurringRevenue(
    request: Metrics.GetMetricsMonthlyRecurringRevenueRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricsMonthlyRecurringRevenueResponse, Metrics.GetMetricsMonthlyRecurringRevenueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics/monthly-recurring-revenue"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsMonthlyRecurringRevenueResponseSchema },
        errorFactory: Metrics.GetMetricsMonthlyRecurringRevenueError,
      },
      options,
    );
  }

  /**
   * Get MRR change (monthly recurring revenue change) metrics
   *
   * @remarks
   * Returns timeseries data for monthly recurring revenue change in a given date range. Trends have
   * a daily granularity. Monthly recurring revenue (MRR) change compared to the same time interval
   * last month.
   *
   * When `to` and `from` are the same, returns an empty timeseries.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Metrics.GetMetricsMonthlyRecurringRevenueChangeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsMonthlyRecurringRevenueChange(
    request: Metrics.GetMetricsMonthlyRecurringRevenueChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MetricsMonthlyRecurringRevenueChangeResponse,
    Metrics.GetMetricsMonthlyRecurringRevenueChangeError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics/monthly-recurring-revenue-change"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsMonthlyRecurringRevenueChangeResponseSchema },
        errorFactory: Metrics.GetMetricsMonthlyRecurringRevenueChangeError,
      },
      options,
    );
  }

  /**
   * Get refund metrics
   *
   * @remarks
   * Returns timeseries data for refunds in a given date range. Trends have a daily granularity. The
   * transaction subtotal (base cost minus discounts excluding taxes and fees) of refunded products
   * returned to the customer. This does not include chargebacks.
   *
   * When `to` and `from` are the same, returns an empty timeseries.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Metrics.GetMetricsRefundsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsRefunds(
    request: Metrics.GetMetricsRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricsRefundsResponse, Metrics.GetMetricsRefundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics/refunds"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsRefundsResponseSchema },
        errorFactory: Metrics.GetMetricsRefundsError,
      },
      options,
    );
  }

  /**
   * Get net revenue metrics
   *
   * @remarks
   * Returns timeseries data for revenue in a given date range. Trends have a daily granularity. Net
   * revenue from completed payments (e.g. single purchase, subscription, B2B invoices) after tax &
   * fees have been deducted, but before adjustments such as refunds or chargebacks.
   *
   * When `to` and `from` are the same, returns an empty timeseries.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Metrics.GetMetricsRevenueError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsRevenue(
    request: Metrics.GetMetricsRevenueRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricsRevenueResponse, Metrics.GetMetricsRevenueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics/revenue"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsRevenueResponseSchema },
        errorFactory: Metrics.GetMetricsRevenueError,
      },
      options,
    );
  }
}

export namespace Metrics {
  export type GetMetricsActiveSubscribersRequest = {
    /**
     * Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00
     * UTC. Must be before or the same as `to`.
     */
    from: string;
    /**
     * Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00
     * UTC. Must be after or the same as `from`.
     */
    to: string;
  };

  export class GetMetricsActiveSubscribersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetMetricsActiveSubscribersError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetMetricsChargebacksRequest = {
    /**
     * Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00
     * UTC. Must be before or the same as `to`.
     */
    from: string;
    /**
     * Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00
     * UTC. Must be after or the same as `from`.
     */
    to: string;
  };

  export class GetMetricsChargebacksError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetMetricsChargebacksError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetMetricsCheckoutConversionRequest = {
    /**
     * Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00
     * UTC. Must be before or the same as `to`.
     */
    from: string;
    /**
     * Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00
     * UTC. Must be after or the same as `from`.
     */
    to: string;
  };

  export class GetMetricsCheckoutConversionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetMetricsCheckoutConversionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetMetricsMonthlyRecurringRevenueRequest = {
    /**
     * Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00
     * UTC. Must be before or the same as `to`.
     */
    from: string;
    /**
     * Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00
     * UTC. Must be after or the same as `from`.
     */
    to: string;
  };

  export class GetMetricsMonthlyRecurringRevenueError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetMetricsMonthlyRecurringRevenueError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetMetricsMonthlyRecurringRevenueChangeRequest = {
    /**
     * Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00
     * UTC. Must be before or the same as `to`.
     */
    from: string;
    /**
     * Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00
     * UTC. Must be after or the same as `from`.
     */
    to: string;
  };

  export class GetMetricsMonthlyRecurringRevenueChangeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetMetricsMonthlyRecurringRevenueChangeError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetMetricsRefundsRequest = {
    /**
     * Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00
     * UTC. Must be before or the same as `to`.
     */
    from: string;
    /**
     * Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00
     * UTC. Must be after or the same as `from`.
     */
    to: string;
  };

  export class GetMetricsRefundsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetMetricsRefundsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetMetricsRevenueRequest = {
    /**
     * Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00
     * UTC. Must be before or the same as `to`.
     */
    from: string;
    /**
     * Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00
     * UTC. Must be after or the same as `from`.
     */
    to: string;
  };

  export class GetMetricsRevenueError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetMetricsRevenueError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
