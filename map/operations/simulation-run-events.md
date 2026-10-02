<!-- Generated file — do not edit; regenerated with the SDK. -->

# SimulationRunEvents — operations

Accessor: `client.simulationRunEvents` · Source: `src/resources/simulation-run-events.ts` · 3 operations · Request and error types: namespace `SimulationRunEvents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSimulationEvent

- **Signature**: `getSimulationEvent(request: SimulationRunEvents.GetSimulationEventRequest, options?: RequestOptions): ApiPromise<SimulationsRunsEventsSimulationEventIdResponse, SimulationRunEvents.GetSimulationEventError>`
- **Wire**: `GET /simulations/{simulation_id}/runs/{simulation_run_id}/events/{simulation_event_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimulationsRunsEventsSimulationEventIdResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SimulationRunEvents.GetSimulationEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimulationRunEvents.GetSimulationEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes |
| `simulationRunId` | `path` | `simulation_run_id` | `string` | yes |
| `simulationEventId` | `path` | `simulation_event_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationsRunsEventsSimulationEventIdResponse` | `simulationsRunsEventsSimulationEventIdResponseSchema` | `src/models/simulations-runs-events-simulation-event-id-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSimulationsEvents

- **Signature**: `listSimulationsEvents(request: SimulationRunEvents.ListSimulationsEventsRequest, options?: RequestOptions): ApiPromise<SimulationsRunsEventsResponse, SimulationRunEvents.ListSimulationsEventsError>`
- **Wire**: `GET /simulations/{simulation_id}/runs/{simulation_run_id}/events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimulationsRunsEventsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SimulationRunEvents.ListSimulationsEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimulationRunEvents.ListSimulationsEventsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes | — |
| `simulationRunId` | `path` | `simulation_run_id` | `string` | yes | — |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationsRunsEventsResponse` | `simulationsRunsEventsResponseSchema` | `src/models/simulations-runs-events-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### replaySimulationRunEvent

- **Signature**: `replaySimulationRunEvent(request: SimulationRunEvents.ReplaySimulationRunEventRequest, options?: RequestOptions): ApiPromise<SimulationsRunsEventsSimulationEventIdReplayResponse, SimulationRunEvents.ReplaySimulationRunEventError>`
- **Wire**: `POST /simulations/{simulation_id}/runs/{simulation_run_id}/events/{simulation_event_id}/replay`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SimulationsRunsEventsSimulationEventIdReplayResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SimulationRunEvents.ReplaySimulationRunEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimulationRunEvents.ReplaySimulationRunEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes |
| `simulationRunId` | `path` | `simulation_run_id` | `string` | yes |
| `simulationEventId` | `path` | `simulation_event_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationsRunsEventsSimulationEventIdReplayResponse` | `simulationsRunsEventsSimulationEventIdReplayResponseSchema` | `src/models/simulations-runs-events-simulation-event-id-replay-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

