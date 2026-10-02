<!-- Generated file — do not edit; regenerated with the SDK. -->

# Simulations — operations

Accessor: `client.simulations` · Source: `src/resources/simulations.ts` · 4 operations · Request and error types: namespace `Simulations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSimulation

- **Signature**: `createSimulation(request: Simulations.CreateSimulationRequest, options?: RequestOptions): ApiPromise<SimulationsResponse1, Simulations.CreateSimulationError>`
- **Wire**: `POST /simulations`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SimulationsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Simulations.CreateSimulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Simulations.CreateSimulationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SimulationCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationCreate` | `simulationCreateSchema` | `src/models/unions/simulation-create.ts` |
| `SimulationsResponse1` | `simulationsResponse1Schema` | `src/models/simulations-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSimulation

- **Signature**: `getSimulation(request: Simulations.GetSimulationRequest, options?: RequestOptions): ApiPromise<SimulationsResponse1, Simulations.GetSimulationError>`
- **Wire**: `GET /simulations/{simulation_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimulationsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Simulations.GetSimulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Simulations.GetSimulationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationsResponse1` | `simulationsResponse1Schema` | `src/models/simulations-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSimulations

- **Signature**: `listSimulations(request: Simulations.ListSimulationsRequest, options?: RequestOptions): ApiPromise<SimulationsResponse, Simulations.ListSimulationsError>`
- **Wire**: `GET /simulations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimulationsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Simulations.ListSimulationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Simulations.ListSimulationsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `notificationSettingId` | `query` | `notification_setting_id` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `Status[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `SimulationsResponse` | `simulationsResponseSchema` | `src/models/simulations-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSimulation

- **Signature**: `updateSimulation(request: Simulations.UpdateSimulationRequest, options?: RequestOptions): ApiPromise<SimulationsResponse1, Simulations.UpdateSimulationError>`
- **Wire**: `PATCH /simulations/{simulation_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SimulationsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Simulations.UpdateSimulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Simulations.UpdateSimulationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes |
| `body` | `body` | — | `SimulationUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationUpdate` | `simulationUpdateSchema` | `src/models/unions/simulation-update.ts` |
| `SimulationsResponse1` | `simulationsResponse1Schema` | `src/models/simulations-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

