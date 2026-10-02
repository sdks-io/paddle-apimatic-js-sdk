<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 4 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createReport

- **Signature**: `createReport(request: Reports.CreateReportRequest, options?: RequestOptions): ApiPromise<ReportsResponse1, Reports.CreateReportError>`
- **Wire**: `POST /reports`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReportsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Reports.CreateReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Reports.CreateReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ReportCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportCreate` | `reportCreateSchema` | `src/models/unions/report-create.ts` |
| `ReportsResponse1` | `reportsResponse1Schema` | `src/models/reports-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getReport

- **Signature**: `getReport(request: Reports.GetReportRequest, options?: RequestOptions): ApiPromise<ReportsResponse1, Reports.GetReportError>`
- **Wire**: `GET /reports/{report_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Reports.GetReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportId` | `path` | `report_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportsResponse1` | `reportsResponse1Schema` | `src/models/reports-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getReportCsv

- **Signature**: `getReportCsv(request: Reports.GetReportCsvRequest, options?: RequestOptions): ApiPromise<GetReportCsvResponse, Reports.GetReportCsvError>`
- **Wire**: `GET /reports/{report_id}/download-url`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetReportCsvResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Reports.GetReportCsvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportCsvRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportId` | `path` | `report_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetReportCsvResponse` | `getReportCsvResponseSchema` | `src/models/get-report-csv-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listReports

- **Signature**: `listReports(request: Reports.ListReportsRequest, options?: RequestOptions): ApiPromise<ReportsResponse, Reports.ListReportsError>`
- **Wire**: `GET /reports`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Reports.ListReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Reports.ListReportsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `ReportStatusQueryEnum[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportStatusQueryEnum` | `reportStatusQueryEnumSchema` | `src/models/report-status-query-enum.ts` |
| `ReportsResponse` | `reportsResponseSchema` | `src/models/reports-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

