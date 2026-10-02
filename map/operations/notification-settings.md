<!-- Generated file — do not edit; regenerated with the SDK. -->

# NotificationSettings — operations

Accessor: `client.notificationSettings` · Source: `src/resources/notification-settings.ts` · 5 operations · Request and error types: namespace `NotificationSettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createNotificationSetting

- **Signature**: `createNotificationSetting(request: NotificationSettings.CreateNotificationSettingRequest, options?: RequestOptions): ApiPromise<NotificationSettingsResponse1, NotificationSettings.CreateNotificationSettingError>`
- **Wire**: `POST /notification-settings`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationSettingsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `NotificationSettings.CreateNotificationSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `NotificationSettings.CreateNotificationSettingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NotificationSettingCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationSettingCreate` | `notificationSettingCreateSchema` | `src/models/notification-setting-create.ts` |
| `NotificationSettingsResponse1` | `notificationSettingsResponse1Schema` | `src/models/notification-settings-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteNotificationSetting

- **Signature**: `deleteNotificationSetting(request: NotificationSettings.DeleteNotificationSettingRequest, options?: RequestOptions): ApiPromise<undefined, NotificationSettings.DeleteNotificationSettingError>`
- **Wire**: `DELETE /notification-settings/{notification_setting_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `NotificationSettings.DeleteNotificationSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `NotificationSettings.DeleteNotificationSettingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `notificationSettingId` | `path` | `notification_setting_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getNotificationSetting

- **Signature**: `getNotificationSetting(request: NotificationSettings.GetNotificationSettingRequest, options?: RequestOptions): ApiPromise<NotificationSettingsResponse1, NotificationSettings.GetNotificationSettingError>`
- **Wire**: `GET /notification-settings/{notification_setting_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationSettingsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `NotificationSettings.GetNotificationSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `NotificationSettings.GetNotificationSettingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `notificationSettingId` | `path` | `notification_setting_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationSettingsResponse1` | `notificationSettingsResponse1Schema` | `src/models/notification-settings-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listNotificationSettings

- **Signature**: `listNotificationSettings(request: NotificationSettings.ListNotificationSettingsRequest, options?: RequestOptions): ApiPromise<NotificationSettingsResponse, NotificationSettings.ListNotificationSettingsError>`
- **Wire**: `GET /notification-settings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationSettingsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `NotificationSettings.ListNotificationSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `NotificationSettings.ListNotificationSettingsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `200` |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `active` | `query` | — | `boolean` | no | — |
| `trafficSource` | `query` | `traffic_source` | `NotificationSettingTrafficSource` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationSettingTrafficSource` | `notificationSettingTrafficSourceSchema` | `src/models/notification-setting-traffic-source.ts` |
| `NotificationSettingsResponse` | `notificationSettingsResponseSchema` | `src/models/notification-settings-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateNotificationSetting

- **Signature**: `updateNotificationSetting(request: NotificationSettings.UpdateNotificationSettingRequest, options?: RequestOptions): ApiPromise<NotificationSettingsResponse1, NotificationSettings.UpdateNotificationSettingError>`
- **Wire**: `PATCH /notification-settings/{notification_setting_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationSettingsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `NotificationSettings.UpdateNotificationSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `NotificationSettings.UpdateNotificationSettingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `notificationSettingId` | `path` | `notification_setting_id` | `string` | yes |
| `body` | `body` | — | `NotificationSettingUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationSettingUpdate` | `notificationSettingUpdateSchema` | `src/models/notification-setting-update.ts` |
| `NotificationSettingsResponse1` | `notificationSettingsResponse1Schema` | `src/models/notification-settings-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

