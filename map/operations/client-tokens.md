<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientTokens — operations

Accessor: `client.clientTokens` · Source: `src/resources/client-tokens.ts` · 4 operations · Request and error types: namespace `ClientTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createClientToken

- **Signature**: `createClientToken(request: ClientTokens.CreateClientTokenRequest, options?: RequestOptions): ApiPromise<ClientTokensResponse1, ClientTokens.CreateClientTokenError>`
- **Wire**: `POST /client-tokens`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientTokensResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `ClientTokens.CreateClientTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `ClientTokens.CreateClientTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ClientSideTokenCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientSideTokenCreate` | `clientSideTokenCreateSchema` | `src/models/client-side-token-create.ts` |
| `ClientTokensResponse1` | `clientTokensResponse1Schema` | `src/models/client-tokens-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getClientToken

- **Signature**: `getClientToken(request: ClientTokens.GetClientTokenRequest, options?: RequestOptions): ApiPromise<ClientTokensResponse1, ClientTokens.GetClientTokenError>`
- **Wire**: `GET /client-tokens/{client_token_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientTokensResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `ClientTokens.GetClientTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `ClientTokens.GetClientTokenRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientTokenId` | `path` | `client_token_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientTokensResponse1` | `clientTokensResponse1Schema` | `src/models/client-tokens-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listClientTokens

- **Signature**: `listClientTokens(request: ClientTokens.ListClientTokensRequest, options?: RequestOptions): ApiPromise<ClientTokensResponse, ClientTokens.ListClientTokensError>`
- **Wire**: `GET /client-tokens`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientTokensResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `ClientTokens.ListClientTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `ClientTokens.ListClientTokensRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `ClientTokensStatusQuery[]` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientTokensStatusQuery` | `clientTokensStatusQuerySchema` | `src/models/client-tokens-status-query.ts` |
| `ClientTokensResponse` | `clientTokensResponseSchema` | `src/models/client-tokens-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateClientToken

- **Signature**: `updateClientToken(request: ClientTokens.UpdateClientTokenRequest, options?: RequestOptions): ApiPromise<ClientTokensResponse1, ClientTokens.UpdateClientTokenError>`
- **Wire**: `PATCH /client-tokens/{client_token_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientTokensResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `ClientTokens.UpdateClientTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `ClientTokens.UpdateClientTokenRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientTokenId` | `path` | `client_token_id` | `string` | yes |
| `body` | `body` | — | `UpdateClientToken` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClientToken` | `updateClientTokenSchema` | `src/models/update-client-token.ts` |
| `ClientTokensResponse1` | `clientTokensResponse1Schema` | `src/models/client-tokens-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

