<!-- Generated file — do not edit; regenerated with the SDK. -->

# Addresses — operations

Accessor: `client.addresses` · Source: `src/resources/addresses.ts` · 4 operations · Request and error types: namespace `Addresses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAddress

- **Signature**: `createAddress(request: Addresses.CreateAddressRequest, options?: RequestOptions): ApiPromise<CustomersAddressesResponse1, Addresses.CreateAddressError>`
- **Wire**: `POST /customers/{customer_id}/addresses`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersAddressesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Addresses.CreateAddressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Addresses.CreateAddressRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `AddressCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddressCreate` | `addressCreateSchema` | `src/models/address-create.ts` |
| `CustomersAddressesResponse1` | `customersAddressesResponse1Schema` | `src/models/customers-addresses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAddress

- **Signature**: `getAddress(request: Addresses.GetAddressRequest, options?: RequestOptions): ApiPromise<CustomersAddressesResponse1, Addresses.GetAddressError>`
- **Wire**: `GET /customers/{customer_id}/addresses/{address_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersAddressesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Addresses.GetAddressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Addresses.GetAddressRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `addressId` | `path` | `address_id` | `string` | yes |
| `customerId` | `path` | `customer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersAddressesResponse1` | `customersAddressesResponse1Schema` | `src/models/customers-addresses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listAddresses

- **Signature**: `listAddresses(request: Addresses.ListAddressesRequest, options?: RequestOptions): ApiPromise<CustomersAddressesResponse, Addresses.ListAddressesError>`
- **Wire**: `GET /customers/{customer_id}/addresses`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersAddressesResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Addresses.ListAddressesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Addresses.ListAddressesRequest` (8):

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
| `CustomersAddressesResponse` | `customersAddressesResponseSchema` | `src/models/customers-addresses-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateAddress

- **Signature**: `updateAddress(request: Addresses.UpdateAddressRequest, options?: RequestOptions): ApiPromise<CustomersAddressesResponse1, Addresses.UpdateAddressError>`
- **Wire**: `PATCH /customers/{customer_id}/addresses/{address_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersAddressesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Addresses.UpdateAddressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Addresses.UpdateAddressRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `addressId` | `path` | `address_id` | `string` | yes |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `AddressUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddressUpdate` | `addressUpdateSchema` | `src/models/address-update.ts` |
| `CustomersAddressesResponse1` | `customersAddressesResponse1Schema` | `src/models/customers-addresses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

