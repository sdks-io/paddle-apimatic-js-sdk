<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionHistoryApi — operations

Accessor: `client.subscriptionHistoryApi` · Source: `src/resources/subscription-history-api.ts` · 1 operation · Request and error types: namespace `SubscriptionHistoryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listSubscriptionHistory

- **Signature**: `listSubscriptionHistory(request: SubscriptionHistoryApi.ListSubscriptionHistoryRequest, options?: RequestOptions): ApiPromise<SubscriptionsHistoryResponse, SubscriptionHistoryApi.ListSubscriptionHistoryError>`
- **Wire**: `GET /subscriptions/{subscription_id}/history`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionsHistoryResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SubscriptionHistoryApi.ListSubscriptionHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionHistoryApi.ListSubscriptionHistoryRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes | — |
| `action` | `query` | — | `SubscriptionHistoryActionQuery[]` | no | — |
| `source` | `query` | — | `SubscriptionHistorySourceQuery[]` | no | — |
| `actorType` | `query` | `actor_type` | `SubscriptionHistoryActorTypeQuery[]` | no | — |
| `actorId` | `query` | `actor_id` | `string[]` | no | — |
| `reason` | `query` | — | `SubscriptionHistoryReasonQuery[]` | no | — |
| `occurredAt` | `query` | `occurred_at` | `string` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `orderBy` | `query` | `order_by` | `string` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionHistoryActionQuery` | `subscriptionHistoryActionQuerySchema` | `src/models/subscription-history-action-query.ts` |
| `SubscriptionHistorySourceQuery` | `subscriptionHistorySourceQuerySchema` | `src/models/subscription-history-source-query.ts` |
| `SubscriptionHistoryActorTypeQuery` | `subscriptionHistoryActorTypeQuerySchema` | `src/models/subscription-history-actor-type-query.ts` |
| `SubscriptionHistoryReasonQuery` | `subscriptionHistoryReasonQuerySchema` | `src/models/subscription-history-reason-query.ts` |
| `SubscriptionsHistoryResponse` | `subscriptionsHistoryResponseSchema` | `src/models/subscriptions-history-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

