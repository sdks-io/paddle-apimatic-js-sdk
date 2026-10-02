<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpAddresses — operations

Accessor: `client.ipAddresses` · Source: `src/resources/ip-addresses.ts` · 1 operation · Request and error types: namespace `IpAddresses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getIpAddresses

- **Signature**: `getIpAddresses(options?: RequestOptions): ApiPromise<IpAddressResponse, IpAddresses.GetIpAddressesError>`
- **Wire**: `GET /ips`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpAddressResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `IpAddresses.GetIpAddressesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IpAddressResponse` | `ipAddressResponseSchema` | `src/models/ip-address-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

