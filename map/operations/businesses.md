<!-- Generated file — do not edit; regenerated with the SDK. -->

# Businesses — operations

Accessor: `client.businesses` · Source: `src/resources/businesses.ts` · 4 operations · Request and error types: namespace `Businesses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBusiness

- **Signature**: `createBusiness(request: Businesses.CreateBusinessRequest, options?: RequestOptions): ApiPromise<CustomersBusinessesResponse1, Businesses.CreateBusinessError>`
- **Wire**: `POST /customers/{customer_id}/businesses`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersBusinessesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Businesses.CreateBusinessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Businesses.CreateBusinessRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `BusinessCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessCreate` | `businessCreateSchema` | `src/models/business-create.ts` |
| `CustomersBusinessesResponse1` | `customersBusinessesResponse1Schema` | `src/models/customers-businesses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getBusiness

- **Signature**: `getBusiness(request: Businesses.GetBusinessRequest, options?: RequestOptions): ApiPromise<CustomersBusinessesResponse1, Businesses.GetBusinessError>`
- **Wire**: `GET /customers/{customer_id}/businesses/{business_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersBusinessesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Businesses.GetBusinessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Businesses.GetBusinessRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `businessId` | `path` | `business_id` | `string` | yes |
| `customerId` | `path` | `customer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersBusinessesResponse1` | `customersBusinessesResponse1Schema` | `src/models/customers-businesses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listBusinesses

- **Signature**: `listBusinesses(request: Businesses.ListBusinessesRequest, options?: RequestOptions): ApiPromise<CustomersBusinessesResponse, Businesses.ListBusinessesError>`
- **Wire**: `GET /customers/{customer_id}/businesses`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersBusinessesResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Businesses.ListBusinessesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Businesses.ListBusinessesRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes | — |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `Status[]` | no | — |
| `search` | `query` | — | `string` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `CustomersBusinessesResponse` | `customersBusinessesResponseSchema` | `src/models/customers-businesses-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateBusiness

- **Signature**: `updateBusiness(request: Businesses.UpdateBusinessRequest, options?: RequestOptions): ApiPromise<CustomersBusinessesResponse1, Businesses.UpdateBusinessError>`
- **Wire**: `PATCH /customers/{customer_id}/businesses/{business_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersBusinessesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Businesses.UpdateBusinessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Businesses.UpdateBusinessRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `businessId` | `path` | `business_id` | `string` | yes |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `BusinessUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessUpdate` | `businessUpdateSchema` | `src/models/business-update.ts` |
| `CustomersBusinessesResponse1` | `customersBusinessesResponse1Schema` | `src/models/customers-businesses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

