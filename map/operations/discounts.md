<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discounts — operations

Accessor: `client.discounts` · Source: `src/resources/discounts.ts` · 4 operations · Request and error types: namespace `Discounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDiscount

- **Signature**: `createDiscount(request: Discounts.CreateDiscountRequest, options?: RequestOptions): ApiPromise<DiscountsResponse1, Discounts.CreateDiscountError>`
- **Wire**: `POST /discounts`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiscountsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Discounts.CreateDiscountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Discounts.CreateDiscountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DiscountCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscountCreate` | `discountCreateSchema` | `src/models/discount-create.ts` |
| `DiscountsResponse1` | `discountsResponse1Schema` | `src/models/discounts-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getDiscount

- **Signature**: `getDiscount(request: Discounts.GetDiscountRequest, options?: RequestOptions): ApiPromise<DiscountsResponse2, Discounts.GetDiscountError>`
- **Wire**: `GET /discounts/{discount_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiscountsResponse2`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Discounts.GetDiscountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Discounts.GetDiscountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `discountId` | `path` | `discount_id` | `string` | yes |
| `include` | `query` | — | `DiscountIncludeEnum[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscountIncludeEnum` | `discountIncludeEnumSchema` | `src/models/discount-include-enum.ts` |
| `DiscountsResponse2` | `discountsResponse2Schema` | `src/models/discounts-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listDiscounts

- **Signature**: `listDiscounts(request: Discounts.ListDiscountsRequest, options?: RequestOptions): ApiPromise<DiscountsResponse, Discounts.ListDiscountsError>`
- **Wire**: `GET /discounts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiscountsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Discounts.ListDiscountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Discounts.ListDiscountsRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `include` | `query` | — | `DiscountIncludeEnum[]` | no | — |
| `code` | `query` | — | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `Status[]` | no | — |
| `mode` | `query` | — | `DiscountMode1` | no | — |
| `discountGroupId` | `query` | `discount_group_id` | `string[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscountIncludeEnum` | `discountIncludeEnumSchema` | `src/models/discount-include-enum.ts` |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `DiscountMode1` | `discountMode1Schema` | `src/models/discount-mode1.ts` |
| `DiscountsResponse` | `discountsResponseSchema` | `src/models/discounts-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateDiscount

- **Signature**: `updateDiscount(request: Discounts.UpdateDiscountRequest, options?: RequestOptions): ApiPromise<DiscountsResponse1, Discounts.UpdateDiscountError>`
- **Wire**: `PATCH /discounts/{discount_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiscountsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Discounts.UpdateDiscountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Discounts.UpdateDiscountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `discountId` | `path` | `discount_id` | `string` | yes |
| `body` | `body` | — | `UpdateDiscount` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateDiscount` | `updateDiscountSchema` | `src/models/update-discount.ts` |
| `DiscountsResponse1` | `discountsResponse1Schema` | `src/models/discounts-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

