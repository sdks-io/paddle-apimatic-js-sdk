<!-- Generated file — do not edit; regenerated with the SDK. -->

# NotificationLogs — operations

Accessor: `client.notificationLogs` · Source: `src/resources/notification-logs.ts` · 1 operation · Request and error types: namespace `NotificationLogs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listNotificationLogs

- **Signature**: `listNotificationLogs(request: NotificationLogs.ListNotificationLogsRequest, options?: RequestOptions): ApiPromise<NotificationsLogsResponse, NotificationLogs.ListNotificationLogsError>`
- **Wire**: `GET /notifications/{notification_id}/logs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsLogsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `NotificationLogs.ListNotificationLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `NotificationLogs.ListNotificationLogsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `notificationId` | `path` | `notification_id` | `string` | yes | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsLogsResponse` | `notificationsLogsResponseSchema` | `src/models/notifications-logs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

