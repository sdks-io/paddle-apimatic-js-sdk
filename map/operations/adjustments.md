<!-- Generated file — do not edit; regenerated with the SDK. -->

# Adjustments — operations

Accessor: `client.adjustments` · Source: `src/resources/adjustments.ts` · 3 operations · Request and error types: namespace `Adjustments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAdjustment

- **Signature**: `createAdjustment(request: Adjustments.CreateAdjustmentRequest, options?: RequestOptions): ApiPromise<AdjustmentsResponse1, Adjustments.CreateAdjustmentError>`
- **Wire**: `POST /adjustments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdjustmentsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Adjustments.CreateAdjustmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Adjustments.CreateAdjustmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AdjustmentCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdjustmentCreate` | `adjustmentCreateSchema` | `src/models/adjustment-create.ts` |
| `AdjustmentsResponse1` | `adjustmentsResponse1Schema` | `src/models/adjustments-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAdjustmentCreditNote

- **Signature**: `getAdjustmentCreditNote(request: Adjustments.GetAdjustmentCreditNoteRequest, options?: RequestOptions): ApiPromise<AdjustmentsCreditNoteResponse, Adjustments.GetAdjustmentCreditNoteError>`
- **Wire**: `GET /adjustments/{adjustment_id}/credit-note`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdjustmentsCreditNoteResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Adjustments.GetAdjustmentCreditNoteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Adjustments.GetAdjustmentCreditNoteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adjustmentId` | `path` | `adjustment_id` | `string` | yes |
| `disposition` | `query` | — | `Disposition` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Disposition` | `dispositionSchema` | `src/models/disposition.ts` |
| `AdjustmentsCreditNoteResponse` | `adjustmentsCreditNoteResponseSchema` | `src/models/adjustments-credit-note-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listAdjustments

- **Signature**: `listAdjustments(request: Adjustments.ListAdjustmentsRequest, options?: RequestOptions): ApiPromise<AdjustmentsResponse, Adjustments.ListAdjustmentsError>`
- **Wire**: `GET /adjustments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdjustmentsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Adjustments.ListAdjustmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Adjustments.ListAdjustmentsRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `action` | `query` | — | `AdjustmentActionQuery[]` | no | — |
| `customerId` | `query` | `customer_id` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `perPage` | `query` | `per_page` | `number` | no | `10` |
| `status` | `query` | — | `AdjustmentStatusQuery[]` | no | — |
| `subscriptionId` | `query` | `subscription_id` | `string[]` | no | — |
| `transactionId` | `query` | `transaction_id` | `string[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdjustmentActionQuery` | `adjustmentActionQuerySchema` | `src/models/adjustment-action-query.ts` |
| `AdjustmentStatusQuery` | `adjustmentStatusQuerySchema` | `src/models/adjustment-status-query.ts` |
| `AdjustmentsResponse` | `adjustmentsResponseSchema` | `src/models/adjustments-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

