<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 11 operations · Request and error types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateSubscription

- **Signature**: `activateSubscription(request: Subscriptions.ActivateSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionsActivateResponse, Subscriptions.ActivateSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/activate`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsActivateResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.ActivateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.ActivateSubscriptionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsActivateResponse` | `subscriptionsActivateResponseSchema` | `src/models/subscriptions-activate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### cancelSubscription

- **Signature**: `cancelSubscription(request: Subscriptions.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionsCancelResponse, Subscriptions.CancelSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsCancelResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.CancelSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.CancelSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SubscriptionCancel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionCancel` | `subscriptionCancelSchema` | `src/models/subscription-cancel.ts` |
| `SubscriptionsCancelResponse` | `subscriptionsCancelResponseSchema` | `src/models/subscriptions-cancel-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createSubscriptionCharge

- **Signature**: `createSubscriptionCharge(request: Subscriptions.CreateSubscriptionChargeRequest, options?: RequestOptions): ApiPromise<SubscriptionsChargeResponse, Subscriptions.CreateSubscriptionChargeError>`
- **Wire**: `POST /subscriptions/{subscription_id}/charge`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsChargeResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.CreateSubscriptionChargeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.CreateSubscriptionChargeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SubscriptionCharge` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionCharge` | `subscriptionChargeSchema` | `src/models/subscription-charge.ts` |
| `SubscriptionsChargeResponse` | `subscriptionsChargeResponseSchema` | `src/models/subscriptions-charge-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSubscription

- **Signature**: `getSubscription(request: Subscriptions.GetSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionsResponse1, Subscriptions.GetSubscriptionError>`
- **Wire**: `GET /subscriptions/{subscription_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.GetSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.GetSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `include` | `query` | — | `SubscriptionIncludeEnum[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionIncludeEnum` | `subscriptionIncludeEnumSchema` | `src/models/subscription-include-enum.ts` |
| `SubscriptionsResponse1` | `subscriptionsResponse1Schema` | `src/models/subscriptions-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSubscriptionUpdatePaymentMethodTransaction

- **Signature**: `getSubscriptionUpdatePaymentMethodTransaction(request: Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionRequest, options?: RequestOptions): ApiPromise<SubscriptionsUpdatePaymentMethodTransactionResponse, Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError>`
- **Wire**: `GET /subscriptions/{subscription_id}/update-payment-method-transaction`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionsUpdatePaymentMethodTransactionResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsUpdatePaymentMethodTransactionResponse` | `subscriptionsUpdatePaymentMethodTransactionResponseSchema` | `src/models/subscriptions-update-payment-method-transaction-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSubscriptions

- **Signature**: `listSubscriptions(request: Subscriptions.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise<SubscriptionsResponse, Subscriptions.ListSubscriptionsError>`
- **Wire**: `GET /subscriptions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.ListSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.ListSubscriptionsRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `addressId` | `query` | `address_id` | `string[]` | no | — |
| `collectionMode` | `query` | `collection_mode` | `CollectionModeQuery` | no | — |
| `customerId` | `query` | `customer_id` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `priceId` | `query` | `price_id` | `string[]` | no | — |
| `scheduledChangeAction` | `query` | `scheduled_change_action` | `ScheduledChangeActionQuery[]` | no | — |
| `nextBilledAt` | `query` | `next_billed_at` | `NextBilledAtModel` | no | — |
| `status` | `query` | — | `SubscriptionStatusQuery[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CollectionModeQuery` | `collectionModeQuerySchema` | `src/models/collection-mode-query.ts` |
| `ScheduledChangeActionQuery` | `scheduledChangeActionQuerySchema` | `src/models/scheduled-change-action-query.ts` |
| `NextBilledAtModel` | `nextBilledAtModelSchema` | `src/models/unions/next-billed-at-model.ts` |
| `SubscriptionStatusQuery` | `subscriptionStatusQuerySchema` | `src/models/subscription-status-query.ts` |
| `SubscriptionsResponse` | `subscriptionsResponseSchema` | `src/models/subscriptions-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### pauseSubscription

- **Signature**: `pauseSubscription(request: Subscriptions.PauseSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionsPauseResponse, Subscriptions.PauseSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/pause`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsPauseResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.PauseSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.PauseSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SubscriptionPause` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionPause` | `subscriptionPauseSchema` | `src/models/subscription-pause.ts` |
| `SubscriptionsPauseResponse` | `subscriptionsPauseResponseSchema` | `src/models/subscriptions-pause-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### previewSubscriptionCharge

- **Signature**: `previewSubscriptionCharge(request: Subscriptions.PreviewSubscriptionChargeRequest, options?: RequestOptions): ApiPromise<SubscriptionsChargePreviewResponse, Subscriptions.PreviewSubscriptionChargeError>`
- **Wire**: `POST /subscriptions/{subscription_id}/charge/preview`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsChargePreviewResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.PreviewSubscriptionChargeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.PreviewSubscriptionChargeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SubscriptionCharge` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionCharge` | `subscriptionChargeSchema` | `src/models/subscription-charge.ts` |
| `SubscriptionsChargePreviewResponse` | `subscriptionsChargePreviewResponseSchema` | `src/models/subscriptions-charge-preview-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### previewSubscriptionUpdate

- **Signature**: `previewSubscriptionUpdate(request: Subscriptions.PreviewSubscriptionUpdateRequest, options?: RequestOptions): ApiPromise<SubscriptionsPreviewResponse, Subscriptions.PreviewSubscriptionUpdateError>`
- **Wire**: `PATCH /subscriptions/{subscription_id}/preview`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsPreviewResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.PreviewSubscriptionUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.PreviewSubscriptionUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SubscriptionUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionUpdate` | `subscriptionUpdateSchema` | `src/models/subscription-update.ts` |
| `SubscriptionsPreviewResponse` | `subscriptionsPreviewResponseSchema` | `src/models/subscriptions-preview-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### resumeSubscription

- **Signature**: `resumeSubscription(request: Subscriptions.ResumeSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionsResumeResponse, Subscriptions.ResumeSubscriptionError>`
- **Wire**: `POST /subscriptions/{subscription_id}/resume`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsResumeResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.ResumeSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.ResumeSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SubscriptionResume1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResume1` | `subscriptionResume1Schema` | `src/models/unions/subscription-resume1.ts` |
| `SubscriptionsResumeResponse` | `subscriptionsResumeResponseSchema` | `src/models/subscriptions-resume-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: Subscriptions.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise<SubscriptionsResponse2, Subscriptions.UpdateSubscriptionError>`
- **Wire**: `PATCH /subscriptions/{subscription_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionsResponse2`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Subscriptions.UpdateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.UpdateSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SubscriptionUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionUpdate` | `subscriptionUpdateSchema` | `src/models/subscription-update.ts` |
| `SubscriptionsResponse2` | `subscriptionsResponse2Schema` | `src/models/subscriptions-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

