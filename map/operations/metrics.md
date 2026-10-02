<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `src/resources/metrics.ts` · 7 operations · Request and error types: namespace `Metrics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMetricsActiveSubscribers

- **Signature**: `getMetricsActiveSubscribers(request: Metrics.GetMetricsActiveSubscribersRequest, options?: RequestOptions): ApiPromise<MetricsActiveSubscribersResponse, Metrics.GetMetricsActiveSubscribersError>`
- **Wire**: `GET /metrics/active-subscribers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsActiveSubscribersResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Metrics.GetMetricsActiveSubscribersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Metrics.GetMetricsActiveSubscribersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsActiveSubscribersResponse` | `metricsActiveSubscribersResponseSchema` | `src/models/metrics-active-subscribers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getMetricsChargebacks

- **Signature**: `getMetricsChargebacks(request: Metrics.GetMetricsChargebacksRequest, options?: RequestOptions): ApiPromise<MetricsChargebacksResponse, Metrics.GetMetricsChargebacksError>`
- **Wire**: `GET /metrics/chargebacks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsChargebacksResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Metrics.GetMetricsChargebacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Metrics.GetMetricsChargebacksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsChargebacksResponse` | `metricsChargebacksResponseSchema` | `src/models/metrics-chargebacks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getMetricsCheckoutConversion

- **Signature**: `getMetricsCheckoutConversion(request: Metrics.GetMetricsCheckoutConversionRequest, options?: RequestOptions): ApiPromise<MetricsCheckoutConversionResponse, Metrics.GetMetricsCheckoutConversionError>`
- **Wire**: `GET /metrics/checkout-conversion`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsCheckoutConversionResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Metrics.GetMetricsCheckoutConversionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Metrics.GetMetricsCheckoutConversionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsCheckoutConversionResponse` | `metricsCheckoutConversionResponseSchema` | `src/models/metrics-checkout-conversion-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getMetricsMonthlyRecurringRevenue

- **Signature**: `getMetricsMonthlyRecurringRevenue(request: Metrics.GetMetricsMonthlyRecurringRevenueRequest, options?: RequestOptions): ApiPromise<MetricsMonthlyRecurringRevenueResponse, Metrics.GetMetricsMonthlyRecurringRevenueError>`
- **Wire**: `GET /metrics/monthly-recurring-revenue`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsMonthlyRecurringRevenueResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Metrics.GetMetricsMonthlyRecurringRevenueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Metrics.GetMetricsMonthlyRecurringRevenueRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsMonthlyRecurringRevenueResponse` | `metricsMonthlyRecurringRevenueResponseSchema` | `src/models/metrics-monthly-recurring-revenue-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getMetricsMonthlyRecurringRevenueChange

- **Signature**: `getMetricsMonthlyRecurringRevenueChange(request: Metrics.GetMetricsMonthlyRecurringRevenueChangeRequest, options?: RequestOptions): ApiPromise<MetricsMonthlyRecurringRevenueChangeResponse, Metrics.GetMetricsMonthlyRecurringRevenueChangeError>`
- **Wire**: `GET /metrics/monthly-recurring-revenue-change`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsMonthlyRecurringRevenueChangeResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Metrics.GetMetricsMonthlyRecurringRevenueChangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Metrics.GetMetricsMonthlyRecurringRevenueChangeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsMonthlyRecurringRevenueChangeResponse` | `metricsMonthlyRecurringRevenueChangeResponseSchema` | `src/models/metrics-monthly-recurring-revenue-change-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getMetricsRefunds

- **Signature**: `getMetricsRefunds(request: Metrics.GetMetricsRefundsRequest, options?: RequestOptions): ApiPromise<MetricsRefundsResponse, Metrics.GetMetricsRefundsError>`
- **Wire**: `GET /metrics/refunds`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsRefundsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Metrics.GetMetricsRefundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Metrics.GetMetricsRefundsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsRefundsResponse` | `metricsRefundsResponseSchema` | `src/models/metrics-refunds-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getMetricsRevenue

- **Signature**: `getMetricsRevenue(request: Metrics.GetMetricsRevenueRequest, options?: RequestOptions): ApiPromise<MetricsRevenueResponse, Metrics.GetMetricsRevenueError>`
- **Wire**: `GET /metrics/revenue`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsRevenueResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Metrics.GetMetricsRevenueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Metrics.GetMetricsRevenueRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsRevenueResponse` | `metricsRevenueResponseSchema` | `src/models/metrics-revenue-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

