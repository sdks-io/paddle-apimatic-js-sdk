<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `src/resources/products.ts` · 4 operations · Request and error types: namespace `Products`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProduct

- **Signature**: `createProduct(request: Products.CreateProductRequest, options?: RequestOptions): ApiPromise<ProductsResponse1, Products.CreateProductError>`
- **Wire**: `POST /products`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProductsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Products.CreateProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Products.CreateProductRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProductCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductCreate` | `productCreateSchema` | `src/models/product-create.ts` |
| `ProductsResponse1` | `productsResponse1Schema` | `src/models/products-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProduct

- **Signature**: `getProduct(request: Products.GetProductRequest, options?: RequestOptions): ApiPromise<ProductsResponse2, Products.GetProductError>`
- **Wire**: `GET /products/{product_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductsResponse2`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Products.GetProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Products.GetProductRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productId` | `path` | `product_id` | `string` | yes |
| `include` | `query` | — | `ProductIncludeEnum[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductIncludeEnum` | `productIncludeEnumSchema` | `src/models/product-include-enum.ts` |
| `ProductsResponse2` | `productsResponse2Schema` | `src/models/products-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listProducts

- **Signature**: `listProducts(request: Products.ListProductsRequest, options?: RequestOptions): ApiPromise<ProductsResponse, Products.ListProductsError>`
- **Wire**: `GET /products`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Products.ListProductsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Products.ListProductsRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `50` |
| `include` | `query` | — | `ProductIncludeEnum[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `Status[]` | no | — |
| `taxCategory` | `query` | `tax_category` | `TaxCategory1[]` | no | — |
| `type` | `query` | — | `CatalogType` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductIncludeEnum` | `productIncludeEnumSchema` | `src/models/product-include-enum.ts` |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `TaxCategory1` | `taxCategory1Schema` | `src/models/tax-category1.ts` |
| `CatalogType` | `catalogTypeSchema` | `src/models/catalog-type.ts` |
| `ProductsResponse` | `productsResponseSchema` | `src/models/products-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateProduct

- **Signature**: `updateProduct(request: Products.UpdateProductRequest, options?: RequestOptions): ApiPromise<ProductsResponse1, Products.UpdateProductError>`
- **Wire**: `PATCH /products/{product_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProductsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Products.UpdateProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Products.UpdateProductRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productId` | `path` | `product_id` | `string` | yes |
| `body` | `body` | — | `ProductUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductUpdate` | `productUpdateSchema` | `src/models/product-update.ts` |
| `ProductsResponse1` | `productsResponse1Schema` | `src/models/products-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

