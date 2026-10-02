<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.notifications` · Source: `src/resources/notifications.ts` · 3 operations · Request and error types: namespace `Notifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getNotification

- **Signature**: `getNotification(request: Notifications.GetNotificationRequest, options?: RequestOptions): ApiPromise<NotificationsResponse1, Notifications.GetNotificationError>`
- **Wire**: `GET /notifications/{notification_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Notifications.GetNotificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Notifications.GetNotificationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `notificationId` | `path` | `notification_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsResponse1` | `notificationsResponse1Schema` | `src/models/notifications-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listNotifications

- **Signature**: `listNotifications(request: Notifications.ListNotificationsRequest, options?: RequestOptions): ApiPromise<NotificationsResponse, Notifications.ListNotificationsError>`
- **Wire**: `GET /notifications`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Notifications.ListNotificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Notifications.ListNotificationsRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `notificationSettingId` | `query` | `notification_setting_id` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `search` | `query` | — | `string` | no | — |
| `status` | `query` | — | `Status3[]` | no | — |
| `filter` | `query` | — | `string` | no | — |
| `to` | `query` | — | `string` | no | — |
| `from` | `query` | — | `string` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status3` | `status3Schema` | `src/models/status3.ts` |
| `NotificationsResponse` | `notificationsResponseSchema` | `src/models/notifications-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### replayNotification

- **Signature**: `replayNotification(request: Notifications.ReplayNotificationRequest, options?: RequestOptions): ApiPromise<NotificationsReplayResponse, Notifications.ReplayNotificationError>`
- **Wire**: `POST /notifications/{notification_id}/replay`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationsReplayResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Notifications.ReplayNotificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Notifications.ReplayNotificationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `notificationId` | `path` | `notification_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsReplayResponse` | `notificationsReplayResponseSchema` | `src/models/notifications-replay-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

