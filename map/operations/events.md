<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 1 operation · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listEvents

- **Signature**: `listEvents(request: Events.ListEventsRequest, options?: RequestOptions): ApiPromise<EventsResponse, Events.ListEventsError>`
- **Wire**: `GET /events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Events.ListEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Events.ListEventsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `eventType` | `query` | `event_type` | `EventTypeName[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventTypeName` | `eventTypeNameSchema` | `src/models/event-type-name.ts` |
| `EventsResponse` | `eventsResponseSchema` | `src/models/events-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

