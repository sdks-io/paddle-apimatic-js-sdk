<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentMethods — operations

Accessor: `client.paymentMethods` · Source: `src/resources/payment-methods.ts` · 3 operations · Request and error types: namespace `PaymentMethods`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCustomerPaymentMethod

- **Signature**: `deleteCustomerPaymentMethod(request: PaymentMethods.DeleteCustomerPaymentMethodRequest, options?: RequestOptions): ApiPromise<undefined, PaymentMethods.DeleteCustomerPaymentMethodError>`
- **Wire**: `DELETE /customers/{customer_id}/payment-methods/{payment_method_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `PaymentMethods.DeleteCustomerPaymentMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethods.DeleteCustomerPaymentMethodRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `paymentMethodId` | `path` | `payment_method_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomerPaymentMethod

- **Signature**: `getCustomerPaymentMethod(request: PaymentMethods.GetCustomerPaymentMethodRequest, options?: RequestOptions): ApiPromise<CustomersPaymentMethodsResponse1, PaymentMethods.GetCustomerPaymentMethodError>`
- **Wire**: `GET /customers/{customer_id}/payment-methods/{payment_method_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersPaymentMethodsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `PaymentMethods.GetCustomerPaymentMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethods.GetCustomerPaymentMethodRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `paymentMethodId` | `path` | `payment_method_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersPaymentMethodsResponse1` | `customersPaymentMethodsResponse1Schema` | `src/models/customers-payment-methods-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomerPaymentMethods

- **Signature**: `listCustomerPaymentMethods(request: PaymentMethods.ListCustomerPaymentMethodsRequest, options?: RequestOptions): ApiPromise<CustomersPaymentMethodsResponse, PaymentMethods.ListCustomerPaymentMethodsError>`
- **Wire**: `GET /customers/{customer_id}/payment-methods`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersPaymentMethodsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `PaymentMethods.ListCustomerPaymentMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethods.ListCustomerPaymentMethodsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `addressId` | `query` | `address_id` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `supportsCheckout` | `query` | `supports_checkout` | `boolean` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersPaymentMethodsResponse` | `customersPaymentMethodsResponseSchema` | `src/models/customers-payment-methods-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

