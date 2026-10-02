<!-- Generated file — do not edit; regenerated with the SDK. -->

# PricingPreview — operations

Accessor: `client.pricingPreview` · Source: `src/resources/pricing-preview.ts` · 1 operation · Request and error types: namespace `PricingPreview`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### previewPrices

- **Signature**: `previewPrices(request: PricingPreview.PreviewPricesRequest, options?: RequestOptions): ApiPromise<PricingPreviewResponse, PricingPreview.PreviewPricesError>`
- **Wire**: `POST /pricing-preview`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PricingPreviewResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `PricingPreview.PreviewPricesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `PricingPreview.PreviewPricesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PricePreviewRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PricePreviewRequest` | `pricePreviewRequestSchema` | `src/models/price-preview-request.ts` |
| `PricingPreviewResponse` | `pricingPreviewResponseSchema` | `src/models/pricing-preview-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

