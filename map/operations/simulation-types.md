<!-- Generated file — do not edit; regenerated with the SDK. -->

# SimulationTypes — operations

Accessor: `client.simulationTypes` · Source: `src/resources/simulation-types.ts` · 1 operation · Request and error types: namespace `SimulationTypes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listSimulationTypes

- **Signature**: `listSimulationTypes(options?: RequestOptions): ApiPromise<SimulationTypesResponse, SimulationTypes.ListSimulationTypesError>`
- **Wire**: `GET /simulation-types`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimulationTypesResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `SimulationTypes.ListSimulationTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SimulationTypesResponse` | `simulationTypesResponseSchema` | `src/models/simulation-types-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

