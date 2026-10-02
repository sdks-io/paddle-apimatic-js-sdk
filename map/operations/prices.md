<!-- Generated file — do not edit; regenerated with the SDK. -->

# Prices — operations

Accessor: `client.prices` · Source: `src/resources/prices.ts` · 4 operations · Request and error types: namespace `Prices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPrice

- **Signature**: `createPrice(request: Prices.CreatePriceRequest, options?: RequestOptions): ApiPromise<PricesResponse1, Prices.CreatePriceError>`
- **Wire**: `POST /prices`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PricesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Prices.CreatePriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Prices.CreatePriceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PriceCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceCreate` | `priceCreateSchema` | `src/models/price-create.ts` |
| `PricesResponse1` | `pricesResponse1Schema` | `src/models/prices-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPrice

- **Signature**: `getPrice(request: Prices.GetPriceRequest, options?: RequestOptions): ApiPromise<PricesResponse2, Prices.GetPriceError>`
- **Wire**: `GET /prices/{price_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PricesResponse2`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Prices.GetPriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Prices.GetPriceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `priceId` | `path` | `price_id` | `string` | yes |
| `include` | `query` | — | `PriceIncludeEnum[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceIncludeEnum` | `priceIncludeEnumSchema` | `src/models/price-include-enum.ts` |
| `PricesResponse2` | `pricesResponse2Schema` | `src/models/prices-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPrices

- **Signature**: `listPrices(request: Prices.ListPricesRequest, options?: RequestOptions): ApiPromise<PricesResponse, Prices.ListPricesError>`
- **Wire**: `GET /prices`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PricesResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Prices.ListPricesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Prices.ListPricesRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `include` | `query` | — | `PriceListIncludeEnum[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `productId` | `query` | `product_id` | `string[]` | no | — |
| `status` | `query` | — | `Status[]` | no | — |
| `recurring` | `query` | — | `boolean` | no | — |
| `billingCycleInterval` | `query` | `billing_cycle.interval` | `DurationInterval` | no | — |
| `billingCycleFrequency` | `query` | `billing_cycle.frequency` | `number` | no | — |
| `type` | `query` | — | `CatalogType` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceListIncludeEnum` | `priceListIncludeEnumSchema` | `src/models/price-list-include-enum.ts` |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `DurationInterval` | `durationIntervalSchema` | `src/models/duration-interval.ts` |
| `CatalogType` | `catalogTypeSchema` | `src/models/catalog-type.ts` |
| `PricesResponse` | `pricesResponseSchema` | `src/models/prices-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updatePrice

- **Signature**: `updatePrice(request: Prices.UpdatePriceRequest, options?: RequestOptions): ApiPromise<PricesResponse1, Prices.UpdatePriceError>`
- **Wire**: `PATCH /prices/{price_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PricesResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Prices.UpdatePriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Prices.UpdatePriceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `priceId` | `path` | `price_id` | `string` | yes |
| `body` | `body` | — | `PriceUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceUpdate` | `priceUpdateSchema` | `src/models/price-update.ts` |
| `PricesResponse1` | `pricesResponse1Schema` | `src/models/prices-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

