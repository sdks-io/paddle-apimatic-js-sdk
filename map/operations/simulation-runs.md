<!-- Generated file — do not edit; regenerated with the SDK. -->

# SimulationRuns — operations

Accessor: `client.simulationRuns` · Source: `src/resources/simulation-runs.ts` · 3 operations · Request and error types: namespace `SimulationRuns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSimulationRun

- **Signature**: `createSimulationRun(request: SimulationRuns.CreateSimulationRunRequest, options?: RequestOptions): ApiPromise<SimulationsRunsResponse1, SimulationRuns.CreateSimulationRunError>`
- **Wire**: `POST /simulations/{simulation_id}/runs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SimulationsRunsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SimulationRuns.CreateSimulationRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimulationRuns.CreateSimulationRunRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationsRunsResponse1` | `simulationsRunsResponse1Schema` | `src/models/simulations-runs-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSimulationRun

- **Signature**: `getSimulationRun(request: SimulationRuns.GetSimulationRunRequest, options?: RequestOptions): ApiPromise<SimulationsRunsResponse2, SimulationRuns.GetSimulationRunError>`
- **Wire**: `GET /simulations/{simulation_id}/runs/{simulation_run_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimulationsRunsResponse2`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SimulationRuns.GetSimulationRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimulationRuns.GetSimulationRunRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes |
| `simulationRunId` | `path` | `simulation_run_id` | `string` | yes |
| `include` | `query` | — | `SimulationsRunIncludeEnum[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationsRunIncludeEnum` | `simulationsRunIncludeEnumSchema` | `src/models/simulations-run-include-enum.ts` |
| `SimulationsRunsResponse2` | `simulationsRunsResponse2Schema` | `src/models/simulations-runs-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listSimulationRuns

- **Signature**: `listSimulationRuns(request: SimulationRuns.ListSimulationRunsRequest, options?: RequestOptions): ApiPromise<SimulationsRunsResponse, SimulationRuns.ListSimulationRunsError>`
- **Wire**: `GET /simulations/{simulation_id}/runs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimulationsRunsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SimulationRuns.ListSimulationRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimulationRuns.ListSimulationRunsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `simulationId` | `path` | `simulation_id` | `string` | yes | — |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `include` | `query` | — | `SimulationsRunIncludeEnum[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationsRunIncludeEnum` | `simulationsRunIncludeEnumSchema` | `src/models/simulations-run-include-enum.ts` |
| `SimulationsRunsResponse` | `simulationsRunsResponseSchema` | `src/models/simulations-runs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

