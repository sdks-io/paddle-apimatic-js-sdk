<!-- Generated file — do not edit; regenerated with the SDK. -->

# CheckoutDomains — operations

Accessor: `client.checkoutDomains` · Source: `src/resources/checkout-domains.ts` · 4 operations · Request and error types: namespace `CheckoutDomains`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCheckoutDomain

- **Signature**: `deleteCheckoutDomain(request: CheckoutDomains.DeleteCheckoutDomainRequest, options?: RequestOptions): ApiPromise<undefined, CheckoutDomains.DeleteCheckoutDomainError>`
- **Wire**: `DELETE /checkout-domains/{domain_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `CheckoutDomains.DeleteCheckoutDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `CheckoutDomains.DeleteCheckoutDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainId` | `path` | `domain_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCheckoutDomain

- **Signature**: `getCheckoutDomain(request: CheckoutDomains.GetCheckoutDomainRequest, options?: RequestOptions): ApiPromise<CheckoutDomainsResponse1, CheckoutDomains.GetCheckoutDomainError>`
- **Wire**: `GET /checkout-domains/{domain_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutDomainsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `CheckoutDomains.GetCheckoutDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `CheckoutDomains.GetCheckoutDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainId` | `path` | `domain_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutDomainsResponse1` | `checkoutDomainsResponse1Schema` | `src/models/checkout-domains-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCheckoutDomains

- **Signature**: `listCheckoutDomains(request: CheckoutDomains.ListCheckoutDomainsRequest, options?: RequestOptions): ApiPromise<CheckoutDomainsResponse, CheckoutDomains.ListCheckoutDomainsError>`
- **Wire**: `GET /checkout-domains`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutDomainsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `CheckoutDomains.ListCheckoutDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `CheckoutDomains.ListCheckoutDomainsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `domain` | `query` | — | `string` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `CheckoutDomainApprovalStatusQuery[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutDomainApprovalStatusQuery` | `checkoutDomainApprovalStatusQuerySchema` | `src/models/checkout-domain-approval-status-query.ts` |
| `CheckoutDomainsResponse` | `checkoutDomainsResponseSchema` | `src/models/checkout-domains-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### verifyCheckoutDomainPaymentMethod

- **Signature**: `verifyCheckoutDomainPaymentMethod(request: CheckoutDomains.VerifyCheckoutDomainPaymentMethodRequest, options?: RequestOptions): ApiPromise<CheckoutDomainsVerifyPaymentMethodResponse, CheckoutDomains.VerifyCheckoutDomainPaymentMethodError>`
- **Wire**: `POST /checkout-domains/{domain_id}/verify-payment-method`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckoutDomainsVerifyPaymentMethodResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `CheckoutDomains.VerifyCheckoutDomainPaymentMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `CheckoutDomains.VerifyCheckoutDomainPaymentMethodRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainId` | `path` | `domain_id` | `string` | yes |
| `body` | `body` | — | `CheckoutDomainVerifyPaymentMethod` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutDomainVerifyPaymentMethod` | `checkoutDomainVerifyPaymentMethodSchema` | `src/models/checkout-domain-verify-payment-method.ts` |
| `CheckoutDomainsVerifyPaymentMethodResponse` | `checkoutDomainsVerifyPaymentMethodResponseSchema` | `src/models/checkout-domains-verify-payment-method-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

