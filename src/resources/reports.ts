import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { getReportCsvResponseSchema, type GetReportCsvResponse } from "../models/get-report-csv-response.js";
import {
  reportStatusQueryEnumSchema,
  type ReportStatusQueryEnum,
} from "../models/report-status-query-enum.js";
import { reportsResponseSchema, type ReportsResponse } from "../models/reports-response.js";
import { reportsResponse1Schema, type ReportsResponse1 } from "../models/reports-response1.js";
import { reportCreateSchema, type ReportCreate } from "../models/unions/report-create.js";
import type { Servers } from "../servers.js";

/**
 * Report entities describe a report generated in your Paddle system.
 */
export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a report
   *
   * @remarks
   * Creates a new report.
   *
   * Reports are created as `pending` initially while Paddle generates your report. They move to
   * `ready` when they're ready to download.
   *
   * You can download a report when it's ready using the [get a CSV file for a report
   * operation](https://developer.paddle.com/api-reference/reports/get-report-csv).
   *
   * If successful, your response includes a copy of the new report entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Reports.CreateReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReport(
    request: Reports.CreateReportRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportsResponse1, Reports.CreateReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reports"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: reportCreateSchema },
      },
      {
        success: { kind: "json", schema: reportsResponse1Schema },
        errorFactory: Reports.CreateReportError,
      },
      options,
    );
  }

  /**
   * Get a report
   *
   * @remarks
   * Returns a report using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Reports.GetReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReport(
    request: Reports.GetReportRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportsResponse1, Reports.GetReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/{report_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "report_id", value: request.reportId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportsResponse1Schema },
        errorFactory: Reports.GetReportError,
      },
      options,
    );
  }

  /**
   * Get a CSV file for a report
   *
   * @remarks
   * Returns a link to a CSV file for a report.
   *
   * Only returned for reports that are `ready`. This means Paddle has completed processing the
   * report and it's ready to download.
   *
   * The link returned is not a permanent link. It expires after 3 minutes.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Reports.GetReportCsvError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportCsv(
    request: Reports.GetReportCsvRequest,
    options?: RequestOptions,
  ): ApiPromise<GetReportCsvResponse, Reports.GetReportCsvError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/{report_id}/download-url"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "report_id", value: request.reportId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getReportCsvResponseSchema },
        errorFactory: Reports.GetReportCsvError,
      },
      options,
    );
  }

  /**
   * List reports
   *
   * @remarks
   * Returns a paginated list of reports. Use the query parameters to page through results.
   *
   * By default, Paddle returns reports that are `pending` or `ready`. Use the `status` query
   * parameter to return reports that are `failed`, `expired`, or `deleted`.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Reports.ListReportsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReports(
    request: Reports.ListReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportsResponse, Reports.ListReportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => reportStatusQueryEnumSchema))),
          },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportsResponseSchema },
        errorFactory: Reports.ListReportsError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type CreateReportRequest = {
    body: ReportCreate;
  };

  export class CreateReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateReportError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetReportRequest = {
    /** Paddle ID of the report entity. */
    reportId: string;
  };

  export class GetReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetReportError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetReportCsvRequest = {
    /** Paddle ID of the report entity. */
    reportId: string;
  };

  export class GetReportCsvError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetReportCsvError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListReportsRequest = {
    /**
     * Return entities after the specified Paddle ID when working with paginated endpoints. Used in
     * the `meta.pagination.next` URL in responses for list operations.
     */
    after?: string;
    /**
     * Set how many entities are returned per page. Paddle returns the maximum number of results if
     * a number greater than the maximum is requested. Check `meta.pagination.per_page` in the
     * response to see how many were returned.
     *
     * Default: `50`; Maximum: `200`.
     *
     * @default 50
     */
    perPage?: number;
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
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: ReportStatusQueryEnum[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListReportsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListReportsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
