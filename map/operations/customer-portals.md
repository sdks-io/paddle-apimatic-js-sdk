<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerPortals — operations

Accessor: `client.customerPortals` · Source: `src/resources/customer-portals.ts` · 1 operation · Request and error types: namespace `CustomerPortals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomerPortalSession

- **Signature**: `createCustomerPortalSession(request: CustomerPortals.CreateCustomerPortalSessionRequest, options?: RequestOptions): ApiPromise<CustomersPortalSessionsResponse, CustomerPortals.CreateCustomerPortalSessionError>`
- **Wire**: `POST /customers/{customer_id}/portal-sessions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersPortalSessionsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `CustomerPortals.CreateCustomerPortalSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `CustomerPortals.CreateCustomerPortalSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `CustomerPortalSessionCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerPortalSessionCreate` | `customerPortalSessionCreateSchema` | `src/models/customer-portal-session-create.ts` |
| `CustomersPortalSessionsResponse` | `customersPortalSessionsResponseSchema` | `src/models/customers-portal-sessions-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

