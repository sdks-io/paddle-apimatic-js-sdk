<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiscountGroups — operations

Accessor: `client.discountGroups` · Source: `src/resources/discount-groups.ts` · 4 operations · Request and error types: namespace `DiscountGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDiscountGroup

- **Signature**: `createDiscountGroup(request: DiscountGroups.CreateDiscountGroupRequest, options?: RequestOptions): ApiPromise<DiscountGroupsResponse1, DiscountGroups.CreateDiscountGroupError>`
- **Wire**: `POST /discount-groups`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiscountGroupsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `DiscountGroups.CreateDiscountGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DiscountGroups.CreateDiscountGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DiscountGroupCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscountGroupCreate` | `discountGroupCreateSchema` | `src/models/discount-group-create.ts` |
| `DiscountGroupsResponse1` | `discountGroupsResponse1Schema` | `src/models/discount-groups-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getDiscountGroup

- **Signature**: `getDiscountGroup(request: DiscountGroups.GetDiscountGroupRequest, options?: RequestOptions): ApiPromise<DiscountGroupsResponse1, DiscountGroups.GetDiscountGroupError>`
- **Wire**: `GET /discount-groups/{discount_group_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiscountGroupsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `DiscountGroups.GetDiscountGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DiscountGroups.GetDiscountGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `discountGroupId` | `path` | `discount_group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscountGroupsResponse1` | `discountGroupsResponse1Schema` | `src/models/discount-groups-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listDiscountGroups

- **Signature**: `listDiscountGroups(request: DiscountGroups.ListDiscountGroupsRequest, options?: RequestOptions): ApiPromise<DiscountGroupsResponse, DiscountGroups.ListDiscountGroupsError>`
- **Wire**: `GET /discount-groups`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiscountGroupsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `DiscountGroups.ListDiscountGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DiscountGroups.ListDiscountGroupsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscountGroupsResponse` | `discountGroupsResponseSchema` | `src/models/discount-groups-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateDiscountGroup

- **Signature**: `updateDiscountGroup(request: DiscountGroups.UpdateDiscountGroupRequest, options?: RequestOptions): ApiPromise<DiscountGroupsResponse1, DiscountGroups.UpdateDiscountGroupError>`
- **Wire**: `PATCH /discount-groups/{discount_group_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiscountGroupsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `DiscountGroups.UpdateDiscountGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DiscountGroups.UpdateDiscountGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `discountGroupId` | `path` | `discount_group_id` | `string` | yes |
| `body` | `body` | — | `DiscountGroupUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscountGroupUpdate` | `discountGroupUpdateSchema` | `src/models/discount-group-update.ts` |
| `DiscountGroupsResponse1` | `discountGroupsResponse1Schema` | `src/models/discount-groups-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

