<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventTypes — operations

Accessor: `client.eventTypes` · Source: `src/resources/event-types.ts` · 1 operation · Request and error types: namespace `EventTypes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listEventTypes

- **Signature**: `listEventTypes(options?: RequestOptions): ApiPromise<EventTypesResponse, EventTypes.ListEventTypesError>`
- **Wire**: `GET /event-types`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventTypesResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `EventTypes.ListEventTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `EventTypesResponse` | `eventTypesResponseSchema` | `src/models/event-types-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

