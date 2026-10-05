<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `src/resources/transactions.ts` · 7 operations · Request and error types: namespace `Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paddle-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTransaction

- **Signature**: `createTransaction(request: Transactions.CreateTransactionRequest, options?: RequestOptions): ApiPromise<TransactionsResponse1, Transactions.CreateTransactionError>`
- **Wire**: `POST /transactions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Transactions.CreateTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Transactions.CreateTransactionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `include` | `query` | `TransactionIncludeQuery[]` | no |
| `body` | `body` | `TransactionCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionIncludeQuery` | `transactionIncludeQuerySchema` | `src/models/transaction-include-query.ts` |
| `TransactionCreate` | `transactionCreateSchema` | `src/models/transaction-create.ts` |
| `TransactionsResponse1` | `transactionsResponse1Schema` | `src/models/transactions-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTransaction

- **Signature**: `getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise<TransactionsResponse1, Transactions.GetTransactionError>`
- **Wire**: `GET /transactions/{transaction_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Transactions.GetTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `include` | `query` | — | `TransactionIncludeQuery[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionIncludeQuery` | `transactionIncludeQuerySchema` | `src/models/transaction-include-query.ts` |
| `TransactionsResponse1` | `transactionsResponse1Schema` | `src/models/transactions-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTransactionInvoice

- **Signature**: `getTransactionInvoice(request: Transactions.GetTransactionInvoiceRequest, options?: RequestOptions): ApiPromise<GetInvoicePdfResponse, Transactions.GetTransactionInvoiceError>`
- **Wire**: `GET /transactions/{transaction_id}/invoice`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetInvoicePdfResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Transactions.GetTransactionInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionInvoiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `disposition` | `query` | — | `Disposition` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Disposition` | `dispositionSchema` | `src/models/disposition.ts` |
| `GetInvoicePdfResponse` | `getInvoicePdfResponseSchema` | `src/models/get-invoice-pdf-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listTransactions

- **Signature**: `listTransactions(request: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionsResponse, Transactions.ListTransactionsError>`
- **Wire**: `GET /transactions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Transactions.ListTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ListTransactionsRequest` (15):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `include` | `query` | — | `TransactionIncludeQuery[]` | no | — |
| `id` | `query` | — | `string[]` | no | — |
| `after` | `query` | — | `string` | no | — |
| `billedAt` | `query` | `billed_at` | `string` | no | — |
| `collectionMode` | `query` | `collection_mode` | `CollectionMode` | no | — |
| `createdAt` | `query` | `created_at` | `string` | no | — |
| `customerId` | `query` | `customer_id` | `string[]` | no | — |
| `invoiceNumber` | `query` | `invoice_number` | `string[]` | no | — |
| `origin` | `query` | — | `TransactionOriginQuery[]` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"id[DESC]"` |
| `status` | `query` | — | `TransactionStatusQuery[]` | no | — |
| `subscriptionId` | `query` | `subscription_id` | `string[]` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `30` |
| `updatedAt` | `query` | `updated_at` | `string` | no | — |
| `skipCount` | `header` | `Skip-Count` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionIncludeQuery` | `transactionIncludeQuerySchema` | `src/models/transaction-include-query.ts` |
| `CollectionMode` | `collectionModeSchema` | `src/models/collection-mode.ts` |
| `TransactionOriginQuery` | `transactionOriginQuerySchema` | `src/models/transaction-origin-query.ts` |
| `TransactionStatusQuery` | `transactionStatusQuerySchema` | `src/models/transaction-status-query.ts` |
| `TransactionsResponse` | `transactionsResponseSchema` | `src/models/transactions-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### previewTransactionCreate

- **Signature**: `previewTransactionCreate(request: Transactions.PreviewTransactionCreateRequest, options?: RequestOptions): ApiPromise<TransactionsPreviewResponse, Transactions.PreviewTransactionCreateError>`
- **Wire**: `POST /transactions/preview`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsPreviewResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Transactions.PreviewTransactionCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Transactions.PreviewTransactionCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionPreviewCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionPreviewCreate` | `transactionPreviewCreateSchema` | `src/models/unions/transaction-preview-create.ts` |
| `TransactionsPreviewResponse` | `transactionsPreviewResponseSchema` | `src/models/transactions-preview-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### reviseTransaction

- **Signature**: `reviseTransaction(request: Transactions.ReviseTransactionRequest, options?: RequestOptions): ApiPromise<TransactionsReviseResponse, Transactions.ReviseTransactionError>`
- **Wire**: `POST /transactions/{transaction_id}/revise`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsReviseResponse`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Transactions.ReviseTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ReviseTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `body` | `body` | — | `TransactionRevise` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRevise` | `transactionReviseSchema` | `src/models/transaction-revise.ts` |
| `TransactionsReviseResponse` | `transactionsReviseResponseSchema` | `src/models/transactions-revise-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateTransaction

- **Signature**: `updateTransaction(request: Transactions.UpdateTransactionRequest, options?: RequestOptions): ApiPromise<TransactionsResponse1, Transactions.UpdateTransactionError>`
- **Wire**: `PATCH /transactions/{transaction_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsResponse1`
- **Error**: `PaddleApiError` with `kind: "api"`, an instance of `Transactions.UpdateTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [default — any status no arm above covers] `ErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `Transactions.UpdateTransactionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `include` | `query` | — | `TransactionIncludeQuery[]` | no |
| `body` | `body` | — | `TransactionUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionIncludeQuery` | `transactionIncludeQuerySchema` | `src/models/transaction-include-query.ts` |
| `TransactionUpdate` | `transactionUpdateSchema` | `src/models/transaction-update.ts` |
| `TransactionsResponse1` | `transactionsResponse1Schema` | `src/models/transactions-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

