<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 6 operations · Request and error types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomer

- **Signature**: `createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise<CustomersResponse1, Customers.CreateCustomerError>`
- **Wire**: `POST /customers`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Customers.CreateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CustomerCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerCreate` | `customerCreateSchema` | `src/models/customer-create.ts` |
| `CustomersResponse1` | `customersResponse1Schema` | `src/models/customers-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### generateCustomerAuthenticationToken

- **Signature**: `generateCustomerAuthenticationToken(request: Customers.GenerateCustomerAuthenticationTokenRequest, options?: RequestOptions): ApiPromise<CustomersAuthTokenResponse, Customers.GenerateCustomerAuthenticationTokenError>`
- **Wire**: `POST /customers/{customer_id}/auth-token`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersAuthTokenResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Customers.GenerateCustomerAuthenticationTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Customers.GenerateCustomerAuthenticationTokenRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersAuthTokenResponse` | `customersAuthTokenResponseSchema` | `src/models/customers-auth-token-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomer

- **Signature**: `getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise<CustomersResponse2, Customers.GetCustomerError>`
- **Wire**: `GET /customers/{customer_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersResponse2`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Customers.GetCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersResponse2` | `customersResponse2Schema` | `src/models/customers-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCreditBalances

- **Signature**: `listCreditBalances(request: Customers.ListCreditBalancesRequest, options?: RequestOptions): ApiPromise<CustomersCreditBalancesResponse, Customers.ListCreditBalancesError>`
- **Wire**: `GET /customers/{customer_id}/credit-balances`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersCreditBalancesResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Customers.ListCreditBalancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCreditBalancesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `currencyCode` | `query` | `currency_code` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersCreditBalancesResponse` | `customersCreditBalancesResponseSchema` | `src/models/customers-credit-balances-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomers

- **Signature**: `listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise<CustomersResponse, Customers.ListCustomersError>`
- **Wire**: `GET /customers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Customers.ListCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomersRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `email` | `query` | — | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `Status[]` | no | — |
| `search` | `query` | — | `string` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `CustomersResponse` | `customersResponseSchema` | `src/models/customers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise<CustomersResponse1, Customers.UpdateCustomerError>`
- **Wire**: `PATCH /customers/{customer_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Customers.UpdateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `CustomerUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerUpdate` | `customerUpdateSchema` | `src/models/customer-update.ts` |
| `CustomersResponse1` | `customersResponse1Schema` | `src/models/customers-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

