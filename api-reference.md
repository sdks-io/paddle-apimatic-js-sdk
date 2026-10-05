# Reference

> Source: [PaddleApiClient](src/client.ts)

## CheckoutDomains

> Source: [CheckoutDomains](src/resources/checkout-domains.ts)

<details>
<summary><code>deleteCheckoutDomain(request: CheckoutDomains.DeleteCheckoutDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, CheckoutDomains.DeleteCheckoutDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a checkout domain using its ID.

Deleted checkout domains are no longer able to be used to load checkouts for your account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.checkoutDomains.deleteCheckoutDomain({ domainId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type CheckoutDomains.DeleteCheckoutDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutDomains.deleteCheckoutDomain({
  domainId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainId</code> | <code>string</code> | Paddle ID of the checkout domain entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutDomains.deleteCheckoutDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CheckoutDomains.DeleteCheckoutDomainError](src/resources/checkout-domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutDomains.deleteCheckoutDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CheckoutDomains.DeleteCheckoutDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckoutDomain(request: CheckoutDomains.GetCheckoutDomainRequest, options?: RequestOptions): ApiPromise&lt;CheckoutDomainsResponse1, CheckoutDomains.GetCheckoutDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a checkout domain using its ID. The response includes the domain's approval status and payment method verification details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutDomains.getCheckoutDomain({ domainId: "some example string" });
  // TODO: Handle 'response' of type CheckoutDomainsResponse1
} catch (err) {
  // TODO: Handle 'err' of type CheckoutDomains.GetCheckoutDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutDomains.getCheckoutDomain({
  domainId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutDomainsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainId</code> | <code>string</code> | Paddle ID of the checkout domain entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutDomains.getCheckoutDomain(request)`

- **OnSuccess**: <code>[CheckoutDomainsResponse1](src/models/checkout-domains-response1.ts)</code>
- **OnError**: throws <code>[CheckoutDomains.GetCheckoutDomainError](src/resources/checkout-domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutDomains.getCheckoutDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutDomainsResponse1, CheckoutDomains.GetCheckoutDomainError&gt;</code>, with `result.value` of type <code>[CheckoutDomainsResponse1](src/models/checkout-domains-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCheckoutDomains(request: CheckoutDomains.ListCheckoutDomainsRequest, options?: RequestOptions): ApiPromise&lt;CheckoutDomainsResponse, CheckoutDomains.ListCheckoutDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of checkout domains submitted for your account. Use the query parameters to page through results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutDomains.listCheckoutDomains();
  // TODO: Handle 'response' of type CheckoutDomainsResponse
} catch (err) {
  // TODO: Handle 'err' of type CheckoutDomains.ListCheckoutDomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutDomains.listCheckoutDomains().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutDomainsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>domain?</code> | <code>string</code> | Filter results to include the specified fully qualified domain name (FQDN), its ancestors, and any of its subdomains. For example, if you provide `app.example.com`, the results include `app.example.com`, `example.com` and any subdomains such as `cool.app.example.com`. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`, `created_at`, and `updated_at`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[CheckoutDomainApprovalStatusQuery](src/models/checkout-domain-approval-status-query.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutDomains.listCheckoutDomains(request)`

- **OnSuccess**: <code>[CheckoutDomainsResponse](src/models/checkout-domains-response.ts)</code>
- **OnError**: throws <code>[CheckoutDomains.ListCheckoutDomainsError](src/resources/checkout-domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutDomains.listCheckoutDomains(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutDomainsResponse, CheckoutDomains.ListCheckoutDomainsError&gt;</code>, with `result.value` of type <code>[CheckoutDomainsResponse](src/models/checkout-domains-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyCheckoutDomainPaymentMethod(request: CheckoutDomains.VerifyCheckoutDomainPaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;CheckoutDomainsVerifyPaymentMethodResponse, CheckoutDomains.VerifyCheckoutDomainPaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers payment method verification for a checkout domain. Currently supports Apple Pay only.

Before verifying, the checkout domain must be in `approved` status and the domain association file must be correctly hosted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutDomains.verifyCheckoutDomainPaymentMethod({
    domainId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CheckoutDomainsVerifyPaymentMethodResponse
} catch (err) {
  // TODO: Handle 'err' of type CheckoutDomains.VerifyCheckoutDomainPaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutDomains.verifyCheckoutDomainPaymentMethod({
  domainId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutDomainsVerifyPaymentMethodResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainId</code> | <code>string</code> | Paddle ID of the checkout domain entity to work with. |
| <code>body</code> | <code>[CheckoutDomainVerifyPaymentMethod](src/models/checkout-domain-verify-payment-method.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutDomains.verifyCheckoutDomainPaymentMethod(request)`

- **OnSuccess**: <code>[CheckoutDomainsVerifyPaymentMethodResponse](src/models/checkout-domains-verify-payment-method-response.ts)</code>
- **OnError**: throws <code>[CheckoutDomains.VerifyCheckoutDomainPaymentMethodError](src/resources/checkout-domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutDomains.verifyCheckoutDomainPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutDomainsVerifyPaymentMethodResponse, CheckoutDomains.VerifyCheckoutDomainPaymentMethodError&gt;</code>, with `result.value` of type <code>[CheckoutDomainsVerifyPaymentMethodResponse](src/models/checkout-domains-verify-payment-method-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionHistoryApi

> Source: [SubscriptionHistoryApi](src/resources/subscription-history-api.ts)

<details>
<summary><code>listSubscriptionHistory(request: SubscriptionHistoryApi.ListSubscriptionHistoryRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsHistoryResponse, SubscriptionHistoryApi.ListSubscriptionHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of history entries for a subscription. Use the query parameters to filter and page through results.

Subscription history records the changes made to a subscription over its lifetime, so you can see what changed, when it happened, where it originated, and who made the change. Each change is a separate history entry, and some entries also include a reason.

Paddle began recording subscription history on June 29, 2026. For subscriptions that existed before then, Paddle automatically creates `subscription_created` and `subscription_canceled` entries and attempts to infer details from the subscription's initial state.

History entries are ordered by newest first by default (`occurred_at` in descending order).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionHistoryApi.listSubscriptionHistory({
    subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
  });
  // TODO: Handle 'response' of type SubscriptionsHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionHistoryApi.ListSubscriptionHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionHistoryApi.listSubscriptionHistory({
  subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsHistoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>action?</code> | <code>[SubscriptionHistoryActionQuery](src/models/subscription-history-action-query.ts)[]</code> | Return history entries that match the specified action. Use a comma-separated list to specify multiple action values. |
| <code>source?</code> | <code>[SubscriptionHistorySourceQuery](src/models/subscription-history-source-query.ts)[]</code> | Return history entries that match the specified source. Use a comma-separated list to specify multiple source values. |
| <code>actorType?</code> | <code>[SubscriptionHistoryActorTypeQuery](src/models/subscription-history-actor-type-query.ts)[]</code> | Return history entries that match the specified actor type. Use a comma-separated list to specify multiple actor type values. |
| <code>actorId?</code> | <code>string[]</code> | Return history entries that match the specified actor ID. Use a comma-separated list to specify multiple actor ID values. Only applicable if `actor_type` is also selected. |
| <code>reason?</code> | <code>[SubscriptionHistoryReasonQuery](src/models/subscription-history-reason-query.ts)[]</code> | Return history entries that match the specified reason. Use a comma-separated list to specify multiple reason values. |
| <code>occurredAt?</code> | <code>string</code> | Return entities that occurred at a specific time. Use `[LTE]` (less than or equal to) or `[GTE]` (greater than or equal to) operators with an RFC 3339 datetime string. For example, `occurred_at[LTE]=2023-04-18T17:03:26` or `occurred_at[GTE]=2023-04-18T17:03:26`. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=occurred_at[DESC]`.<br><br>Valid fields for ordering: `occurred_at`.<br>**Default**: "occurred_at[DESC]" |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionHistoryApi.listSubscriptionHistory(request)`

- **OnSuccess**: <code>[SubscriptionsHistoryResponse](src/models/subscriptions-history-response.ts)</code>
- **OnError**: throws <code>[SubscriptionHistoryApi.ListSubscriptionHistoryError](src/resources/subscription-history-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionHistoryApi.listSubscriptionHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsHistoryResponse, SubscriptionHistoryApi.ListSubscriptionHistoryError&gt;</code>, with `result.value` of type <code>[SubscriptionsHistoryResponse](src/models/subscriptions-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/resources/transactions.ts)

<details>
<summary><code>createTransaction(request: Transactions.CreateTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionsResponse1, Transactions.CreateTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new transaction.

Transactions are typically created with the status of `draft` or `ready` initially:

* Draft transactions have `items` against them, but don't have all of the required fields for billing. Paddle creates draft transactions automatically when a checkout is opened.
* Paddle automatically marks transactions as `ready` when all of the required fields are present for billing. This includes `customer_id` and `address_id` for automatically-collected transactions, and `billing_details` for manually-collected transactions.

The `collection_mode` against a transaction determines how Paddle tries to collect for payment:

* Manually-collected transactions are for sales-assisted billing. Paddle sends an invoice to your customer when a transaction is `billed`. Payment is often by wire transfer.
* Automatically-collected transactions are for self-serve checkouts. You may pass the transaction to a checkout or use the returned `checkout.url` to collect for payment.

When a manually-collected transaction is marked as `billed` or an automatically-collected transaction is `completed`, Paddle automatically creates a related subscription for the items on the transaction.

If successful, your response includes a copy of the new transaction entity.

Use the `include` parameter to include related entities in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.createTransaction({
    body: {
      customerId: "ctm_01hv6y1jedq4p1n0yqn5ba3ky4",
      addressId: "add_01hv8gq3318ktkfengj2r75gfx",
      currencyCode: CurrencyCode.Usd,
      collectionMode: CollectionMode.Manual,
      billingDetails: {
        enableCheckout: false,
        purchaseOrderNumber: "PO-123",
        paymentTerms: { interval: DurationInterval.Day, frequency: 14 },
      },
      billingPeriod: {
        startsAt: new Date(Date.UTC(2024, 3, 12, 0, 0, 0)),
        endsAt: new Date(Date.UTC(2025, 3, 11, 23, 59, 0)),
      },
      items: [
        { quantity: 20, priceId: "pri_01gsz91wy9k1yn7kx82aafwvea" },
        { quantity: 1, priceId: "pri_01gsz96z29d88jrmsf2ztbfgjg" },
        { quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" },
      ],
    },
  });
  // TODO: Handle 'response' of type TransactionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Transactions.CreateTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.createTransaction({
  body: {
    customerId: "ctm_01hv6y1jedq4p1n0yqn5ba3ky4",
    addressId: "add_01hv8gq3318ktkfengj2r75gfx",
    currencyCode: CurrencyCode.Usd,
    collectionMode: CollectionMode.Manual,
    billingDetails: {
      enableCheckout: false,
      purchaseOrderNumber: "PO-123",
      paymentTerms: { interval: DurationInterval.Day, frequency: 14 },
    },
    billingPeriod: {
      startsAt: new Date(Date.UTC(2024, 3, 12, 0, 0, 0)),
      endsAt: new Date(Date.UTC(2025, 3, 11, 23, 59, 0)),
    },
    items: [
      { quantity: 20, priceId: "pri_01gsz91wy9k1yn7kx82aafwvea" },
      { quantity: 1, priceId: "pri_01gsz96z29d88jrmsf2ztbfgjg" },
      { quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include?</code> | <code>[TransactionIncludeQuery](src/models/transaction-include-query.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |
| <code>body</code> | <code>[TransactionCreate](src/models/transaction-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.createTransaction(request)`

- **OnSuccess**: <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: throws <code>[Transactions.CreateTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.createTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsResponse1, Transactions.CreateTransactionError&gt;</code>, with `result.value` of type <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionsResponse1, Transactions.GetTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a transaction using its ID.

Use the `include` parameter to include related entities in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransaction({ transactionId: "some example string" });
  // TODO: Handle 'response' of type TransactionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Transactions.GetTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.getTransaction({
  transactionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | Paddle ID of the transaction entity to work with. |
| <code>include?</code> | <code>[TransactionIncludeQuery](src/models/transaction-include-query.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.getTransaction(request)`

- **OnSuccess**: <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: throws <code>[Transactions.GetTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.getTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsResponse1, Transactions.GetTransactionError&gt;</code>, with `result.value` of type <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransactionInvoice(request: Transactions.GetTransactionInvoiceRequest, options?: RequestOptions): ApiPromise&lt;GetInvoicePdfResponse, Transactions.GetTransactionInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a link to an invoice PDF for a transaction.

Invoice PDFs are available for both automatically and manually-collected transactions:

* The PDF for manually-collected transactions includes payment terms, purchase order number, and notes for your customer. It's a demand for payment from your customer. It's available for transactions that are `billed` or `completed`.
* The PDF for automatically-collected transactions lets your customer know that payment was taken successfully. Customers may require this for for tax-reporting purposes. It's available for transactions that are `completed`.

Invoice PDFs aren't available for zero-value transactions.

The link returned is not a permanent link. It expires after an hour.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransactionInvoice({ transactionId: "some example string" });
  // TODO: Handle 'response' of type GetInvoicePdfResponse
} catch (err) {
  // TODO: Handle 'err' of type Transactions.GetTransactionInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.getTransactionInvoice({
  transactionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInvoicePdfResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | Paddle ID of the transaction entity to work with. |
| <code>disposition?</code> | <code>[Disposition](src/models/disposition.ts)</code> | Determine whether the generated URL should download the PDF as an attachment saved locally, or open it inline in the browser.<br><br>Default: `attachment`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.getTransactionInvoice(request)`

- **OnSuccess**: <code>[GetInvoicePdfResponse](src/models/get-invoice-pdf-response.ts)</code>
- **OnError**: throws <code>[Transactions.GetTransactionInvoiceError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.getTransactionInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInvoicePdfResponse, Transactions.GetTransactionInvoiceError&gt;</code>, with `result.value` of type <code>[GetInvoicePdfResponse](src/models/get-invoice-pdf-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactions(request: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionsResponse, Transactions.ListTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of transactions. Use the query parameters to page through results.

Use the `include` parameter to include related entities in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.listTransactions();
  // TODO: Handle 'response' of type TransactionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ListTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.listTransactions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include?</code> | <code>[TransactionIncludeQuery](src/models/transaction-include-query.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>billedAt?</code> | <code>string</code> | Return entities billed at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `billed_at=2023-04-18T17:03:26` or `billed_at[LT]=2023-04-18T17:03:26`. |
| <code>collectionMode?</code> | <code>[CollectionMode](src/models/collection-mode.ts)</code> | Return entities that match the specified collection mode. |
| <code>createdAt?</code> | <code>string</code> | Return entities created at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `created_at=2023-04-18T17:03:26` or `created_at[LT]=2023-04-18T17:03:26`. |
| <code>customerId?</code> | <code>string[]</code> | Return entities related to the specified customer. Use a comma-separated list to specify multiple customer IDs. |
| <code>invoiceNumber?</code> | <code>string[]</code> | Return entities that match the invoice number. Use a comma-separated list to specify multiple invoice numbers. |
| <code>origin?</code> | <code>[TransactionOriginQuery](src/models/transaction-origin-query.ts)[]</code> | Return entities related to the specified origin. Use a comma-separated list to specify multiple origins. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `billed_at`, `created_at`, `id`, and `updated_at`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[TransactionStatusQuery](src/models/transaction-status-query.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>subscriptionId?</code> | <code>string[]</code> | Return entities related to the specified subscription. Use a comma-separated list to specify multiple subscription IDs. Pass `null` to return entities that aren't related to any subscription. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `30`; Maximum: `30`.<br>**Default**: 30 |
| <code>updatedAt?</code> | <code>string</code> | Return entities updated at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `updated_at=2023-04-18T17:03:26` or `updated_at[LT]=2023-04-18T17:03:26`. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.listTransactions(request)`

- **OnSuccess**: <code>[TransactionsResponse](src/models/transactions-response.ts)</code>
- **OnError**: throws <code>[Transactions.ListTransactionsError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.listTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsResponse, Transactions.ListTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionsResponse](src/models/transactions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewTransactionCreate(request: Transactions.PreviewTransactionCreateRequest, options?: RequestOptions): ApiPromise&lt;TransactionsPreviewResponse, Transactions.PreviewTransactionCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews a transaction without creating a transaction entity. Typically used for creating more advanced, dynamic pricing pages where users can build their own plans.

Consider using [the preview prices operation](https://developer.paddle.com/api-reference/pricing-preview/preview-prices) for simpler pricing pages.

You can provide location information when previewing a transaction. You must provide this if you want Paddle to calculate tax or [automatically localize prices](https://developer.paddle.com/build/products/offer-localized-pricing). You can provide one of:

* `customer_ip_address`: Paddle fetches location using the IP address to calculate totals.
* `address`: Paddle uses the country and ZIP code (where supplied) to calculate totals.
* `customer_id`, `address_id`, `business_id`: Paddle uses existing customer data to calculate totals. Typically used for logged-in customers.

When supplying items, you can exclude items from the total calculation using the `include_in_totals` boolean.

By default, recurring items with trials are considered to have a zero charge when previewing. Set `ignore_trials` to `true` to ignore trial periods against prices for transaction preview calculations.

If successful, your response includes the data you sent with a `details` object that includes totals for the supplied prices.

Transaction previews don't create transactions, so no `id` is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.previewTransactionCreate({
    body: {
      currencyCode: CurrencyCode.Usd,
      discountId: "dsc_01gtgztp8fpchantd5g1wrksa3",
      items: [
        { quantity: 20, priceId: "pri_01gsz8x8sawmvhz1pv30nge1ke" },
        { quantity: 1, priceId: "pri_01h1vjfevh5etwq3rb416a23h2" },
        { quantity: 1, includeInTotals: false, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" },
      ],
      address: { countryCode: CountryCodeSupported.Us },
    },
  });
  // TODO: Handle 'response' of type TransactionsPreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Transactions.PreviewTransactionCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.previewTransactionCreate({
  body: {
    currencyCode: CurrencyCode.Usd,
    discountId: "dsc_01gtgztp8fpchantd5g1wrksa3",
    items: [
      { quantity: 20, priceId: "pri_01gsz8x8sawmvhz1pv30nge1ke" },
      { quantity: 1, priceId: "pri_01h1vjfevh5etwq3rb416a23h2" },
      { quantity: 1, includeInTotals: false, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" },
    ],
    address: { countryCode: CountryCodeSupported.Us },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsPreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionPreviewCreate](src/models/unions/transaction-preview-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.previewTransactionCreate(request)`

- **OnSuccess**: <code>[TransactionsPreviewResponse](src/models/transactions-preview-response.ts)</code>
- **OnError**: throws <code>[Transactions.PreviewTransactionCreateError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.previewTransactionCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsPreviewResponse, Transactions.PreviewTransactionCreateError&gt;</code>, with `result.value` of type <code>[TransactionsPreviewResponse](src/models/transactions-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reviseTransaction(request: Transactions.ReviseTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionsReviseResponse, Transactions.ReviseTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revises customer information for a billed or completed transaction.

Revise a transaction to rectify incorrect customer, address, or business information on invoice documents generated by Paddle.

You can revise transaction details that don't impact the tax rates on a transaction. This includes:

* Customer name
* Business name and tax or VAT number (`tax_identifier`)
* Address details, apart from the country

You can't remove a valid tax or VAT number, only replace it with another valid one. If a valid tax or VAT number is added, Paddle automatically creates an adjustment to refund any tax where applicable.

Transactions can only be revised once.

If successful, your response includes a copy of the transaction entity. [Get a transaction](https://developer.paddle.com/api-reference/transactions/get-transaction) using the `include` parameter with the `customer`, `address`, and `business` values to see the revised customer information.

Only the customer information for this transaction is updated. The related customer, address, and business entities aren't updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.reviseTransaction({
    transactionId: "some example string",
    body: {
      customer: { name: "Sam Miller" },
      business: { taxIdentifier: "AB0123456789" },
      address: { firstLine: "3811 Ditmars Blvd" },
    },
  });
  // TODO: Handle 'response' of type TransactionsReviseResponse
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ReviseTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.reviseTransaction({
  transactionId: "some example string",
  body: {
    customer: { name: "Sam Miller" },
    business: { taxIdentifier: "AB0123456789" },
    address: { firstLine: "3811 Ditmars Blvd" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsReviseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | Paddle ID of the transaction entity to work with. |
| <code>body</code> | <code>[TransactionRevise](src/models/transaction-revise.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.reviseTransaction(request)`

- **OnSuccess**: <code>[TransactionsReviseResponse](src/models/transactions-revise-response.ts)</code>
- **OnError**: throws <code>[Transactions.ReviseTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.reviseTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsReviseResponse, Transactions.ReviseTransactionError&gt;</code>, with `result.value` of type <code>[TransactionsReviseResponse](src/models/transactions-revise-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTransaction(request: Transactions.UpdateTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionsResponse1, Transactions.UpdateTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a transaction using its ID.

You can update transactions that are `draft` or `ready`. `billed` and `completed` transactions are considered records for tax and legal purposes, so they can't be changed. You can either:

* Create [an adjustment](https://developer.paddle.com/api-reference/adjustments/overview) to record a refund or credit for a transaction.
* Cancel a `billed` transaction by sending a PATCH request to set `status` to `canceled`.

The transaction `status` may only be set to `billed` or `canceled`. Other statuses are set automatically by Paddle. Set a manually-collected transaction to `billed` to mark it as finalized. This is essentially issuing an invoice. At this point, it becomes a legal record so you can't make changes to it. Paddle automatically assigns an invoice number, creates [a related subscription](https://developer.paddle.com/api-reference/subscriptions/overview), and sends it to your customer.

When making changes to items on a transaction, send the complete list of items that you'd like to be on a transaction — including existing items. For each item, send an object containing `price_id` and `quantity`. Paddle responds with the full `price` object for each item. See: [Work with lists](https://developer.paddle.com/api-reference/about/lists)

If successful, your response includes a copy of the updated transaction entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.updateTransaction({
    transactionId: "some example string",
    body: {
      discountId: "dsc_01gtgztp8fpchantd5g1wrksa3",
      items: [
        { quantity: 50, priceId: "pri_01gsz91wy9k1yn7kx82aafwvea" },
        { quantity: 1, priceId: "pri_01gsz96z29d88jrmsf2ztbfgjg" },
        { quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" },
      ],
    },
  });
  // TODO: Handle 'response' of type TransactionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Transactions.UpdateTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.updateTransaction({
  transactionId: "some example string",
  body: {
    discountId: "dsc_01gtgztp8fpchantd5g1wrksa3",
    items: [
      { quantity: 50, priceId: "pri_01gsz91wy9k1yn7kx82aafwvea" },
      { quantity: 1, priceId: "pri_01gsz96z29d88jrmsf2ztbfgjg" },
      { quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | Paddle ID of the transaction entity to work with. |
| <code>include?</code> | <code>[TransactionIncludeQuery](src/models/transaction-include-query.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |
| <code>body</code> | <code>[TransactionUpdate](src/models/transaction-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.updateTransaction(request)`

- **OnSuccess**: <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: throws <code>[Transactions.UpdateTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.updateTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsResponse1, Transactions.UpdateTransactionError&gt;</code>, with `result.value` of type <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/resources/subscriptions.ts)

<details>
<summary><code>activateSubscription(request: Subscriptions.ActivateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsActivateResponse, Subscriptions.ActivateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates a trialing subscription using its ID. Only automatically-collected subscriptions where the status is `trialing` can be activated.

On activation, Paddle bills for a subscription immediately. Subscription billing dates are recalculated based on the activation date (the time the activation request is made).

If successful, Paddle returns a copy of the updated subscription entity. The subscription status is `active`, and billing dates are updated to reflect the activation date.

This operation results in an immediate charge, so responses may take longer than usual while a payment attempt is processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.activateSubscription({ subscriptionId: "some example string" });
  // TODO: Handle 'response' of type SubscriptionsActivateResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.ActivateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.activateSubscription({
  subscriptionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsActivateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.activateSubscription(request)`

- **OnSuccess**: <code>[SubscriptionsActivateResponse](src/models/subscriptions-activate-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.ActivateSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.activateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsActivateResponse, Subscriptions.ActivateSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionsActivateResponse](src/models/subscriptions-activate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelSubscription(request: Subscriptions.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsCancelResponse, Subscriptions.CancelSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a subscription using its ID.

By default, active subscriptions are canceled at the end of the billing period. When you send a request to cancel, Paddle creates a `scheduled_change` against the subscription entity to say that it should cancel at the end of the current billing period. Its `status` remains `active` until after the effective date of the scheduled change, at which point it changes to `canceled`.

You can cancel a subscription right away by including `effective_from` in your request, setting the value to `immediately`. If successful, your response includes a copy of the updated subscription entity with the `status` of `canceled`. Canceling immediately is the default behavior for paused subscriptions.

You can't reinstate a canceled subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.cancelSubscription({
    subscriptionId: "some example string",
    body: { effectiveFrom: EffectiveFrom.Immediately },
  });
  // TODO: Handle 'response' of type SubscriptionsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.CancelSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.cancelSubscription({
  subscriptionId: "some example string",
  body: { effectiveFrom: EffectiveFrom.Immediately },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>body</code> | <code>[SubscriptionCancel](src/models/subscription-cancel.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.cancelSubscription(request)`

- **OnSuccess**: <code>[SubscriptionsCancelResponse](src/models/subscriptions-cancel-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.CancelSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.cancelSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsCancelResponse, Subscriptions.CancelSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionsCancelResponse](src/models/subscriptions-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscriptionCharge(request: Subscriptions.CreateSubscriptionChargeRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsChargeResponse, Subscriptions.CreateSubscriptionChargeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new one-time charge for a subscription. Use to bill non-recurring items to a subscription. Non-recurring items are price entities where the `billing_cycle` is `null`.

If successful, Paddle responds with the updated subscription entity. However, one-time charges aren't held against the subscription entity, so the charges billed aren't returned in the response.

Once created, to get details of a one-time charge:

* When created with `effective_from` as `next_billing_period`, get the subscription the charge was billed to and use the `include` query parameter with the `next_transaction` value.
* When created with `effective_from` as `immediately`, list transactions and use the `subscription_id` query parameter with the subscription ID of the subscription the charge was billed to.

When an update results in an immediate charge, responses may take longer than usual while a payment attempt is processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.createSubscriptionCharge({
    subscriptionId: "some example string",
    body: {
      effectiveFrom: EffectiveFrom.Immediately,
      items: [{ quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" }],
    },
  });
  // TODO: Handle 'response' of type SubscriptionsChargeResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.CreateSubscriptionChargeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.createSubscriptionCharge({
  subscriptionId: "some example string",
  body: {
    effectiveFrom: EffectiveFrom.Immediately,
    items: [{ quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsChargeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>body</code> | <code>[SubscriptionCharge](src/models/subscription-charge.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.createSubscriptionCharge(request)`

- **OnSuccess**: <code>[SubscriptionsChargeResponse](src/models/subscriptions-charge-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.CreateSubscriptionChargeError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.createSubscriptionCharge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsChargeResponse, Subscriptions.CreateSubscriptionChargeError&gt;</code>, with `result.value` of type <code>[SubscriptionsChargeResponse](src/models/subscriptions-charge-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscription(request: Subscriptions.GetSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsResponse1, Subscriptions.GetSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a subscription using its ID.

Use the `include` parameter to include transaction information in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.getSubscription({ subscriptionId: "some example string" });
  // TODO: Handle 'response' of type SubscriptionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.GetSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.getSubscription({
  subscriptionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>include?</code> | <code>[SubscriptionIncludeEnum](src/models/subscription-include-enum.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.getSubscription(request)`

- **OnSuccess**: <code>[SubscriptionsResponse1](src/models/subscriptions-response1.ts)</code>
- **OnError**: throws <code>[Subscriptions.GetSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.getSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsResponse1, Subscriptions.GetSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionsResponse1](src/models/subscriptions-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscriptionUpdatePaymentMethodTransaction(request: Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsUpdatePaymentMethodTransactionResponse, Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a transaction that you can pass to a checkout to let customers update their payment details. Only for subscriptions where `collection_mode` is `automatic`.

The transaction returned depends on the status of the related subscription:

* Where a subscription is `past_due`, it returns the most recent `past_due` transaction.
* Where a subscription is `active`, it creates a new zero amount transaction for the items on a subscription.

You can use the returned `checkout.url`, or pass the returned transaction ID to Paddle.js to open a checkout to present customers with a way of updating their payment details.

The `customer`, `address`, `business`, `discount`, `adjustments` and `adjustments_totals` properties are only returned in the response if the API key has read permissions for those related entities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.getSubscriptionUpdatePaymentMethodTransaction({
    subscriptionId: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionsUpdatePaymentMethodTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.getSubscriptionUpdatePaymentMethodTransaction({
  subscriptionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsUpdatePaymentMethodTransactionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.getSubscriptionUpdatePaymentMethodTransaction(request)`

- **OnSuccess**: <code>[SubscriptionsUpdatePaymentMethodTransactionResponse](src/models/subscriptions-update-payment-method-transaction-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.getSubscriptionUpdatePaymentMethodTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsUpdatePaymentMethodTransactionResponse, Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError&gt;</code>, with `result.value` of type <code>[SubscriptionsUpdatePaymentMethodTransactionResponse](src/models/subscriptions-update-payment-method-transaction-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptions(request: Subscriptions.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsResponse, Subscriptions.ListSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of subscriptions. Use the query parameters to page through results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.listSubscriptions();
  // TODO: Handle 'response' of type SubscriptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.ListSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.listSubscriptions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>addressId?</code> | <code>string[]</code> | Return entities related to the specified address. Use a comma-separated list to specify multiple address IDs. |
| <code>collectionMode?</code> | <code>[CollectionModeQuery](src/models/collection-mode-query.ts)</code> | Return entities that match the specified collection mode. |
| <code>customerId?</code> | <code>string[]</code> | Return entities related to the specified customer. Use a comma-separated list to specify multiple customer IDs. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>priceId?</code> | <code>string[]</code> | Return entities related to the specified price. Use a comma-separated list to specify multiple price IDs. |
| <code>scheduledChangeAction?</code> | <code>[ScheduledChangeActionQuery](src/models/scheduled-change-action-query.ts)[]</code> | Return subscriptions that have a scheduled change. Use a comma-separated list to specify multiple scheduled change actions. |
| <code>nextBilledAt?</code> | <code>string[]</code> | Return entities next billed at a specific time. Pass `null` to return entities with no next billing date. |
| <code>status?</code> | <code>[SubscriptionStatusQuery](src/models/subscription-status-query.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.listSubscriptions(request)`

- **OnSuccess**: <code>[SubscriptionsResponse](src/models/subscriptions-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.ListSubscriptionsError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.listSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsResponse, Subscriptions.ListSubscriptionsError&gt;</code>, with `result.value` of type <code>[SubscriptionsResponse](src/models/subscriptions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pauseSubscription(request: Subscriptions.PauseSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsPauseResponse, Subscriptions.PauseSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pauses a subscription using its ID.

By default, subscriptions are paused at the end of the billing period. When you send a request to pause, Paddle creates a `scheduled_change` against the subscription entity to say that it should pause at the end of the current billing period. Its `status` remains `active` until after the effective date of the scheduled change, at which point it changes to `paused`.

You can pause a subscription right away by including `effective_from` in your request, setting the value to `immediately`. If successful, your response includes a copy of the updated subscription entity with the `status` of `paused`.

To set a resume date, include the `resume_at` field in your request. The subscription remains paused until the resume date, or until you send a resume request. Omit to create an open-ended pause. The subscription remains paused indefinitely, until you send a resume request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.pauseSubscription({
    subscriptionId: "some example string",
    body: {
      effectiveFrom: EffectiveFrom.NextBillingPeriod,
      resumeAt: new Date(Date.UTC(2024, 8, 1, 16, 30, 0)),
    },
  });
  // TODO: Handle 'response' of type SubscriptionsPauseResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.PauseSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.pauseSubscription({
  subscriptionId: "some example string",
  body: {
    effectiveFrom: EffectiveFrom.NextBillingPeriod,
    resumeAt: new Date(Date.UTC(2024, 8, 1, 16, 30, 0)),
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsPauseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>body</code> | <code>[SubscriptionPause](src/models/subscription-pause.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.pauseSubscription(request)`

- **OnSuccess**: <code>[SubscriptionsPauseResponse](src/models/subscriptions-pause-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.PauseSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.pauseSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsPauseResponse, Subscriptions.PauseSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionsPauseResponse](src/models/subscriptions-pause-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewSubscriptionCharge(request: Subscriptions.PreviewSubscriptionChargeRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsChargePreviewResponse, Subscriptions.PreviewSubscriptionChargeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews creating a one-time charge for a subscription without billing that charge. Typically used for previewing calculations before making changes to a subscription.

One-time charges are non-recurring items. These are price entities where the `billing_cycle` is `null`.

If successful, your response includes `immediate_transaction`, `next_transaction`, and `recurring_transaction_details` so you can see expected transactions for the changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.previewSubscriptionCharge({
    subscriptionId: "some example string",
    body: {
      effectiveFrom: EffectiveFrom.Immediately,
      items: [{ quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" }],
    },
  });
  // TODO: Handle 'response' of type SubscriptionsChargePreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.PreviewSubscriptionChargeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.previewSubscriptionCharge({
  subscriptionId: "some example string",
  body: {
    effectiveFrom: EffectiveFrom.Immediately,
    items: [{ quantity: 1, priceId: "pri_01gsz98e27ak2tyhexptwc58yk" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsChargePreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>body</code> | <code>[SubscriptionCharge](src/models/subscription-charge.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.previewSubscriptionCharge(request)`

- **OnSuccess**: <code>[SubscriptionsChargePreviewResponse](src/models/subscriptions-charge-preview-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.PreviewSubscriptionChargeError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.previewSubscriptionCharge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsChargePreviewResponse, Subscriptions.PreviewSubscriptionChargeError&gt;</code>, with `result.value` of type <code>[SubscriptionsChargePreviewResponse](src/models/subscriptions-charge-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewSubscriptionUpdate(request: Subscriptions.PreviewSubscriptionUpdateRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsPreviewResponse, Subscriptions.PreviewSubscriptionUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews an update for a subscription without applying those changes. Typically used for previewing proration before making changes to a subscription.

If successful, your response includes `immediate_transaction`, `next_transaction`, and `recurring_transaction_details` so you can see expected transactions for the changes.

The `update_summary` object contains details of prorated credits and charges created, along with the overall result of the update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.previewSubscriptionUpdate({
    subscriptionId: "some example string",
    body: {
      items: [
        { priceId: "pri_01gsz8x8sawmvhz1pv30nge1ke", quantity: 20 },
        { priceId: "pri_01h1vjfevh5etwq3rb416a23h2", quantity: 1 },
        { priceId: "pri_01gsz95g2zrkagg294kpstx54r", quantity: 1 },
      ],
      prorationBillingMode: ProrationBillingMode.ProratedImmediately,
    },
  });
  // TODO: Handle 'response' of type SubscriptionsPreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.PreviewSubscriptionUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.previewSubscriptionUpdate({
  subscriptionId: "some example string",
  body: {
    items: [
      { priceId: "pri_01gsz8x8sawmvhz1pv30nge1ke", quantity: 20 },
      { priceId: "pri_01h1vjfevh5etwq3rb416a23h2", quantity: 1 },
      { priceId: "pri_01gsz95g2zrkagg294kpstx54r", quantity: 1 },
    ],
    prorationBillingMode: ProrationBillingMode.ProratedImmediately,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsPreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>body</code> | <code>[SubscriptionUpdate](src/models/subscription-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.previewSubscriptionUpdate(request)`

- **OnSuccess**: <code>[SubscriptionsPreviewResponse](src/models/subscriptions-preview-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.PreviewSubscriptionUpdateError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.previewSubscriptionUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsPreviewResponse, Subscriptions.PreviewSubscriptionUpdateError&gt;</code>, with `result.value` of type <code>[SubscriptionsPreviewResponse](src/models/subscriptions-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumeSubscription(request: Subscriptions.ResumeSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsResumeResponse, Subscriptions.ResumeSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resumes a paused subscription using its ID. Only `paused` subscriptions can be resumed. If an `active` subscription has a scheduled change to pause in the future, use this operation to set or change the resume date.

You can't resume a `canceled` subscription.

On resume, Paddle bills for a subscription immediately by default. Subscription billing dates are recalculated based on the resume date. Use the `on_resume` field to change this behavior.

If successful, Paddle returns a copy of the updated subscription entity:

* When resuming a `paused` subscription immediately, the subscription status is `active`, and billing dates are updated to reflect the resume date.
* When scheduling a `paused` subscription to resume on a date in the future, the subscription status is `paused`, and `scheduled_change.action` is `resume` with `scheduled_change.effective_at` set to the scheduled resume date.
* When changing the resume date for an `active` subscription that's scheduled to pause, the subscription status remains `active`, and `scheduled_change.resume_at` is updated on the existing `pause` scheduled change.

This operation may result in an immediate charge, so responses may take longer than usual while a payment attempt is processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.resumeSubscription({
    subscriptionId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SubscriptionsResumeResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.ResumeSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.resumeSubscription({
  subscriptionId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsResumeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>body</code> | <code>[SubscriptionResume](src/models/unions/subscription-resume.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.resumeSubscription(request)`

- **OnSuccess**: <code>[SubscriptionsResumeResponse](src/models/subscriptions-resume-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.ResumeSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.resumeSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsResumeResponse, Subscriptions.ResumeSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionsResumeResponse](src/models/subscriptions-resume-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: Subscriptions.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsResponse2, Subscriptions.UpdateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a subscription using its ID.

When making changes to items or the next billing date for a subscription, you must include the `proration_billing_mode` field to tell Paddle how to bill for those changes.

Send the complete list of items that you'd like to be on a subscription — including existing items. If you omit items, they're removed from the subscription.

For each item, send `price_id` and `quantity`. Paddle responds with the full price object for each price. If you're updating an existing item, you can omit the `quantity` if you don't want to update it.

If successful, your response includes a copy of the updated subscription entity. When an update results in an immediate charge, responses may take longer than usual while a payment attempt is processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.updateSubscription({
    subscriptionId: "some example string",
    body: {
      items: [
        { priceId: "pri_01gsz8x8sawmvhz1pv30nge1ke", quantity: 20 },
        { priceId: "pri_01h1vjfevh5etwq3rb416a23h2", quantity: 1 },
        { priceId: "pri_01gsz95g2zrkagg294kpstx54r", quantity: 1 },
      ],
      prorationBillingMode: ProrationBillingMode.ProratedImmediately,
    },
  });
  // TODO: Handle 'response' of type SubscriptionsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.UpdateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.updateSubscription({
  subscriptionId: "some example string",
  body: {
    items: [
      { priceId: "pri_01gsz8x8sawmvhz1pv30nge1ke", quantity: 20 },
      { priceId: "pri_01h1vjfevh5etwq3rb416a23h2", quantity: 1 },
      { priceId: "pri_01gsz95g2zrkagg294kpstx54r", quantity: 1 },
    ],
    prorationBillingMode: ProrationBillingMode.ProratedImmediately,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Paddle ID of the subscription entity to work with. |
| <code>body</code> | <code>[SubscriptionUpdate](src/models/subscription-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.updateSubscription(request)`

- **OnSuccess**: <code>[SubscriptionsResponse2](src/models/subscriptions-response2.ts)</code>
- **OnError**: throws <code>[Subscriptions.UpdateSubscriptionError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.updateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsResponse2, Subscriptions.UpdateSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionsResponse2](src/models/subscriptions-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Simulations

> Source: [Simulations](src/resources/simulations.ts)

<details>
<summary><code>createSimulation(request: Simulations.CreateSimulationRequest, options?: RequestOptions): ApiPromise&lt;SimulationsResponse1, Simulations.CreateSimulationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new simulation for a notification setting (notification destination).

simulated webhook payloads with real data. The API key making the request needs read permissions:

* For the entities you provided, or the request fails.
* For related entities which aren't nested in the entities you provided, or static examples will be used instead.

For example, when creating a subscription renewal scenario simulation with an API key that has a `subscription.read` permission but not a `transaction.read` permission,
the request succeeds and the subscription data will be used in simulated payloads, but the related transaction data won't be used in payloads and falls back to a static example.

If you don't provide a `config.entities` object, simulated webhook payloads are populated with static examples.

If successful, your response includes a copy of the new simulation entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulations.createSimulation({
    body: {
      notificationSettingId: "ntfset_01j82d983j814ypzx7m1fw2jpz",
      name: "Create a failed subscription renewal simulation with subscription ID",
      type: SimulationScenarioType.SubscriptionRenewal,
      config: { subscriptionRenewal: "some example string" },
    },
  });
  // TODO: Handle 'response' of type SimulationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Simulations.CreateSimulationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulations.createSimulation({
  body: {
    notificationSettingId: "ntfset_01j82d983j814ypzx7m1fw2jpz",
    name: "Create a failed subscription renewal simulation with subscription ID",
    type: SimulationScenarioType.SubscriptionRenewal,
    config: { subscriptionRenewal: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SimulationCreate](src/models/unions/simulation-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulations.createSimulation(request)`

- **OnSuccess**: <code>[SimulationsResponse1](src/models/simulations-response1.ts)</code>
- **OnError**: throws <code>[Simulations.CreateSimulationError](src/resources/simulations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulations.createSimulation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsResponse1, Simulations.CreateSimulationError&gt;</code>, with `result.value` of type <code>[SimulationsResponse1](src/models/simulations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSimulation(request: Simulations.GetSimulationRequest, options?: RequestOptions): ApiPromise&lt;SimulationsResponse1, Simulations.GetSimulationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a simulation using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulations.getSimulation({ simulationId: "some example string" });
  // TODO: Handle 'response' of type SimulationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Simulations.GetSimulationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulations.getSimulation({ simulationId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulations.getSimulation(request)`

- **OnSuccess**: <code>[SimulationsResponse1](src/models/simulations-response1.ts)</code>
- **OnError**: throws <code>[Simulations.GetSimulationError](src/resources/simulations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulations.getSimulation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsResponse1, Simulations.GetSimulationError&gt;</code>, with `result.value` of type <code>[SimulationsResponse1](src/models/simulations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSimulations(request: Simulations.ListSimulationsRequest, options?: RequestOptions): ApiPromise&lt;SimulationsResponse, Simulations.ListSimulationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of simulations. Use the query parameters to [page through results](https://developer.paddle.com/api-reference/about/pagination).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulations.listSimulations();
  // TODO: Handle 'response' of type SimulationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Simulations.ListSimulationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulations.listSimulations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>notificationSettingId?</code> | <code>string[]</code> | Return entities related to the specified notification destination. Use a comma-separated list to specify multiple notification destination IDs. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulations.listSimulations(request)`

- **OnSuccess**: <code>[SimulationsResponse](src/models/simulations-response.ts)</code>
- **OnError**: throws <code>[Simulations.ListSimulationsError](src/resources/simulations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulations.listSimulations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsResponse, Simulations.ListSimulationsError&gt;</code>, with `result.value` of type <code>[SimulationsResponse](src/models/simulations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSimulation(request: Simulations.UpdateSimulationRequest, options?: RequestOptions): ApiPromise&lt;SimulationsResponse1, Simulations.UpdateSimulationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a simulation using its ID.

For scenario simulations, you can optionally include a `config.entities` object in the request body with entity IDs to populate
simulated webhook payloads with real data. The API key making the request needs read permissions:

* For the entities you provided, or the request fails.
* For related entities which aren't nested in the entities you provided, or static examples will be used instead.

For example, when updating a subscription renewal scenario simulation with an API key that has a `subscription.read` permission but not a `transaction.read` permission,
the request succeeds and the subscription data will be used in simulated payloads, but the related transaction data won't be used in payloads and falls back to a static example.

If you don't provide a `config.entities` object, simulated webhook payloads are populated with static examples.

If successful, your response includes a copy of the updated simulation entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulations.updateSimulation({
    simulationId: "some example string",
    body: { name: "Refund approved", type: EventTypeName.AdjustmentUpdated, payload: {} },
  });
  // TODO: Handle 'response' of type SimulationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Simulations.UpdateSimulationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulations.updateSimulation({
  simulationId: "some example string",
  body: { name: "Refund approved", type: EventTypeName.AdjustmentUpdated, payload: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |
| <code>body</code> | <code>[SimulationUpdate](src/models/unions/simulation-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulations.updateSimulation(request)`

- **OnSuccess**: <code>[SimulationsResponse1](src/models/simulations-response1.ts)</code>
- **OnError**: throws <code>[Simulations.UpdateSimulationError](src/resources/simulations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulations.updateSimulation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsResponse1, Simulations.UpdateSimulationError&gt;</code>, with `result.value` of type <code>[SimulationsResponse1](src/models/simulations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SimulationTypes

> Source: [SimulationTypes](src/resources/simulation-types.ts)

<details>
<summary><code>listSimulationTypes(options?: RequestOptions): ApiPromise&lt;SimulationTypesResponse, SimulationTypes.ListSimulationTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of simulation types (events and scenarios) that you can choose from when creating simulations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulationTypes.listSimulationTypes();
  // TODO: Handle 'response' of type SimulationTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type SimulationTypes.ListSimulationTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulationTypes.listSimulationTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulationTypes.listSimulationTypes()`

- **OnSuccess**: <code>[SimulationTypesResponse](src/models/simulation-types-response.ts)</code>
- **OnError**: throws <code>[SimulationTypes.ListSimulationTypesError](src/resources/simulation-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulationTypes.listSimulationTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationTypesResponse, SimulationTypes.ListSimulationTypesError&gt;</code>, with `result.value` of type <code>[SimulationTypesResponse](src/models/simulation-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SimulationRuns

> Source: [SimulationRuns](src/resources/simulation-runs.ts)

<details>
<summary><code>createSimulationRun(request: SimulationRuns.CreateSimulationRunRequest, options?: RequestOptions): ApiPromise&lt;SimulationsRunsResponse1, SimulationRuns.CreateSimulationRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new simulation run for a simulation.

If successful, your response includes a copy of the new simulation run entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulationRuns.createSimulationRun({ simulationId: "some example string" });
  // TODO: Handle 'response' of type SimulationsRunsResponse1
} catch (err) {
  // TODO: Handle 'err' of type SimulationRuns.CreateSimulationRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulationRuns.createSimulationRun({
  simulationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsRunsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulationRuns.createSimulationRun(request)`

- **OnSuccess**: <code>[SimulationsRunsResponse1](src/models/simulations-runs-response1.ts)</code>
- **OnError**: throws <code>[SimulationRuns.CreateSimulationRunError](src/resources/simulation-runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulationRuns.createSimulationRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsRunsResponse1, SimulationRuns.CreateSimulationRunError&gt;</code>, with `result.value` of type <code>[SimulationsRunsResponse1](src/models/simulations-runs-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSimulationRun(request: SimulationRuns.GetSimulationRunRequest, options?: RequestOptions): ApiPromise&lt;SimulationsRunsResponse2, SimulationRuns.GetSimulationRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a simulation run using its ID.

Use the `include` parameter to include related entities in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulationRuns.getSimulationRun({
    simulationId: "some example string",
    simulationRunId: "some example string",
  });
  // TODO: Handle 'response' of type SimulationsRunsResponse2
} catch (err) {
  // TODO: Handle 'err' of type SimulationRuns.GetSimulationRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulationRuns.getSimulationRun({
  simulationId: "some example string",
  simulationRunId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsRunsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |
| <code>simulationRunId</code> | <code>string</code> | Paddle ID of the simulation run entity to work with. |
| <code>include?</code> | <code>[SimulationsRunIncludeEnum](src/models/simulations-run-include-enum.ts)[]</code> | Include related entities in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulationRuns.getSimulationRun(request)`

- **OnSuccess**: <code>[SimulationsRunsResponse2](src/models/simulations-runs-response2.ts)</code>
- **OnError**: throws <code>[SimulationRuns.GetSimulationRunError](src/resources/simulation-runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulationRuns.getSimulationRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsRunsResponse2, SimulationRuns.GetSimulationRunError&gt;</code>, with `result.value` of type <code>[SimulationsRunsResponse2](src/models/simulations-runs-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSimulationRuns(request: SimulationRuns.ListSimulationRunsRequest, options?: RequestOptions): ApiPromise&lt;SimulationsRunsResponse, SimulationRuns.ListSimulationRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of simulation runs. Use the query parameters to [page through results](https://developer.paddle.com/api-reference/about/pagination).

Use the `include` parameter to [include related entities](https://developer.paddle.com/api-reference/about/include-entities) in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulationRuns.listSimulationRuns({ simulationId: "some example string" });
  // TODO: Handle 'response' of type SimulationsRunsResponse
} catch (err) {
  // TODO: Handle 'err' of type SimulationRuns.ListSimulationRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulationRuns.listSimulationRuns({
  simulationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsRunsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>include?</code> | <code>[SimulationsRunIncludeEnum](src/models/simulations-run-include-enum.ts)[]</code> | Include related entities in the response. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulationRuns.listSimulationRuns(request)`

- **OnSuccess**: <code>[SimulationsRunsResponse](src/models/simulations-runs-response.ts)</code>
- **OnError**: throws <code>[SimulationRuns.ListSimulationRunsError](src/resources/simulation-runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulationRuns.listSimulationRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsRunsResponse, SimulationRuns.ListSimulationRunsError&gt;</code>, with `result.value` of type <code>[SimulationsRunsResponse](src/models/simulations-runs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SimulationRunEvents

> Source: [SimulationRunEvents](src/resources/simulation-run-events.ts)

<details>
<summary><code>getSimulationEvent(request: SimulationRunEvents.GetSimulationEventRequest, options?: RequestOptions): ApiPromise&lt;SimulationsRunsEventsSimulationEventIdResponse, SimulationRunEvents.GetSimulationEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a simulation event using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulationRunEvents.getSimulationEvent({
    simulationId: "some example string",
    simulationRunId: "some example string",
    simulationEventId: "some example string",
  });
  // TODO: Handle 'response' of type SimulationsRunsEventsSimulationEventIdResponse
} catch (err) {
  // TODO: Handle 'err' of type SimulationRunEvents.GetSimulationEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulationRunEvents.getSimulationEvent({
  simulationId: "some example string",
  simulationRunId: "some example string",
  simulationEventId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsRunsEventsSimulationEventIdResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |
| <code>simulationRunId</code> | <code>string</code> | Paddle ID of the simulation run entity to work with. |
| <code>simulationEventId</code> | <code>string</code> | Paddle ID of the simulation event entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulationRunEvents.getSimulationEvent(request)`

- **OnSuccess**: <code>[SimulationsRunsEventsSimulationEventIdResponse](src/models/simulations-runs-events-simulation-event-id-response.ts)</code>
- **OnError**: throws <code>[SimulationRunEvents.GetSimulationEventError](src/resources/simulation-run-events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulationRunEvents.getSimulationEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsRunsEventsSimulationEventIdResponse, SimulationRunEvents.GetSimulationEventError&gt;</code>, with `result.value` of type <code>[SimulationsRunsEventsSimulationEventIdResponse](src/models/simulations-runs-events-simulation-event-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSimulationsEvents(request: SimulationRunEvents.ListSimulationsEventsRequest, options?: RequestOptions): ApiPromise&lt;SimulationsRunsEventsResponse, SimulationRunEvents.ListSimulationsEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of simulations. Use the query parameters to [page through results](https://developer.paddle.com/api-reference/about/pagination).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulationRunEvents.listSimulationsEvents({
    simulationId: "some example string",
    simulationRunId: "some example string",
  });
  // TODO: Handle 'response' of type SimulationsRunsEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type SimulationRunEvents.ListSimulationsEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulationRunEvents.listSimulationsEvents({
  simulationId: "some example string",
  simulationRunId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsRunsEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |
| <code>simulationRunId</code> | <code>string</code> | Paddle ID of the simulation run entity to work with. |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulationRunEvents.listSimulationsEvents(request)`

- **OnSuccess**: <code>[SimulationsRunsEventsResponse](src/models/simulations-runs-events-response.ts)</code>
- **OnError**: throws <code>[SimulationRunEvents.ListSimulationsEventsError](src/resources/simulation-run-events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulationRunEvents.listSimulationsEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsRunsEventsResponse, SimulationRunEvents.ListSimulationsEventsError&gt;</code>, with `result.value` of type <code>[SimulationsRunsEventsResponse](src/models/simulations-runs-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaySimulationRunEvent(request: SimulationRunEvents.ReplaySimulationRunEventRequest, options?: RequestOptions): ApiPromise&lt;SimulationsRunsEventsSimulationEventIdReplayResponse, SimulationRunEvents.ReplaySimulationRunEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to resend a simulation run log using its ID.

Paddle creates a new simulation run log entity for the replay, related to the same simulation run.

If successful, your response includes the new simulation run log entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simulationRunEvents.replaySimulationRunEvent({
    simulationId: "some example string",
    simulationRunId: "some example string",
    simulationEventId: "some example string",
  });
  // TODO: Handle 'response' of type SimulationsRunsEventsSimulationEventIdReplayResponse
} catch (err) {
  // TODO: Handle 'err' of type SimulationRunEvents.ReplaySimulationRunEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simulationRunEvents.replaySimulationRunEvent({
  simulationId: "some example string",
  simulationRunId: "some example string",
  simulationEventId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SimulationsRunsEventsSimulationEventIdReplayResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>simulationId</code> | <code>string</code> | Paddle ID of the simulation entity to work with. |
| <code>simulationRunId</code> | <code>string</code> | Paddle ID of the simulation run entity to work with. |
| <code>simulationEventId</code> | <code>string</code> | Paddle ID of the simulation event entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simulationRunEvents.replaySimulationRunEvent(request)`

- **OnSuccess**: <code>[SimulationsRunsEventsSimulationEventIdReplayResponse](src/models/simulations-runs-events-simulation-event-id-replay-response.ts)</code>
- **OnError**: throws <code>[SimulationRunEvents.ReplaySimulationRunEventError](src/resources/simulation-run-events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simulationRunEvents.replaySimulationRunEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SimulationsRunsEventsSimulationEventIdReplayResponse, SimulationRunEvents.ReplaySimulationRunEventError&gt;</code>, with `result.value` of type <code>[SimulationsRunsEventsSimulationEventIdReplayResponse](src/models/simulations-runs-events-simulation-event-id-replay-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>createReport(request: Reports.CreateReportRequest, options?: RequestOptions): ApiPromise&lt;ReportsResponse1, Reports.CreateReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new report.

Reports are created as `pending` initially while Paddle generates your report. They move to `ready` when they're ready to download.

You can download a report when it's ready using the [get a CSV file for a report operation](https://developer.paddle.com/api-reference/reports/get-report-csv).

If successful, your response includes a copy of the new report entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.createReport({
    body: {
      type: AdjustmentsReportType.Adjustments,
      filters: [
        { name: ReportFilterAdjustmentsName.Action, value: [AdjustmentStatus.PendingApproval] },
        {
          name: ReportFilterAdjustmentsName.UpdatedAt,
          operator: FilterOperator.Lt,
          value: new Date(Date.UTC(2024, 3, 15, 0, 0, 0)),
        },
        {
          name: ReportFilterAdjustmentsName.UpdatedAt,
          operator: FilterOperator.Gte,
          value: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ReportsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Reports.CreateReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.createReport({
  body: {
    type: AdjustmentsReportType.Adjustments,
    filters: [
      { name: ReportFilterAdjustmentsName.Action, value: [AdjustmentStatus.PendingApproval] },
      {
        name: ReportFilterAdjustmentsName.UpdatedAt,
        operator: FilterOperator.Lt,
        value: new Date(Date.UTC(2024, 3, 15, 0, 0, 0)),
      },
      {
        name: ReportFilterAdjustmentsName.UpdatedAt,
        operator: FilterOperator.Gte,
        value: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ReportCreate](src/models/unions/report-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.createReport(request)`

- **OnSuccess**: <code>[ReportsResponse1](src/models/reports-response1.ts)</code>
- **OnError**: throws <code>[Reports.CreateReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.createReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportsResponse1, Reports.CreateReportError&gt;</code>, with `result.value` of type <code>[ReportsResponse1](src/models/reports-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReport(request: Reports.GetReportRequest, options?: RequestOptions): ApiPromise&lt;ReportsResponse1, Reports.GetReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a report using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getReport({ reportId: "some example string" });
  // TODO: Handle 'response' of type ReportsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.getReport({ reportId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | Paddle ID of the report entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReport(request)`

- **OnSuccess**: <code>[ReportsResponse1](src/models/reports-response1.ts)</code>
- **OnError**: throws <code>[Reports.GetReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportsResponse1, Reports.GetReportError&gt;</code>, with `result.value` of type <code>[ReportsResponse1](src/models/reports-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportCsv(request: Reports.GetReportCsvRequest, options?: RequestOptions): ApiPromise&lt;GetReportCsvResponse, Reports.GetReportCsvError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a link to a CSV file for a report.

Only returned for reports that are `ready`. This means Paddle has completed processing the report and it's ready to download.

The link returned is not a permanent link. It expires after 3 minutes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getReportCsv({ reportId: "some example string" });
  // TODO: Handle 'response' of type GetReportCsvResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportCsvError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.getReportCsv({ reportId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetReportCsvResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | Paddle ID of the report entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReportCsv(request)`

- **OnSuccess**: <code>[GetReportCsvResponse](src/models/get-report-csv-response.ts)</code>
- **OnError**: throws <code>[Reports.GetReportCsvError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReportCsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetReportCsvResponse, Reports.GetReportCsvError&gt;</code>, with `result.value` of type <code>[GetReportCsvResponse](src/models/get-report-csv-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReports(request: Reports.ListReportsRequest, options?: RequestOptions): ApiPromise&lt;ReportsResponse, Reports.ListReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of reports. Use the query parameters to page through results.

By default, Paddle returns reports that are `pending` or `ready`. Use the `status` query parameter to return reports that are `failed`, `expired`, or `deleted`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.listReports();
  // TODO: Handle 'response' of type ReportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.ListReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.listReports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[ReportStatusQueryEnum](src/models/report-status-query-enum.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.listReports(request)`

- **OnSuccess**: <code>[ReportsResponse](src/models/reports-response.ts)</code>
- **OnError**: throws <code>[Reports.ListReportsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.listReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportsResponse, Reports.ListReportsError&gt;</code>, with `result.value` of type <code>[ReportsResponse](src/models/reports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/resources/products.ts)

<details>
<summary><code>createProduct(request: Products.CreateProductRequest, options?: RequestOptions): ApiPromise&lt;ProductsResponse1, Products.CreateProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new product.

Paddle does not upload product images to a CDN. For `image_url`, you should host images on an HTTPS server that's publicly accessible. We recommend using square images (`1:1` ratio).

If successful, your response includes a copy of the new product entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.createProduct({
    body: {
      name: "AeroEdit Student",
      description:
        "Essential tools for student pilots to manage flight logs, analyze performance, and plan routes, and ensure compliance. Valid student pilot certificate from the FAA required.",
      taxCategory: TaxCategory.Standard,
      imageUrl: "https://paddle.s3.amazonaws.com/user/165798/bT1XUOJAQhOUxGs83cbk_pro.png",
      customData: {},
    },
  });
  // TODO: Handle 'response' of type ProductsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Products.CreateProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products.createProduct({
  body: {
    name: "AeroEdit Student",
    description:
      "Essential tools for student pilots to manage flight logs, analyze performance, and plan routes, and ensure compliance. Valid student pilot certificate from the FAA required.",
    taxCategory: TaxCategory.Standard,
    imageUrl: "https://paddle.s3.amazonaws.com/user/165798/bT1XUOJAQhOUxGs83cbk_pro.png",
    customData: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProductCreate](src/models/product-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.createProduct(request)`

- **OnSuccess**: <code>[ProductsResponse1](src/models/products-response1.ts)</code>
- **OnError**: throws <code>[Products.CreateProductError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.createProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductsResponse1, Products.CreateProductError&gt;</code>, with `result.value` of type <code>[ProductsResponse1](src/models/products-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProduct(request: Products.GetProductRequest, options?: RequestOptions): ApiPromise&lt;ProductsResponse2, Products.GetProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a product using its ID.

Use the `include` parameter to include related price entities in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.getProduct({ productId: "some example string" });
  // TODO: Handle 'response' of type ProductsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Products.GetProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products.getProduct({ productId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | Paddle ID of the product entity to work with. |
| <code>include?</code> | <code>[ProductIncludeEnum](src/models/product-include-enum.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.getProduct(request)`

- **OnSuccess**: <code>[ProductsResponse2](src/models/products-response2.ts)</code>
- **OnError**: throws <code>[Products.GetProductError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.getProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductsResponse2, Products.GetProductError&gt;</code>, with `result.value` of type <code>[ProductsResponse2](src/models/products-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProducts(request: Products.ListProductsRequest, options?: RequestOptions): ApiPromise&lt;ProductsResponse, Products.ListProductsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of products. Use the query parameters to page through results.

By default, Paddle returns products that are `active`. Use the `status` query parameter to return products that are archived.

Use the `include` parameter to include related price entities in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.listProducts();
  // TODO: Handle 'response' of type ProductsResponse
} catch (err) {
  // TODO: Handle 'err' of type Products.ListProductsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products.listProducts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>include?</code> | <code>[ProductIncludeEnum](src/models/product-include-enum.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `created_at`, `custom_data`, `description`, `id`, `image_url`, `name`, `status`, `tax_category`, and `updated_at`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>taxCategory?</code> | <code>[TaxCategory1](src/models/tax-category1.ts)[]</code> | Return entities that match the specified tax category. Use a comma-separated list to specify multiple tax categories. |
| <code>type?</code> | <code>[CatalogType](src/models/catalog-type.ts)</code> | Return items that match the specified type. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.listProducts(request)`

- **OnSuccess**: <code>[ProductsResponse](src/models/products-response.ts)</code>
- **OnError**: throws <code>[Products.ListProductsError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.listProducts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductsResponse, Products.ListProductsError&gt;</code>, with `result.value` of type <code>[ProductsResponse](src/models/products-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProduct(request: Products.UpdateProductRequest, options?: RequestOptions): ApiPromise&lt;ProductsResponse1, Products.UpdateProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a product using its ID.

Paddle does not upload product images to a CDN. For `image_url`, you should host images on an HTTPS server that's publicly accessible. We recommend using square images (`1:1` ratio).

If successful, your response includes a copy of the updated product entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.updateProduct({
    productId: "some example string",
    body: { name: "AeroEdit for learner pilots" },
  });
  // TODO: Handle 'response' of type ProductsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Products.UpdateProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products.updateProduct({
  productId: "some example string",
  body: { name: "AeroEdit for learner pilots" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productId</code> | <code>string</code> | Paddle ID of the product entity to work with. |
| <code>body</code> | <code>[ProductUpdate](src/models/product-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.updateProduct(request)`

- **OnSuccess**: <code>[ProductsResponse1](src/models/products-response1.ts)</code>
- **OnError**: throws <code>[Products.UpdateProductError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.updateProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductsResponse1, Products.UpdateProductError&gt;</code>, with `result.value` of type <code>[ProductsResponse1](src/models/products-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PricingPreview

> Source: [PricingPreview](src/resources/pricing-preview.ts)

<details>
<summary><code>previewPrices(request: PricingPreview.PreviewPricesRequest, options?: RequestOptions): ApiPromise&lt;PricingPreviewResponse, PricingPreview.PreviewPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews calculations for one or more prices. Typically used for building pricing pages.

You can provide location information when previewing prices. You must provide this if you want Paddle to calculate tax or [automatically localize prices](https://developer.paddle.com/build/products/offer-localized-pricing). You can provide one of:

* `customer_ip_address`: Paddle fetches location using the IP address to calculate totals.
* `address`: Paddle uses the country and ZIP code (where supplied) to calculate totals.
* `customer_id`, `address_id`, `business_id`: Paddle uses existing customer data to calculate totals. Typically used for logged-in customers.

If successful, your response includes the data you sent with a `details` object that includes totals for the supplied prices.

Each line item includes `formatted_unit_totals` and `formatted_totals` objects that return totals formatted for the country or region you're working with, including the currency symbol.

You can work with the preview prices operation using the [`Paddle.PricePreview()`](https://developer.paddle.com/paddlejs/methods/paddle-pricepreview) method in Paddle.js. When working with `Paddle.PricePreview()`, request and response fields are `camelCase` rather than `snake_case`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pricingPreview.previewPrices({
    body: {
      currencyCode: CurrencyCode.Usd,
      discountId: "dsc_01gtgztp8fpchantd5g1wrksa3",
      customerIpAddress: "34.232.58.13",
      items: [
        { priceId: "pri_01gsz8z1q1n00f12qt82y31smh", quantity: 20 },
        { priceId: "pri_01h1vjfevh5etwq3rb416a23h2", quantity: 1 },
      ],
    },
  });
  // TODO: Handle 'response' of type PricingPreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type PricingPreview.PreviewPricesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pricingPreview.previewPrices({
  body: {
    currencyCode: CurrencyCode.Usd,
    discountId: "dsc_01gtgztp8fpchantd5g1wrksa3",
    customerIpAddress: "34.232.58.13",
    items: [
      { priceId: "pri_01gsz8z1q1n00f12qt82y31smh", quantity: 20 },
      { priceId: "pri_01h1vjfevh5etwq3rb416a23h2", quantity: 1 },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricingPreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PricePreviewRequest](src/models/price-preview-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pricingPreview.previewPrices(request)`

- **OnSuccess**: <code>[PricingPreviewResponse](src/models/pricing-preview-response.ts)</code>
- **OnError**: throws <code>[PricingPreview.PreviewPricesError](src/resources/pricing-preview.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pricingPreview.previewPrices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricingPreviewResponse, PricingPreview.PreviewPricesError&gt;</code>, with `result.value` of type <code>[PricingPreviewResponse](src/models/pricing-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Prices

> Source: [Prices](src/resources/prices.ts)

<details>
<summary><code>createPrice(request: Prices.CreatePriceRequest, options?: RequestOptions): ApiPromise&lt;PricesResponse1, Prices.CreatePriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new price.

Prices describe how you charge for products. You must include a `product_id` in your request to relate this price to a product.

If you omit the `quantity` object, Paddle automatically sets a minimum of `1` and a maximum of `100` for you. This means the most units that a customer can buy is 100. Set a quantity if you'd like to offer a different amount.

If successful, your response includes a copy of the new price entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.createPrice({
    body: {
      description: "Monthly (per seat) with 14 day paid trial",
      name: "Monthly (per seat)",
      productId: "pro_01htz88xpr0mm7b3ta2pjkr7w2",
      billingCycle: { interval: DurationInterval.Month, frequency: 1 },
      trialPeriod: {
        interval: DurationInterval.Day,
        frequency: 14,
        requiresPaymentMethod: true,
        unitPrice: { amount: "100", currencyCode: CurrencyCode.Usd },
      },
      taxMode: TaxMode.AccountSetting,
      unitPrice: { amount: "500", currencyCode: CurrencyCode.Usd },
    },
  });
  // TODO: Handle 'response' of type PricesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Prices.CreatePriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.createPrice({
  body: {
    description: "Monthly (per seat) with 14 day paid trial",
    name: "Monthly (per seat)",
    productId: "pro_01htz88xpr0mm7b3ta2pjkr7w2",
    billingCycle: { interval: DurationInterval.Month, frequency: 1 },
    trialPeriod: {
      interval: DurationInterval.Day,
      frequency: 14,
      requiresPaymentMethod: true,
      unitPrice: { amount: "100", currencyCode: CurrencyCode.Usd },
    },
    taxMode: TaxMode.AccountSetting,
    unitPrice: { amount: "500", currencyCode: CurrencyCode.Usd },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PriceCreate](src/models/price-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.createPrice(request)`

- **OnSuccess**: <code>[PricesResponse1](src/models/prices-response1.ts)</code>
- **OnError**: throws <code>[Prices.CreatePriceError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.createPrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricesResponse1, Prices.CreatePriceError&gt;</code>, with `result.value` of type <code>[PricesResponse1](src/models/prices-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPrice(request: Prices.GetPriceRequest, options?: RequestOptions): ApiPromise&lt;PricesResponse2, Prices.GetPriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a price using its ID.

Use the `include` parameter to include the related product entity in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.getPrice({ priceId: "some example string" });
  // TODO: Handle 'response' of type PricesResponse2
} catch (err) {
  // TODO: Handle 'err' of type Prices.GetPriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.getPrice({ priceId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>priceId</code> | <code>string</code> | Paddle ID of the price entity to work with. |
| <code>include?</code> | <code>[PriceIncludeEnum](src/models/price-include-enum.ts)[]</code> | Include related entities in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.getPrice(request)`

- **OnSuccess**: <code>[PricesResponse2](src/models/prices-response2.ts)</code>
- **OnError**: throws <code>[Prices.GetPriceError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.getPrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricesResponse2, Prices.GetPriceError&gt;</code>, with `result.value` of type <code>[PricesResponse2](src/models/prices-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPrices(request: Prices.ListPricesRequest, options?: RequestOptions): ApiPromise&lt;PricesResponse, Prices.ListPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of prices. Use the query parameters to page through results.

By default, Paddle returns prices that are `active`. Use the `status` query parameter to return prices that are archived.

Use the `include` parameter to include the related product entity in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.listPrices();
  // TODO: Handle 'response' of type PricesResponse
} catch (err) {
  // TODO: Handle 'err' of type Prices.ListPricesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.listPrices().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>include?</code> | <code>[PriceListIncludeEnum](src/models/price-list-include-enum.ts)[]</code> | Include related entities in the response. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `billing_cycle.frequency`, `billing_cycle.interval`, `id`, `product_id`, `quantity.maximum`, `quantity.minimum`, `status`, `tax_mode`, `unit_price.amount`, and `unit_price.currency_code`.<br>**Default**: "id[DESC]" |
| <code>productId?</code> | <code>string[]</code> | Return entities related to the specified product. Use a comma-separated list to specify multiple product IDs. |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>recurring?</code> | <code>boolean</code> | Determine whether returned entities are for recurring prices (`true`) or one-time prices (`false`). |
| <code>billingCycleInterval?</code> | <code>[DurationInterval](src/models/duration-interval.ts)</code> | Return entities where the price billing cycle interval matches this value. |
| <code>billingCycleFrequency?</code> | <code>number</code> | Return entities where the price billing cycle frequency matches this value. |
| <code>type?</code> | <code>[CatalogType](src/models/catalog-type.ts)</code> | Return items that match the specified type. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.listPrices(request)`

- **OnSuccess**: <code>[PricesResponse](src/models/prices-response.ts)</code>
- **OnError**: throws <code>[Prices.ListPricesError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.listPrices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricesResponse, Prices.ListPricesError&gt;</code>, with `result.value` of type <code>[PricesResponse](src/models/prices-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePrice(request: Prices.UpdatePriceRequest, options?: RequestOptions): ApiPromise&lt;PricesResponse1, Prices.UpdatePriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a price using its ID.

If successful, your response includes a copy of the updated price entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.updatePrice({
    priceId: "some example string",
    body: {
      billingCycle: { interval: DurationInterval.Month, frequency: 1 },
      unitPrice: { amount: "500", currencyCode: CurrencyCode.Usd },
      unitPriceOverrides: [
        {
          countryCodes: [CountryCodeSupported.Ie, CountryCodeSupported.Fr, CountryCodeSupported.De],
          unitPrice: { amount: "700", currencyCode: CurrencyCode.Eur },
        },
        {
          countryCodes: [CountryCodeSupported.Gb],
          unitPrice: { amount: "600", currencyCode: CurrencyCode.Gbp },
        },
      ],
    },
  });
  // TODO: Handle 'response' of type PricesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Prices.UpdatePriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.updatePrice({
  priceId: "some example string",
  body: {
    billingCycle: { interval: DurationInterval.Month, frequency: 1 },
    unitPrice: { amount: "500", currencyCode: CurrencyCode.Usd },
    unitPriceOverrides: [
      {
        countryCodes: [CountryCodeSupported.Ie, CountryCodeSupported.Fr, CountryCodeSupported.De],
        unitPrice: { amount: "700", currencyCode: CurrencyCode.Eur },
      },
      {
        countryCodes: [CountryCodeSupported.Gb],
        unitPrice: { amount: "600", currencyCode: CurrencyCode.Gbp },
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PricesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>priceId</code> | <code>string</code> | Paddle ID of the price entity to work with. |
| <code>body</code> | <code>[PriceUpdate](src/models/price-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.updatePrice(request)`

- **OnSuccess**: <code>[PricesResponse1](src/models/prices-response1.ts)</code>
- **OnError**: throws <code>[Prices.UpdatePriceError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.updatePrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PricesResponse1, Prices.UpdatePriceError&gt;</code>, with `result.value` of type <code>[PricesResponse1](src/models/prices-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethods

> Source: [PaymentMethods](src/resources/payment-methods.ts)

<details>
<summary><code>deleteCustomerPaymentMethod(request: PaymentMethods.DeleteCustomerPaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentMethods.DeleteCustomerPaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer payment method using its ID.

Deleted payment methods are no longer saved and presented to the customer for future purchases.

Saved payment methods can't be deleted if tied to an `active`, `trialing`, `paused`, or `past_due` subscription. Update the subscription's payment method first, then delete the saved payment method.

There's no way to recover a deleted saved payment method. It's permanently removed from that customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentMethods.deleteCustomerPaymentMethod({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    paymentMethodId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethods.DeleteCustomerPaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethods.deleteCustomerPaymentMethod({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  paymentMethodId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>paymentMethodId</code> | <code>string</code> | Paddle ID of the payment method entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethods.deleteCustomerPaymentMethod(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentMethods.DeleteCustomerPaymentMethodError](src/resources/payment-methods.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethods.deleteCustomerPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentMethods.DeleteCustomerPaymentMethodError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerPaymentMethod(request: PaymentMethods.GetCustomerPaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;CustomersPaymentMethodsResponse1, PaymentMethods.GetCustomerPaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a payment method for a customer using its ID and related customer ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethods.getCustomerPaymentMethod({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    paymentMethodId: "some example string",
  });
  // TODO: Handle 'response' of type CustomersPaymentMethodsResponse1
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethods.GetCustomerPaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethods.getCustomerPaymentMethod({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  paymentMethodId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersPaymentMethodsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>paymentMethodId</code> | <code>string</code> | Paddle ID of the payment method entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethods.getCustomerPaymentMethod(request)`

- **OnSuccess**: <code>[CustomersPaymentMethodsResponse1](src/models/customers-payment-methods-response1.ts)</code>
- **OnError**: throws <code>[PaymentMethods.GetCustomerPaymentMethodError](src/resources/payment-methods.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethods.getCustomerPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersPaymentMethodsResponse1, PaymentMethods.GetCustomerPaymentMethodError&gt;</code>, with `result.value` of type <code>[CustomersPaymentMethodsResponse1](src/models/customers-payment-methods-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerPaymentMethods(request: PaymentMethods.ListCustomerPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;CustomersPaymentMethodsResponse, PaymentMethods.ListCustomerPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of payment methods that a customer has saved.  Use the query parameters to page through results.

Customers can choose to save payment methods when purchasing one-time items and subscriptions by checking a box when completing checkout. You can present customers with their saved payment methods when they make a purchase in the future.

Returns an empty list where customers have not saved any payment methods, or have deleted all previously saved payment methods.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethods.listCustomerPaymentMethods({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  });
  // TODO: Handle 'response' of type CustomersPaymentMethodsResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethods.ListCustomerPaymentMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethods.listCustomerPaymentMethods({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersPaymentMethodsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>addressId?</code> | <code>string[]</code> | Return entities related to the specified address. Use a comma-separated list to specify multiple address IDs. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>supportsCheckout?</code> | <code>boolean</code> | Return entities that support being presented at checkout (`true`) or not (`false`). |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethods.listCustomerPaymentMethods(request)`

- **OnSuccess**: <code>[CustomersPaymentMethodsResponse](src/models/customers-payment-methods-response.ts)</code>
- **OnError**: throws <code>[PaymentMethods.ListCustomerPaymentMethodsError](src/resources/payment-methods.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethods.listCustomerPaymentMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersPaymentMethodsResponse, PaymentMethods.ListCustomerPaymentMethodsError&gt;</code>, with `result.value` of type <code>[CustomersPaymentMethodsResponse](src/models/customers-payment-methods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](src/resources/notifications.ts)

<details>
<summary><code>getNotification(request: Notifications.GetNotificationRequest, options?: RequestOptions): ApiPromise&lt;NotificationsResponse1, Notifications.GetNotificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a notification using its ID.

Notifications older than 90 days aren't retained. If you try to get a notification that's no longer retained, Paddle returns an error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getNotification({ notificationId: "some example string" });
  // TODO: Handle 'response' of type NotificationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Notifications.GetNotificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getNotification({
  notificationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationId</code> | <code>string</code> | Paddle ID of the notification entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getNotification(request)`

- **OnSuccess**: <code>[NotificationsResponse1](src/models/notifications-response1.ts)</code>
- **OnError**: throws <code>[Notifications.GetNotificationError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.getNotification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsResponse1, Notifications.GetNotificationError&gt;</code>, with `result.value` of type <code>[NotificationsResponse1](src/models/notifications-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listNotifications(request: Notifications.ListNotificationsRequest, options?: RequestOptions): ApiPromise&lt;NotificationsResponse, Notifications.ListNotificationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of notifications created in the last 90 days. Use the query parameters to page through results.

Notifications older than 90 days aren't retained.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.listNotifications();
  // TODO: Handle 'response' of type NotificationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Notifications.ListNotificationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.listNotifications().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>notificationSettingId?</code> | <code>string[]</code> | Return entities related to the specified notification destination. Use a comma-separated list to specify multiple notification destination IDs. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>search?</code> | <code>string</code> | Return entities that match a search query. Searches `id` and `type` fields. |
| <code>status?</code> | <code>[Status3](src/models/status3.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>filter?</code> | <code>string</code> | Return entities that contain the Paddle ID specified. Pass a transaction, customer, or subscription ID. |
| <code>to?</code> | <code>string</code> | Return entities up to a specific time. Pass an RFC 3339 datetime string. |
| <code>from?</code> | <code>string</code> | Return entities from a specific time. Pass an RFC 3339 datetime string. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.listNotifications(request)`

- **OnSuccess**: <code>[NotificationsResponse](src/models/notifications-response.ts)</code>
- **OnError**: throws <code>[Notifications.ListNotificationsError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.listNotifications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsResponse, Notifications.ListNotificationsError&gt;</code>, with `result.value` of type <code>[NotificationsResponse](src/models/notifications-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replayNotification(request: Notifications.ReplayNotificationRequest, options?: RequestOptions): ApiPromise&lt;NotificationsReplayResponse, Notifications.ReplayNotificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to resend a `delivered` or `failed` notification using its ID.

Paddle creates a new notification entity for the replay, related to the same `event_id`. Your response includes the new `notification_id` of the created notification.

Notifications older than 90 days aren't retained. If you try to replay a notification that's no longer retained, Paddle returns an error.

Only notifications with the `origin` of `event` can be replayed. You can't replay a notification created for a replay.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.replayNotification({ notificationId: "some example string" });
  // TODO: Handle 'response' of type NotificationsReplayResponse
} catch (err) {
  // TODO: Handle 'err' of type Notifications.ReplayNotificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.replayNotification({
  notificationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsReplayResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationId</code> | <code>string</code> | Paddle ID of the notification entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.replayNotification(request)`

- **OnSuccess**: <code>[NotificationsReplayResponse](src/models/notifications-replay-response.ts)</code>
- **OnError**: throws <code>[Notifications.ReplayNotificationError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.replayNotification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsReplayResponse, Notifications.ReplayNotificationError&gt;</code>, with `result.value` of type <code>[NotificationsReplayResponse](src/models/notifications-replay-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NotificationSettings

> Source: [NotificationSettings](src/resources/notification-settings.ts)

<details>
<summary><code>createNotificationSetting(request: NotificationSettings.CreateNotificationSettingRequest, options?: RequestOptions): ApiPromise&lt;NotificationSettingsResponse1, NotificationSettings.CreateNotificationSettingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new notification setting (notification destination).

Pass an array of event type names to `subscribed_events` to say which events you'd like to subscribe to. Paddle responds with the full event type object for each event type.

If successful, your response includes a copy of the new notification setting entity. Use the returned `endpoint_secret_key` for webhook signature verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationSettings.createNotificationSetting({
    body: {
      description: "Slack notifications",
      type: NotificationSettingType.Url,
      destination: "https://hooks.slack.com/example",
      apiVersion: 1,
      subscribedEvents: [
        EventTypeName.TransactionBilled,
        EventTypeName.TransactionCanceled,
        EventTypeName.TransactionCompleted,
        EventTypeName.TransactionCreated,
        EventTypeName.TransactionPaymentFailed,
        EventTypeName.TransactionReady,
        EventTypeName.TransactionUpdated,
        EventTypeName.SubscriptionActivated,
        EventTypeName.SubscriptionCreated,
        EventTypeName.SubscriptionPastDue,
        EventTypeName.SubscriptionPaused,
        EventTypeName.SubscriptionResumed,
        EventTypeName.SubscriptionTrialing,
        EventTypeName.SubscriptionUpdated,
      ],
      trafficSource: NotificationSettingTrafficSource.All,
    },
  });
  // TODO: Handle 'response' of type NotificationSettingsResponse1
} catch (err) {
  // TODO: Handle 'err' of type NotificationSettings.CreateNotificationSettingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationSettings.createNotificationSetting({
  body: {
    description: "Slack notifications",
    type: NotificationSettingType.Url,
    destination: "https://hooks.slack.com/example",
    apiVersion: 1,
    subscribedEvents: [
      EventTypeName.TransactionBilled,
      EventTypeName.TransactionCanceled,
      EventTypeName.TransactionCompleted,
      EventTypeName.TransactionCreated,
      EventTypeName.TransactionPaymentFailed,
      EventTypeName.TransactionReady,
      EventTypeName.TransactionUpdated,
      EventTypeName.SubscriptionActivated,
      EventTypeName.SubscriptionCreated,
      EventTypeName.SubscriptionPastDue,
      EventTypeName.SubscriptionPaused,
      EventTypeName.SubscriptionResumed,
      EventTypeName.SubscriptionTrialing,
      EventTypeName.SubscriptionUpdated,
    ],
    trafficSource: NotificationSettingTrafficSource.All,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationSettingsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NotificationSettingCreate](src/models/notification-setting-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationSettings.createNotificationSetting(request)`

- **OnSuccess**: <code>[NotificationSettingsResponse1](src/models/notification-settings-response1.ts)</code>
- **OnError**: throws <code>[NotificationSettings.CreateNotificationSettingError](src/resources/notification-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationSettings.createNotificationSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationSettingsResponse1, NotificationSettings.CreateNotificationSettingError&gt;</code>, with `result.value` of type <code>[NotificationSettingsResponse1](src/models/notification-settings-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteNotificationSetting(request: NotificationSettings.DeleteNotificationSettingRequest, options?: RequestOptions): ApiPromise&lt;undefined, NotificationSettings.DeleteNotificationSettingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a notification setting (notification destination) using its ID.

When you delete a notification setting, it's permanently removed from your account. Paddle stops sending events to your destination, and you'll lose access to all the logs for this notification setting.

There's no way to recover a deleted notification setting. Deactivate a notification setting using the update notification setting operation if you'll need access to the logs or want to reactivate later on.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.notificationSettings.deleteNotificationSetting({
    notificationSettingId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type NotificationSettings.DeleteNotificationSettingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationSettings.deleteNotificationSetting({
  notificationSettingId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationSettingId</code> | <code>string</code> | Paddle ID of the notification setting entity (notification destination) to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationSettings.deleteNotificationSetting(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NotificationSettings.DeleteNotificationSettingError](src/resources/notification-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationSettings.deleteNotificationSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NotificationSettings.DeleteNotificationSettingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNotificationSetting(request: NotificationSettings.GetNotificationSettingRequest, options?: RequestOptions): ApiPromise&lt;NotificationSettingsResponse1, NotificationSettings.GetNotificationSettingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a notification setting (notification destination) using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationSettings.getNotificationSetting({
    notificationSettingId: "some example string",
  });
  // TODO: Handle 'response' of type NotificationSettingsResponse1
} catch (err) {
  // TODO: Handle 'err' of type NotificationSettings.GetNotificationSettingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationSettings.getNotificationSetting({
  notificationSettingId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationSettingsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationSettingId</code> | <code>string</code> | Paddle ID of the notification setting entity (notification destination) to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationSettings.getNotificationSetting(request)`

- **OnSuccess**: <code>[NotificationSettingsResponse1](src/models/notification-settings-response1.ts)</code>
- **OnError**: throws <code>[NotificationSettings.GetNotificationSettingError](src/resources/notification-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationSettings.getNotificationSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationSettingsResponse1, NotificationSettings.GetNotificationSettingError&gt;</code>, with `result.value` of type <code>[NotificationSettingsResponse1](src/models/notification-settings-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listNotificationSettings(request: NotificationSettings.ListNotificationSettingsRequest, options?: RequestOptions): ApiPromise&lt;NotificationSettingsResponse, NotificationSettings.ListNotificationSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of notification settings (notification destinations).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationSettings.listNotificationSettings();
  // TODO: Handle 'response' of type NotificationSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type NotificationSettings.ListNotificationSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationSettings.listNotificationSettings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationSettingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `200`; Maximum: `200`.<br>**Default**: 200 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>active?</code> | <code>boolean</code> | Determine whether returned entities are active (`true`) or not (`false`). |
| <code>trafficSource?</code> | <code>[NotificationSettingTrafficSource](src/models/notification-setting-traffic-source.ts)</code> | Return entities that match the specified traffic source. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationSettings.listNotificationSettings(request)`

- **OnSuccess**: <code>[NotificationSettingsResponse](src/models/notification-settings-response.ts)</code>
- **OnError**: throws <code>[NotificationSettings.ListNotificationSettingsError](src/resources/notification-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationSettings.listNotificationSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationSettingsResponse, NotificationSettings.ListNotificationSettingsError&gt;</code>, with `result.value` of type <code>[NotificationSettingsResponse](src/models/notification-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateNotificationSetting(request: NotificationSettings.UpdateNotificationSettingRequest, options?: RequestOptions): ApiPromise&lt;NotificationSettingsResponse1, NotificationSettings.UpdateNotificationSettingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a notification setting (notification destination) using its ID.

When updating subscribed events, send the complete list of event types that you'd like to subscribe to — including existing event types. If you omit event types, they're removed from the notification setting.

You only need to pass an event type name. Paddle responds with the full event type object for each event type.

If successful, your response includes a copy of the updated notification setting entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationSettings.updateNotificationSetting({
    notificationSettingId: "some example string",
    body: { description: "Slack notifications (old)", active: false },
  });
  // TODO: Handle 'response' of type NotificationSettingsResponse1
} catch (err) {
  // TODO: Handle 'err' of type NotificationSettings.UpdateNotificationSettingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationSettings.updateNotificationSetting({
  notificationSettingId: "some example string",
  body: { description: "Slack notifications (old)", active: false },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationSettingsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationSettingId</code> | <code>string</code> | Paddle ID of the notification setting entity (notification destination) to work with. |
| <code>body</code> | <code>[NotificationSettingUpdate](src/models/notification-setting-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationSettings.updateNotificationSetting(request)`

- **OnSuccess**: <code>[NotificationSettingsResponse1](src/models/notification-settings-response1.ts)</code>
- **OnError**: throws <code>[NotificationSettings.UpdateNotificationSettingError](src/resources/notification-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationSettings.updateNotificationSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationSettingsResponse1, NotificationSettings.UpdateNotificationSettingError&gt;</code>, with `result.value` of type <code>[NotificationSettingsResponse1](src/models/notification-settings-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NotificationLogs

> Source: [NotificationLogs](src/resources/notification-logs.ts)

<details>
<summary><code>listNotificationLogs(request: NotificationLogs.ListNotificationLogsRequest, options?: RequestOptions): ApiPromise&lt;NotificationsLogsResponse, NotificationLogs.ListNotificationLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of notification logs for a notification. A log includes information about delivery attempts, including failures.

Notifications older than 90 days aren't retained. If you try to list logs for a notification that's no longer retained, Paddle returns an error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notificationLogs.listNotificationLogs({
    notificationId: "some example string",
  });
  // TODO: Handle 'response' of type NotificationsLogsResponse
} catch (err) {
  // TODO: Handle 'err' of type NotificationLogs.ListNotificationLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notificationLogs.listNotificationLogs({
  notificationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsLogsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationId</code> | <code>string</code> | Paddle ID of the notification entity to work with. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notificationLogs.listNotificationLogs(request)`

- **OnSuccess**: <code>[NotificationsLogsResponse](src/models/notifications-logs-response.ts)</code>
- **OnError**: throws <code>[NotificationLogs.ListNotificationLogsError](src/resources/notification-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notificationLogs.listNotificationLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsLogsResponse, NotificationLogs.ListNotificationLogsError&gt;</code>, with `result.value` of type <code>[NotificationsLogsResponse](src/models/notifications-logs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](src/resources/metrics.ts)

<details>
<summary><code>getMetricsActiveSubscribers(request: Metrics.GetMetricsActiveSubscribersRequest, options?: RequestOptions): ApiPromise&lt;MetricsActiveSubscribersResponse, Metrics.GetMetricsActiveSubscribersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns timeseries data for active subscriber counts in a given date range. Trends have a daily granularity.
Current number of paying users with active subscriptions (does not include trialling users).

When `to` and `from` are the same, returns an empty timeseries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.getMetricsActiveSubscribers({ from: "2024-01-15", to: "2024-01-15" });
  // TODO: Handle 'response' of type MetricsActiveSubscribersResponse
} catch (err) {
  // TODO: Handle 'err' of type Metrics.GetMetricsActiveSubscribersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics.getMetricsActiveSubscribers({
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsActiveSubscribersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00 UTC. Must be before or the same as `to`. |
| <code>to</code> | <code>string</code> (date) | Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00 UTC. Must be after or the same as `from`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.getMetricsActiveSubscribers(request)`

- **OnSuccess**: <code>[MetricsActiveSubscribersResponse](src/models/metrics-active-subscribers-response.ts)</code>
- **OnError**: throws <code>[Metrics.GetMetricsActiveSubscribersError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.getMetricsActiveSubscribers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsActiveSubscribersResponse, Metrics.GetMetricsActiveSubscribersError&gt;</code>, with `result.value` of type <code>[MetricsActiveSubscribersResponse](src/models/metrics-active-subscribers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsChargebacks(request: Metrics.GetMetricsChargebacksRequest, options?: RequestOptions): ApiPromise&lt;MetricsChargebacksResponse, Metrics.GetMetricsChargebacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns timeseries data for chargebacks in a given date range. Trends have a daily granularity.
Total number of chargebacks received for the period. Does not include pre-chargeback alerts or chargeback reversals.

When `to` and `from` are the same, returns an empty timeseries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.getMetricsChargebacks({ from: "2024-01-15", to: "2024-01-15" });
  // TODO: Handle 'response' of type MetricsChargebacksResponse
} catch (err) {
  // TODO: Handle 'err' of type Metrics.GetMetricsChargebacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics.getMetricsChargebacks({
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsChargebacksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00 UTC. Must be before or the same as `to`. |
| <code>to</code> | <code>string</code> (date) | Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00 UTC. Must be after or the same as `from`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.getMetricsChargebacks(request)`

- **OnSuccess**: <code>[MetricsChargebacksResponse](src/models/metrics-chargebacks-response.ts)</code>
- **OnError**: throws <code>[Metrics.GetMetricsChargebacksError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.getMetricsChargebacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsChargebacksResponse, Metrics.GetMetricsChargebacksError&gt;</code>, with `result.value` of type <code>[MetricsChargebacksResponse](src/models/metrics-chargebacks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsCheckoutConversion(request: Metrics.GetMetricsCheckoutConversionRequest, options?: RequestOptions): ApiPromise&lt;MetricsCheckoutConversionResponse, Metrics.GetMetricsCheckoutConversionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns timeseries data for checkout conversion in a given date range. Trends have a daily granularity.
The conversion rate for checkouts in the period. A checkout is considered converted when a payment is successfully completed.

When `to` and `from` are the same, returns an empty timeseries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.getMetricsCheckoutConversion({
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type MetricsCheckoutConversionResponse
} catch (err) {
  // TODO: Handle 'err' of type Metrics.GetMetricsCheckoutConversionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics.getMetricsCheckoutConversion({
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsCheckoutConversionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00 UTC. Must be before or the same as `to`. |
| <code>to</code> | <code>string</code> (date) | Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00 UTC. Must be after or the same as `from`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.getMetricsCheckoutConversion(request)`

- **OnSuccess**: <code>[MetricsCheckoutConversionResponse](src/models/metrics-checkout-conversion-response.ts)</code>
- **OnError**: throws <code>[Metrics.GetMetricsCheckoutConversionError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.getMetricsCheckoutConversion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsCheckoutConversionResponse, Metrics.GetMetricsCheckoutConversionError&gt;</code>, with `result.value` of type <code>[MetricsCheckoutConversionResponse](src/models/metrics-checkout-conversion-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsMonthlyRecurringRevenue(request: Metrics.GetMetricsMonthlyRecurringRevenueRequest, options?: RequestOptions): ApiPromise&lt;MetricsMonthlyRecurringRevenueResponse, Metrics.GetMetricsMonthlyRecurringRevenueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns timeseries data for monthly recurring revenue in a given date range. Trends have a daily granularity.
Current monthly recurring revenue total. Includes new subscriptions, upgrades, downgrades and churn. Does not include one-time payments or deductions for Paddle fees.

When `to` and `from` are the same, returns an empty timeseries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.getMetricsMonthlyRecurringRevenue({
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type MetricsMonthlyRecurringRevenueResponse
} catch (err) {
  // TODO: Handle 'err' of type Metrics.GetMetricsMonthlyRecurringRevenueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics.getMetricsMonthlyRecurringRevenue({
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsMonthlyRecurringRevenueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00 UTC. Must be before or the same as `to`. |
| <code>to</code> | <code>string</code> (date) | Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00 UTC. Must be after or the same as `from`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.getMetricsMonthlyRecurringRevenue(request)`

- **OnSuccess**: <code>[MetricsMonthlyRecurringRevenueResponse](src/models/metrics-monthly-recurring-revenue-response.ts)</code>
- **OnError**: throws <code>[Metrics.GetMetricsMonthlyRecurringRevenueError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.getMetricsMonthlyRecurringRevenue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsMonthlyRecurringRevenueResponse, Metrics.GetMetricsMonthlyRecurringRevenueError&gt;</code>, with `result.value` of type <code>[MetricsMonthlyRecurringRevenueResponse](src/models/metrics-monthly-recurring-revenue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsMonthlyRecurringRevenueChange(request: Metrics.GetMetricsMonthlyRecurringRevenueChangeRequest, options?: RequestOptions): ApiPromise&lt;MetricsMonthlyRecurringRevenueChangeResponse, Metrics.GetMetricsMonthlyRecurringRevenueChangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns timeseries data for monthly recurring revenue change in a given date range. Trends have a daily granularity.
Monthly recurring revenue (MRR) change compared to the same time interval last month.

When `to` and `from` are the same, returns an empty timeseries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.getMetricsMonthlyRecurringRevenueChange({
    from: "2024-01-15",
    to: "2024-01-15",
  });
  // TODO: Handle 'response' of type MetricsMonthlyRecurringRevenueChangeResponse
} catch (err) {
  // TODO: Handle 'err' of type Metrics.GetMetricsMonthlyRecurringRevenueChangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics.getMetricsMonthlyRecurringRevenueChange({
  from: "2024-01-15",
  to: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsMonthlyRecurringRevenueChangeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00 UTC. Must be before or the same as `to`. |
| <code>to</code> | <code>string</code> (date) | Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00 UTC. Must be after or the same as `from`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.getMetricsMonthlyRecurringRevenueChange(request)`

- **OnSuccess**: <code>[MetricsMonthlyRecurringRevenueChangeResponse](src/models/metrics-monthly-recurring-revenue-change-response.ts)</code>
- **OnError**: throws <code>[Metrics.GetMetricsMonthlyRecurringRevenueChangeError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.getMetricsMonthlyRecurringRevenueChange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsMonthlyRecurringRevenueChangeResponse, Metrics.GetMetricsMonthlyRecurringRevenueChangeError&gt;</code>, with `result.value` of type <code>[MetricsMonthlyRecurringRevenueChangeResponse](src/models/metrics-monthly-recurring-revenue-change-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsRefunds(request: Metrics.GetMetricsRefundsRequest, options?: RequestOptions): ApiPromise&lt;MetricsRefundsResponse, Metrics.GetMetricsRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns timeseries data for refunds in a given date range. Trends have a daily granularity.
The transaction subtotal (base cost minus discounts excluding taxes and fees) of refunded products returned to the customer. This does not include chargebacks.

When `to` and `from` are the same, returns an empty timeseries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.getMetricsRefunds({ from: "2024-01-15", to: "2024-01-15" });
  // TODO: Handle 'response' of type MetricsRefundsResponse
} catch (err) {
  // TODO: Handle 'err' of type Metrics.GetMetricsRefundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics.getMetricsRefunds({ from: "2024-01-15", to: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsRefundsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00 UTC. Must be before or the same as `to`. |
| <code>to</code> | <code>string</code> (date) | Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00 UTC. Must be after or the same as `from`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.getMetricsRefunds(request)`

- **OnSuccess**: <code>[MetricsRefundsResponse](src/models/metrics-refunds-response.ts)</code>
- **OnError**: throws <code>[Metrics.GetMetricsRefundsError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.getMetricsRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsRefundsResponse, Metrics.GetMetricsRefundsError&gt;</code>, with `result.value` of type <code>[MetricsRefundsResponse](src/models/metrics-refunds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsRevenue(request: Metrics.GetMetricsRevenueRequest, options?: RequestOptions): ApiPromise&lt;MetricsRevenueResponse, Metrics.GetMetricsRevenueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns timeseries data for revenue in a given date range. Trends have a daily granularity.
Net revenue from completed payments (e.g. single purchase, subscription, B2B invoices) after tax & fees have been deducted, but before adjustments such as refunds or chargebacks.

When `to` and `from` are the same, returns an empty timeseries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.getMetricsRevenue({ from: "2024-01-15", to: "2024-01-15" });
  // TODO: Handle 'response' of type MetricsRevenueResponse
} catch (err) {
  // TODO: Handle 'err' of type Metrics.GetMetricsRevenueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics.getMetricsRevenue({ from: "2024-01-15", to: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsRevenueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from</code> | <code>string</code> (date) | Return data from a specific date. Pass an RFC 3339 full-date string. Interpreted at 00:00 UTC. Must be before or the same as `to`. |
| <code>to</code> | <code>string</code> (date) | Return data up to a specific date. Pass an RFC 3339 full-date string. Interpreted as 00:00 UTC. Must be after or the same as `from`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.getMetricsRevenue(request)`

- **OnSuccess**: <code>[MetricsRevenueResponse](src/models/metrics-revenue-response.ts)</code>
- **OnError**: throws <code>[Metrics.GetMetricsRevenueError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.getMetricsRevenue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsRevenueResponse, Metrics.GetMetricsRevenueError&gt;</code>, with `result.value` of type <code>[MetricsRevenueResponse](src/models/metrics-revenue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IpAddresses

> Source: [IpAddresses](src/resources/ip-addresses.ts)

<details>
<summary><code>getIpAddresses(options?: RequestOptions): ApiPromise&lt;IpAddressResponse, IpAddresses.GetIpAddressesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Paddle IP addresses. You can add these IP addresses to your allowlist.

IP addresses returned are for the environment that you're making the request in. For example, making the request to the production base URL returns all production IP addresses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ipAddresses.getIpAddresses();
  // TODO: Handle 'response' of type IpAddressResponse
} catch (err) {
  // TODO: Handle 'err' of type IpAddresses.GetIpAddressesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ipAddresses.getIpAddresses().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IpAddressResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ipAddresses.getIpAddresses()`

- **OnSuccess**: <code>[IpAddressResponse](src/models/ip-address-response.ts)</code>
- **OnError**: throws <code>[IpAddresses.GetIpAddressesError](src/resources/ip-addresses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ipAddresses.getIpAddresses().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IpAddressResponse, IpAddresses.GetIpAddressesError&gt;</code>, with `result.value` of type <code>[IpAddressResponse](src/models/ip-address-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>listEvents(request: Events.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;EventsResponse, Events.ListEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of events that have occurred in the last 90 days. Use the query parameters to page through results.

Events older than 90 days aren't retained.

This is sometimes referred to as "the event stream."

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listEvents();
  // TODO: Handle 'response' of type EventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.ListEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.listEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id` (for `event_id`).<br>**Default**: "id[DESC]" |
| <code>eventType?</code> | <code>[EventTypeName](src/models/event-type-name.ts)[]</code> | Return events that match the specified event type. Use a comma-separated list to specify multiple event types. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.listEvents(request)`

- **OnSuccess**: <code>[EventsResponse](src/models/events-response.ts)</code>
- **OnError**: throws <code>[Events.ListEventsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.listEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsResponse, Events.ListEventsError&gt;</code>, with `result.value` of type <code>[EventsResponse](src/models/events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EventTypes

> Source: [EventTypes](src/resources/event-types.ts)

<details>
<summary><code>listEventTypes(options?: RequestOptions): ApiPromise&lt;EventTypesResponse, EventTypes.ListEventTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of event types.

The response is not paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventTypes.listEventTypes();
  // TODO: Handle 'response' of type EventTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type EventTypes.ListEventTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eventTypes.listEventTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventTypes.listEventTypes()`

- **OnSuccess**: <code>[EventTypesResponse](src/models/event-types-response.ts)</code>
- **OnError**: throws <code>[EventTypes.ListEventTypesError](src/resources/event-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventTypes.listEventTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventTypesResponse, EventTypes.ListEventTypesError&gt;</code>, with `result.value` of type <code>[EventTypesResponse](src/models/event-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Discounts

> Source: [Discounts](src/resources/discounts.ts)

<details>
<summary><code>createDiscount(request: Discounts.CreateDiscountRequest, options?: RequestOptions): ApiPromise&lt;DiscountsResponse1, Discounts.CreateDiscountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new discount.

If successful, your response includes a copy of the new discount entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discounts.createDiscount({
    body: {
      description: "All orders (10% off)",
      enabledForCheckout: true,
      code: "BF10OFF",
      type: DiscountType.Percentage,
      amount: "10",
      recur: true,
      maximumRecurringIntervals: 3,
      expiresAt: new Date(Date.UTC(2024, 11, 3, 0, 0, 0)),
      discountGroupId: "dsg_01js2gqehzccfkywgx1jk2mtsp",
    },
  });
  // TODO: Handle 'response' of type DiscountsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Discounts.CreateDiscountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discounts.createDiscount({
  body: {
    description: "All orders (10% off)",
    enabledForCheckout: true,
    code: "BF10OFF",
    type: DiscountType.Percentage,
    amount: "10",
    recur: true,
    maximumRecurringIntervals: 3,
    expiresAt: new Date(Date.UTC(2024, 11, 3, 0, 0, 0)),
    discountGroupId: "dsg_01js2gqehzccfkywgx1jk2mtsp",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DiscountCreate](src/models/discount-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discounts.createDiscount(request)`

- **OnSuccess**: <code>[DiscountsResponse1](src/models/discounts-response1.ts)</code>
- **OnError**: throws <code>[Discounts.CreateDiscountError](src/resources/discounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discounts.createDiscount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountsResponse1, Discounts.CreateDiscountError&gt;</code>, with `result.value` of type <code>[DiscountsResponse1](src/models/discounts-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDiscount(request: Discounts.GetDiscountRequest, options?: RequestOptions): ApiPromise&lt;DiscountsResponse2, Discounts.GetDiscountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a discount using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discounts.getDiscount({ discountId: "some example string" });
  // TODO: Handle 'response' of type DiscountsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Discounts.GetDiscountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discounts.getDiscount({ discountId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>discountId</code> | <code>string</code> | Paddle ID of the discount entity to work with. |
| <code>include?</code> | <code>[DiscountIncludeEnum](src/models/discount-include-enum.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discounts.getDiscount(request)`

- **OnSuccess**: <code>[DiscountsResponse2](src/models/discounts-response2.ts)</code>
- **OnError**: throws <code>[Discounts.GetDiscountError](src/resources/discounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discounts.getDiscount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountsResponse2, Discounts.GetDiscountError&gt;</code>, with `result.value` of type <code>[DiscountsResponse2](src/models/discounts-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDiscounts(request: Discounts.ListDiscountsRequest, options?: RequestOptions): ApiPromise&lt;DiscountsResponse, Discounts.ListDiscountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of discounts. Use the query parameters to page through results.

By default, Paddle returns discounts that are `active`. Use the `status` query parameter to return discounts that are archived or expired.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discounts.listDiscounts();
  // TODO: Handle 'response' of type DiscountsResponse
} catch (err) {
  // TODO: Handle 'err' of type Discounts.ListDiscountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discounts.listDiscounts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>include?</code> | <code>[DiscountIncludeEnum](src/models/discount-include-enum.ts)[]</code> | Include related entities in the response. Use a comma-separated list to specify multiple entities. |
| <code>code?</code> | <code>string[]</code> | Return entities that match the discount code. Use a comma-separated list to specify multiple discount codes. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `created_at` and `id`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>mode?</code> | <code>[DiscountMode1](src/models/discount-mode1.ts)</code> | Return entities that match the specified mode. |
| <code>discountGroupId?</code> | <code>string[]</code> | Return entities related to the specified discount group. Use a comma-separated list to specify multiple discount group IDs. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discounts.listDiscounts(request)`

- **OnSuccess**: <code>[DiscountsResponse](src/models/discounts-response.ts)</code>
- **OnError**: throws <code>[Discounts.ListDiscountsError](src/resources/discounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discounts.listDiscounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountsResponse, Discounts.ListDiscountsError&gt;</code>, with `result.value` of type <code>[DiscountsResponse](src/models/discounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDiscount(request: Discounts.UpdateDiscountRequest, options?: RequestOptions): ApiPromise&lt;DiscountsResponse1, Discounts.UpdateDiscountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a discount using its ID.

If successful, your response includes a copy of the updated discount entity.

To update a checkout recovery discount, configure your checkout recovery settings in the dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discounts.updateDiscount({
    discountId: "some example string",
    body: {
      code: "NEWCODE",
      restrictTo: ["pro_01gsz4t5hdjse780zja8vvr7jg", "pro_01gsz4s0w61y0pp88528f1wvvb"],
      discountGroupId: "dsg_01js2gqehzccfkywgx1jk2mtsp",
    },
  });
  // TODO: Handle 'response' of type DiscountsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Discounts.UpdateDiscountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discounts.updateDiscount({
  discountId: "some example string",
  body: {
    code: "NEWCODE",
    restrictTo: ["pro_01gsz4t5hdjse780zja8vvr7jg", "pro_01gsz4s0w61y0pp88528f1wvvb"],
    discountGroupId: "dsg_01js2gqehzccfkywgx1jk2mtsp",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>discountId</code> | <code>string</code> | Paddle ID of the discount entity to work with. |
| <code>body</code> | <code>[UpdateDiscount](src/models/update-discount.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discounts.updateDiscount(request)`

- **OnSuccess**: <code>[DiscountsResponse1](src/models/discounts-response1.ts)</code>
- **OnError**: throws <code>[Discounts.UpdateDiscountError](src/resources/discounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discounts.updateDiscount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountsResponse1, Discounts.UpdateDiscountError&gt;</code>, with `result.value` of type <code>[DiscountsResponse1](src/models/discounts-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DiscountGroups

> Source: [DiscountGroups](src/resources/discount-groups.ts)

<details>
<summary><code>createDiscountGroup(request: DiscountGroups.CreateDiscountGroupRequest, options?: RequestOptions): ApiPromise&lt;DiscountGroupsResponse1, DiscountGroups.CreateDiscountGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new discount group.

If successful, your response includes a copy of the new discount group entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discountGroups.createDiscountGroup({ body: { name: "Black Friday 2024" } });
  // TODO: Handle 'response' of type DiscountGroupsResponse1
} catch (err) {
  // TODO: Handle 'err' of type DiscountGroups.CreateDiscountGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discountGroups.createDiscountGroup({
  body: { name: "Black Friday 2024" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountGroupsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DiscountGroupCreate](src/models/discount-group-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discountGroups.createDiscountGroup(request)`

- **OnSuccess**: <code>[DiscountGroupsResponse1](src/models/discount-groups-response1.ts)</code>
- **OnError**: throws <code>[DiscountGroups.CreateDiscountGroupError](src/resources/discount-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discountGroups.createDiscountGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountGroupsResponse1, DiscountGroups.CreateDiscountGroupError&gt;</code>, with `result.value` of type <code>[DiscountGroupsResponse1](src/models/discount-groups-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDiscountGroup(request: DiscountGroups.GetDiscountGroupRequest, options?: RequestOptions): ApiPromise&lt;DiscountGroupsResponse1, DiscountGroups.GetDiscountGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a discount group using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discountGroups.getDiscountGroup({ discountGroupId: "some example string" });
  // TODO: Handle 'response' of type DiscountGroupsResponse1
} catch (err) {
  // TODO: Handle 'err' of type DiscountGroups.GetDiscountGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discountGroups.getDiscountGroup({
  discountGroupId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountGroupsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>discountGroupId</code> | <code>string</code> | Paddle ID of the discount group entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discountGroups.getDiscountGroup(request)`

- **OnSuccess**: <code>[DiscountGroupsResponse1](src/models/discount-groups-response1.ts)</code>
- **OnError**: throws <code>[DiscountGroups.GetDiscountGroupError](src/resources/discount-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discountGroups.getDiscountGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountGroupsResponse1, DiscountGroups.GetDiscountGroupError&gt;</code>, with `result.value` of type <code>[DiscountGroupsResponse1](src/models/discount-groups-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDiscountGroups(request: DiscountGroups.ListDiscountGroupsRequest, options?: RequestOptions): ApiPromise&lt;DiscountGroupsResponse, DiscountGroups.ListDiscountGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of discount groups. Use the query parameters to page through results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discountGroups.listDiscountGroups();
  // TODO: Handle 'response' of type DiscountGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type DiscountGroups.ListDiscountGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discountGroups.listDiscountGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountGroupsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `created_at` and `id`.<br>**Default**: "id[DESC]" |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discountGroups.listDiscountGroups(request)`

- **OnSuccess**: <code>[DiscountGroupsResponse](src/models/discount-groups-response.ts)</code>
- **OnError**: throws <code>[DiscountGroups.ListDiscountGroupsError](src/resources/discount-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discountGroups.listDiscountGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountGroupsResponse, DiscountGroups.ListDiscountGroupsError&gt;</code>, with `result.value` of type <code>[DiscountGroupsResponse](src/models/discount-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDiscountGroup(request: DiscountGroups.UpdateDiscountGroupRequest, options?: RequestOptions): ApiPromise&lt;DiscountGroupsResponse1, DiscountGroups.UpdateDiscountGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a discount group using its ID.

If successful, your response includes a copy of the updated discount group entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discountGroups.updateDiscountGroup({
    discountGroupId: "some example string",
    body: { name: "Cyber Monday 2025" },
  });
  // TODO: Handle 'response' of type DiscountGroupsResponse1
} catch (err) {
  // TODO: Handle 'err' of type DiscountGroups.UpdateDiscountGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discountGroups.updateDiscountGroup({
  discountGroupId: "some example string",
  body: { name: "Cyber Monday 2025" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscountGroupsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>discountGroupId</code> | <code>string</code> | Paddle ID of the discount group entity to work with. |
| <code>body</code> | <code>[DiscountGroupUpdate](src/models/discount-group-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discountGroups.updateDiscountGroup(request)`

- **OnSuccess**: <code>[DiscountGroupsResponse1](src/models/discount-groups-response1.ts)</code>
- **OnError**: throws <code>[DiscountGroups.UpdateDiscountGroupError](src/resources/discount-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discountGroups.updateDiscountGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscountGroupsResponse1, DiscountGroups.UpdateDiscountGroupError&gt;</code>, with `result.value` of type <code>[DiscountGroupsResponse1](src/models/discount-groups-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPortals

> Source: [CustomerPortals](src/resources/customer-portals.ts)

<details>
<summary><code>createCustomerPortalSession(request: CustomerPortals.CreateCustomerPortalSessionRequest, options?: RequestOptions): ApiPromise&lt;CustomersPortalSessionsResponse, CustomerPortals.CreateCustomerPortalSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a customer portal session for a customer.

The [customer portal](https://developer.paddle.com/concepts/customer-portal) is a secure, Paddle-hosted site that allows
customers to manage their own subscriptions, payments, and account information without you having to build custom billing screens.

Customers can:

* View transaction history
* Download invoices
* Update payment methods
* Manage their subscriptions including making changes or cancellations
* Revise details on completed transactions

You can create a customer portal session to generate authenticated links for a customer
so that they're automatically signed in to the portal. It's typically used when linking to
the customer portal from your app where customers are already authenticated.

You can include an array of `subscription_ids` to generate authenticated portal links that let customers make
changes to their subscriptions. You can use these links as part of subscription management workflows rather than
building your own billing screens.

Customer portal sessions are temporary and shouldn't be cached.

The customer portal is fully hosted by Paddle. For security and the best customer experience, don't embed the customer
portal in an iframe.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerPortals.createCustomerPortalSession({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    body: { subscriptionIds: ["sub_01h04vsc0qhwtsbsxh3422wjs4"] },
  });
  // TODO: Handle 'response' of type CustomersPortalSessionsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerPortals.CreateCustomerPortalSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerPortals.createCustomerPortalSession({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  body: { subscriptionIds: ["sub_01h04vsc0qhwtsbsxh3422wjs4"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersPortalSessionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>body</code> | <code>[CustomerPortalSessionCreate](src/models/customer-portal-session-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerPortals.createCustomerPortalSession(request)`

- **OnSuccess**: <code>[CustomersPortalSessionsResponse](src/models/customers-portal-sessions-response.ts)</code>
- **OnError**: throws <code>[CustomerPortals.CreateCustomerPortalSessionError](src/resources/customer-portals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerPortals.createCustomerPortalSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersPortalSessionsResponse, CustomerPortals.CreateCustomerPortalSessionError&gt;</code>, with `result.value` of type <code>[CustomersPortalSessionsResponse](src/models/customers-portal-sessions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomersResponse1, Customers.CreateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer.

If successful, your response includes a copy of the new customer entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomer({
    body: { name: "Jo Brown", email: "jo@example.com" },
  });
  // TODO: Handle 'response' of type CustomersResponse1
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.createCustomer({
  body: { name: "Jo Brown", email: "jo@example.com" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CustomerCreate](src/models/customer-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomer(request)`

- **OnSuccess**: <code>[CustomersResponse1](src/models/customers-response1.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersResponse1, Customers.CreateCustomerError&gt;</code>, with `result.value` of type <code>[CustomersResponse1](src/models/customers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateCustomerAuthenticationToken(request: Customers.GenerateCustomerAuthenticationTokenRequest, options?: RequestOptions): ApiPromise&lt;CustomersAuthTokenResponse, Customers.GenerateCustomerAuthenticationTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates an authentication token for a customer. You can pass a generated authentication token to Paddle.js when opening a checkout to let customers work with saved payment methods.

Authentication tokens are temporary and shouldn't be cached. They're valid until the `expires_at` date returned in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.generateCustomerAuthenticationToken({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  });
  // TODO: Handle 'response' of type CustomersAuthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.GenerateCustomerAuthenticationTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.generateCustomerAuthenticationToken({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersAuthTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.generateCustomerAuthenticationToken(request)`

- **OnSuccess**: <code>[CustomersAuthTokenResponse](src/models/customers-auth-token-response.ts)</code>
- **OnError**: throws <code>[Customers.GenerateCustomerAuthenticationTokenError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.generateCustomerAuthenticationToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersAuthTokenResponse, Customers.GenerateCustomerAuthenticationTokenError&gt;</code>, with `result.value` of type <code>[CustomersAuthTokenResponse](src/models/customers-auth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomersResponse2, Customers.GetCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customer using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomer({ customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys" });
  // TODO: Handle 'response' of type CustomersResponse2
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.getCustomer({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomer(request)`

- **OnSuccess**: <code>[CustomersResponse2](src/models/customers-response2.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersResponse2, Customers.GetCustomerError&gt;</code>, with `result.value` of type <code>[CustomersResponse2](src/models/customers-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCreditBalances(request: Customers.ListCreditBalancesRequest, options?: RequestOptions): ApiPromise&lt;CustomersCreditBalancesResponse, Customers.ListCreditBalancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of credit balances for each currency for a customer. Each balance has three totals:

* `available`: total available to use.
* `reserved`: total temporarily reserved for billed transactions.
* `used`: total amount of credit used.

Credit is added to the `available` total initially. When used, it moves to the `used` total.

The `reserved` total is used when a credit balance is applied to a transaction that's marked as `billed`, like when working with an issued invoice. It's not available for other transactions at this point, but isn't considered `used` until the transaction is completed. If a `billed` transaction is `canceled`, any reserved credit moves back to `available`.

Credit balances are created automatically by Paddle when you take an action that results in Paddle creating a credit for a customer, like making prorated changes to a subscription. An empty `data` array is returned where a customer has no credit balances.

The response is not paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCreditBalances({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  });
  // TODO: Handle 'response' of type CustomersCreditBalancesResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCreditBalancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.listCreditBalances({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersCreditBalancesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>currencyCode?</code> | <code>string[]</code> | Return entities that match the currency code. Use a comma-separated list to specify multiple currency codes. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCreditBalances(request)`

- **OnSuccess**: <code>[CustomersCreditBalancesResponse](src/models/customers-credit-balances-response.ts)</code>
- **OnError**: throws <code>[Customers.ListCreditBalancesError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCreditBalances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersCreditBalancesResponse, Customers.ListCreditBalancesError&gt;</code>, with `result.value` of type <code>[CustomersCreditBalancesResponse](src/models/customers-credit-balances-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise&lt;CustomersResponse, Customers.ListCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of customers. Use the query parameters to page through results.

By default, Paddle returns customers that are `active`. Use the `status` query parameter to return customers that are archived.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomers();
  // TODO: Handle 'response' of type CustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.listCustomers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>email?</code> | <code>string[]</code> | Return entities that exactly match the specified email address. Use a comma-separated list to specify multiple email addresses. Recommended for precise matching of email addresses. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>search?</code> | <code>string</code> | Return entities that match a search query. Searches `id`, `name`, and `email` fields. Use the `email` query parameter for precise matching of email addresses. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomers(request)`

- **OnSuccess**: <code>[CustomersResponse](src/models/customers-response.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomersError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersResponse, Customers.ListCustomersError&gt;</code>, with `result.value` of type <code>[CustomersResponse](src/models/customers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise&lt;CustomersResponse1, Customers.UpdateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a customer using its ID.

If successful, your response includes a copy of the updated customer entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomer({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    body: { name: "Jo Brown-Anderson" },
  });
  // TODO: Handle 'response' of type CustomersResponse1
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpdateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.updateCustomer({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  body: { name: "Jo Brown-Anderson" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>body</code> | <code>[CustomerUpdate](src/models/customer-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomer(request)`

- **OnSuccess**: <code>[CustomersResponse1](src/models/customers-response1.ts)</code>
- **OnError**: throws <code>[Customers.UpdateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersResponse1, Customers.UpdateCustomerError&gt;</code>, with `result.value` of type <code>[CustomersResponse1](src/models/customers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ClientTokens

> Source: [ClientTokens](src/resources/client-tokens.ts)

<details>
<summary><code>createClientToken(request: ClientTokens.CreateClientTokenRequest, options?: RequestOptions): ApiPromise&lt;ClientTokensResponse1, ClientTokens.CreateClientTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new client-side token.

If successful, your response includes a copy of the new client-side token entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientTokens.createClientToken({
    body: {
      name: "Pricing page integration",
      description:
        "Used to display prices and open checkout within our pricing page on our marketing domain.",
    },
  });
  // TODO: Handle 'response' of type ClientTokensResponse1
} catch (err) {
  // TODO: Handle 'err' of type ClientTokens.CreateClientTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientTokens.createClientToken({
  body: {
    name: "Pricing page integration",
    description: "Used to display prices and open checkout within our pricing page on our marketing domain.",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientTokensResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ClientSideTokenCreate](src/models/client-side-token-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientTokens.createClientToken(request)`

- **OnSuccess**: <code>[ClientTokensResponse1](src/models/client-tokens-response1.ts)</code>
- **OnError**: throws <code>[ClientTokens.CreateClientTokenError](src/resources/client-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientTokens.createClientToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientTokensResponse1, ClientTokens.CreateClientTokenError&gt;</code>, with `result.value` of type <code>[ClientTokensResponse1](src/models/client-tokens-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClientToken(request: ClientTokens.GetClientTokenRequest, options?: RequestOptions): ApiPromise&lt;ClientTokensResponse1, ClientTokens.GetClientTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a client-side token using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientTokens.getClientToken({ clientTokenId: "some example string" });
  // TODO: Handle 'response' of type ClientTokensResponse1
} catch (err) {
  // TODO: Handle 'err' of type ClientTokens.GetClientTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientTokens.getClientToken({
  clientTokenId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientTokensResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientTokenId</code> | <code>string</code> | Paddle ID of the client-side token entity. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientTokens.getClientToken(request)`

- **OnSuccess**: <code>[ClientTokensResponse1](src/models/client-tokens-response1.ts)</code>
- **OnError**: throws <code>[ClientTokens.GetClientTokenError](src/resources/client-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientTokens.getClientToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientTokensResponse1, ClientTokens.GetClientTokenError&gt;</code>, with `result.value` of type <code>[ClientTokensResponse1](src/models/client-tokens-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClientTokens(request: ClientTokens.ListClientTokensRequest, options?: RequestOptions): ApiPromise&lt;ClientTokensResponse, ClientTokens.ListClientTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of client-side tokens. Use the query parameters to [page through results](https://developer.paddle.com/api-reference/about/pagination).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientTokens.listClientTokens();
  // TODO: Handle 'response' of type ClientTokensResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientTokens.ListClientTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientTokens.listClientTokens().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientTokensResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[ClientTokensStatusQuery](src/models/client-tokens-status-query.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientTokens.listClientTokens(request)`

- **OnSuccess**: <code>[ClientTokensResponse](src/models/client-tokens-response.ts)</code>
- **OnError**: throws <code>[ClientTokens.ListClientTokensError](src/resources/client-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientTokens.listClientTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientTokensResponse, ClientTokens.ListClientTokensError&gt;</code>, with `result.value` of type <code>[ClientTokensResponse](src/models/client-tokens-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClientToken(request: ClientTokens.UpdateClientTokenRequest, options?: RequestOptions): ApiPromise&lt;ClientTokensResponse1, ClientTokens.UpdateClientTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a client-side token using its ID.

You can revoke a client-side token by changing its `status` to `revoked`. Client-side tokens that are revoked can't be updated to `active`.

If successful, your response includes a copy of the updated client-side token entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientTokens.updateClientToken({
    clientTokenId: "some example string",
    body: { status: ClientTokenStatus.Revoked },
  });
  // TODO: Handle 'response' of type ClientTokensResponse1
} catch (err) {
  // TODO: Handle 'err' of type ClientTokens.UpdateClientTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientTokens.updateClientToken({
  clientTokenId: "some example string",
  body: { status: ClientTokenStatus.Revoked },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientTokensResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientTokenId</code> | <code>string</code> | Paddle ID of the client-side token entity. |
| <code>body</code> | <code>[UpdateClientToken](src/models/update-client-token.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientTokens.updateClientToken(request)`

- **OnSuccess**: <code>[ClientTokensResponse1](src/models/client-tokens-response1.ts)</code>
- **OnError**: throws <code>[ClientTokens.UpdateClientTokenError](src/resources/client-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientTokens.updateClientToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientTokensResponse1, ClientTokens.UpdateClientTokenError&gt;</code>, with `result.value` of type <code>[ClientTokensResponse1](src/models/client-tokens-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Businesses

> Source: [Businesses](src/resources/businesses.ts)

<details>
<summary><code>createBusiness(request: Businesses.CreateBusinessRequest, options?: RequestOptions): ApiPromise&lt;CustomersBusinessesResponse1, Businesses.CreateBusinessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new business for a customer.

If successful, your response includes a copy of the new business entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.businesses.createBusiness({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    body: {
      name: "Uplift Inc.",
      companyNumber: "555775291485",
      taxIdentifier: "555952383",
      contacts: [{ name: "Parker Jones", email: "parker@example.com" }],
    },
  });
  // TODO: Handle 'response' of type CustomersBusinessesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Businesses.CreateBusinessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.businesses.createBusiness({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  body: {
    name: "Uplift Inc.",
    companyNumber: "555775291485",
    taxIdentifier: "555952383",
    contacts: [{ name: "Parker Jones", email: "parker@example.com" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersBusinessesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>body</code> | <code>[BusinessCreate](src/models/business-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.businesses.createBusiness(request)`

- **OnSuccess**: <code>[CustomersBusinessesResponse1](src/models/customers-businesses-response1.ts)</code>
- **OnError**: throws <code>[Businesses.CreateBusinessError](src/resources/businesses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.businesses.createBusiness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersBusinessesResponse1, Businesses.CreateBusinessError&gt;</code>, with `result.value` of type <code>[CustomersBusinessesResponse1](src/models/customers-businesses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBusiness(request: Businesses.GetBusinessRequest, options?: RequestOptions): ApiPromise&lt;CustomersBusinessesResponse1, Businesses.GetBusinessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a business for a customer using its ID and related customer ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.businesses.getBusiness({
    businessId: "some example string",
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  });
  // TODO: Handle 'response' of type CustomersBusinessesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Businesses.GetBusinessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.businesses.getBusiness({
  businessId: "some example string",
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersBusinessesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>businessId</code> | <code>string</code> | Paddle ID of the business entity to work with. |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.businesses.getBusiness(request)`

- **OnSuccess**: <code>[CustomersBusinessesResponse1](src/models/customers-businesses-response1.ts)</code>
- **OnError**: throws <code>[Businesses.GetBusinessError](src/resources/businesses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.businesses.getBusiness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersBusinessesResponse1, Businesses.GetBusinessError&gt;</code>, with `result.value` of type <code>[CustomersBusinessesResponse1](src/models/customers-businesses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBusinesses(request: Businesses.ListBusinessesRequest, options?: RequestOptions): ApiPromise&lt;CustomersBusinessesResponse, Businesses.ListBusinessesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of businesses for a customer. Use the query parameters to page through results.

By default, Paddle returns businesses that are `active`. Use the `status` query parameter to return businesses that are archived.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.businesses.listBusinesses({ customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys" });
  // TODO: Handle 'response' of type CustomersBusinessesResponse
} catch (err) {
  // TODO: Handle 'err' of type Businesses.ListBusinessesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.businesses.listBusinesses({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersBusinessesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>search?</code> | <code>string</code> | Return entities that match a search query. Searches all fields, including contacts, except `status`, `created_at`, and `updated_at`. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.businesses.listBusinesses(request)`

- **OnSuccess**: <code>[CustomersBusinessesResponse](src/models/customers-businesses-response.ts)</code>
- **OnError**: throws <code>[Businesses.ListBusinessesError](src/resources/businesses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.businesses.listBusinesses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersBusinessesResponse, Businesses.ListBusinessesError&gt;</code>, with `result.value` of type <code>[CustomersBusinessesResponse](src/models/customers-businesses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBusiness(request: Businesses.UpdateBusinessRequest, options?: RequestOptions): ApiPromise&lt;CustomersBusinessesResponse1, Businesses.UpdateBusinessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a business for a customer using its ID and related customer ID.

If successful, your response includes a copy of the updated business entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.businesses.updateBusiness({
    businessId: "some example string",
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    body: {
      contacts: [
        { name: "Parker Jones", email: "parker@example.com" },
        { name: "Jo Riley", email: "jo@example.com" },
        { name: "Jesse Garcia", email: "jo@example.com" },
      ],
      customData: {},
    },
  });
  // TODO: Handle 'response' of type CustomersBusinessesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Businesses.UpdateBusinessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.businesses.updateBusiness({
  businessId: "some example string",
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  body: {
    contacts: [
      { name: "Parker Jones", email: "parker@example.com" },
      { name: "Jo Riley", email: "jo@example.com" },
      { name: "Jesse Garcia", email: "jo@example.com" },
    ],
    customData: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersBusinessesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>businessId</code> | <code>string</code> | Paddle ID of the business entity to work with. |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>body</code> | <code>[BusinessUpdate](src/models/business-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.businesses.updateBusiness(request)`

- **OnSuccess**: <code>[CustomersBusinessesResponse1](src/models/customers-businesses-response1.ts)</code>
- **OnError**: throws <code>[Businesses.UpdateBusinessError](src/resources/businesses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.businesses.updateBusiness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersBusinessesResponse1, Businesses.UpdateBusinessError&gt;</code>, with `result.value` of type <code>[CustomersBusinessesResponse1](src/models/customers-businesses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Adjustments

> Source: [Adjustments](src/resources/adjustments.ts)

<details>
<summary><code>createAdjustment(request: Adjustments.CreateAdjustmentRequest, options?: RequestOptions): ApiPromise&lt;AdjustmentsResponse1, Adjustments.CreateAdjustmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an adjustment for one or more transaction items.

You can create adjustments to refund or credit all or part of a transaction and its items:

* Refunds return an amount to a customer's original payment method. You can create refund adjustments for transactions that are `completed`.
* Credits reduce the amount that a customer has to pay for a transaction. You can create credit adjustments for manually-collected transactions that are `billed` or `past_due`.

You can create adjustments to refund transactions that are `completed`, or to reduce the amount to due on manually-collected transactions that are `billed` or `past_due`.
Most refunds for live accounts are created with the status of `pending_approval` until reviewed by Paddle, but [some are automatically approved](https://developer.paddle.com/build/transactions/create-transaction-adjustments#background-refunds). For sandbox accounts, Paddle automatically approves refunds every ten minutes.

Adjustments can apply to some or all items on a transaction. You'll need the Paddle ID of the transaction to create a refund or credit for, along with the Paddle ID of any transaction items (`details.line_items[].id`).

If successful, your response includes a copy of the new adjustment entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adjustments.createAdjustment({
    body: {
      action: AdjustmentAction.Refund,
      transactionId: "txn_01hvcc93znj3mpqt1tenkjb04y",
      reason: "error",
      items: [
        { itemId: "txnitm_01hvcc94b7qgz60qmrqmbm19zw", type: AdjustmentItemType.Partial, amount: "100" },
      ],
    },
  });
  // TODO: Handle 'response' of type AdjustmentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Adjustments.CreateAdjustmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adjustments.createAdjustment({
  body: {
    action: AdjustmentAction.Refund,
    transactionId: "txn_01hvcc93znj3mpqt1tenkjb04y",
    reason: "error",
    items: [{ itemId: "txnitm_01hvcc94b7qgz60qmrqmbm19zw", type: AdjustmentItemType.Partial, amount: "100" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdjustmentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AdjustmentCreate](src/models/adjustment-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adjustments.createAdjustment(request)`

- **OnSuccess**: <code>[AdjustmentsResponse1](src/models/adjustments-response1.ts)</code>
- **OnError**: throws <code>[Adjustments.CreateAdjustmentError](src/resources/adjustments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adjustments.createAdjustment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdjustmentsResponse1, Adjustments.CreateAdjustmentError&gt;</code>, with `result.value` of type <code>[AdjustmentsResponse1](src/models/adjustments-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAdjustmentCreditNote(request: Adjustments.GetAdjustmentCreditNoteRequest, options?: RequestOptions): ApiPromise&lt;AdjustmentsCreditNoteResponse, Adjustments.GetAdjustmentCreditNoteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a link to a credit note PDF for an adjustment.

Credit note PDFs are created for refunds and credits as a record of an adjustment.

The link returned is not a permanent link. It expires after an hour.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adjustments.getAdjustmentCreditNote({ adjustmentId: "some example string" });
  // TODO: Handle 'response' of type AdjustmentsCreditNoteResponse
} catch (err) {
  // TODO: Handle 'err' of type Adjustments.GetAdjustmentCreditNoteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adjustments.getAdjustmentCreditNote({
  adjustmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdjustmentsCreditNoteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>adjustmentId</code> | <code>string</code> | Paddle ID of the adjustment entity to work with. |
| <code>disposition?</code> | <code>[Disposition](src/models/disposition.ts)</code> | Determine whether the generated URL should download the PDF as an attachment saved locally, or open it inline in the browser.<br><br>Default: `attachment`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adjustments.getAdjustmentCreditNote(request)`

- **OnSuccess**: <code>[AdjustmentsCreditNoteResponse](src/models/adjustments-credit-note-response.ts)</code>
- **OnError**: throws <code>[Adjustments.GetAdjustmentCreditNoteError](src/resources/adjustments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adjustments.getAdjustmentCreditNote(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdjustmentsCreditNoteResponse, Adjustments.GetAdjustmentCreditNoteError&gt;</code>, with `result.value` of type <code>[AdjustmentsCreditNoteResponse](src/models/adjustments-credit-note-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAdjustments(request: Adjustments.ListAdjustmentsRequest, options?: RequestOptions): ApiPromise&lt;AdjustmentsResponse, Adjustments.ListAdjustmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of adjustments. Use the query parameters to page through results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adjustments.listAdjustments();
  // TODO: Handle 'response' of type AdjustmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Adjustments.ListAdjustmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adjustments.listAdjustments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdjustmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>action?</code> | <code>[AdjustmentActionQuery](src/models/adjustment-action-query.ts)[]</code> | Return entities for the specified action. Use a comma-separated list to specify multiple action values. |
| <code>customerId?</code> | <code>string[]</code> | Return entities related to the specified customer. Use a comma-separated list to specify multiple customer IDs. |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `10`; Maximum: `50`.<br>**Default**: 10 |
| <code>status?</code> | <code>[AdjustmentStatusQuery](src/models/adjustment-status-query.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>subscriptionId?</code> | <code>string[]</code> | Return entities related to the specified subscription. Use a comma-separated list to specify multiple subscription IDs. |
| <code>transactionId?</code> | <code>string[]</code> | Return entities related to the specified transaction. Use a comma-separated list to specify multiple transaction IDs. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adjustments.listAdjustments(request)`

- **OnSuccess**: <code>[AdjustmentsResponse](src/models/adjustments-response.ts)</code>
- **OnError**: throws <code>[Adjustments.ListAdjustmentsError](src/resources/adjustments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adjustments.listAdjustments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdjustmentsResponse, Adjustments.ListAdjustmentsError&gt;</code>, with `result.value` of type <code>[AdjustmentsResponse](src/models/adjustments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Addresses

> Source: [Addresses](src/resources/addresses.ts)

<details>
<summary><code>createAddress(request: Addresses.CreateAddressRequest, options?: RequestOptions): ApiPromise&lt;CustomersAddressesResponse1, Addresses.CreateAddressError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new address for a customer.

For tax calculation, fraud prevention, and compliance purposes, you must include a `postal_code` when creating addresses for some countries. For example, ZIP codes in the USA and postcodes in the UK. See: [Supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)

If successful, your response includes a copy of the new address entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.addresses.createAddress({
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    body: {
      description: "Head Office",
      firstLine: "4050 Jefferson Plaza, 41st Floor",
      city: "New York",
      postalCode: "10021",
      region: "NY",
      countryCode: CountryCodeSupported.Us,
    },
  });
  // TODO: Handle 'response' of type CustomersAddressesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Addresses.CreateAddressError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.addresses.createAddress({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  body: {
    description: "Head Office",
    firstLine: "4050 Jefferson Plaza, 41st Floor",
    city: "New York",
    postalCode: "10021",
    region: "NY",
    countryCode: CountryCodeSupported.Us,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersAddressesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>body</code> | <code>[AddressCreate](src/models/address-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.addresses.createAddress(request)`

- **OnSuccess**: <code>[CustomersAddressesResponse1](src/models/customers-addresses-response1.ts)</code>
- **OnError**: throws <code>[Addresses.CreateAddressError](src/resources/addresses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.addresses.createAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersAddressesResponse1, Addresses.CreateAddressError&gt;</code>, with `result.value` of type <code>[CustomersAddressesResponse1](src/models/customers-addresses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAddress(request: Addresses.GetAddressRequest, options?: RequestOptions): ApiPromise&lt;CustomersAddressesResponse1, Addresses.GetAddressError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an address for a customer using its ID and related customer ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.addresses.getAddress({
    addressId: "some example string",
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  });
  // TODO: Handle 'response' of type CustomersAddressesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Addresses.GetAddressError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.addresses.getAddress({
  addressId: "some example string",
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersAddressesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>addressId</code> | <code>string</code> | Paddle ID of the address entity to work with. |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.addresses.getAddress(request)`

- **OnSuccess**: <code>[CustomersAddressesResponse1](src/models/customers-addresses-response1.ts)</code>
- **OnError**: throws <code>[Addresses.GetAddressError](src/resources/addresses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.addresses.getAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersAddressesResponse1, Addresses.GetAddressError&gt;</code>, with `result.value` of type <code>[CustomersAddressesResponse1](src/models/customers-addresses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAddresses(request: Addresses.ListAddressesRequest, options?: RequestOptions): ApiPromise&lt;CustomersAddressesResponse, Addresses.ListAddressesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of addresses for a customer. Use the query parameters to page through results.

By default, Paddle returns addresses that are `active`. Use the `status` query parameter to return addresses that are archived.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.addresses.listAddresses({ customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys" });
  // TODO: Handle 'response' of type CustomersAddressesResponse
} catch (err) {
  // TODO: Handle 'err' of type Addresses.ListAddressesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.addresses.listAddresses({
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersAddressesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>id?</code> | <code>string[]</code> | Return only the IDs specified. Use a comma-separated list to get multiple entities. |
| <code>after?</code> | <code>string</code> | Return entities after the specified Paddle ID when working with paginated endpoints. Used in the `meta.pagination.next` URL in responses for list operations. |
| <code>perPage?</code> | <code>number</code> | Set how many entities are returned per page. Paddle returns the maximum number of results if a number greater than the maximum is requested. Check `meta.pagination.per_page` in the response to see how many were returned.<br><br>Default: `50`; Maximum: `200`.<br>**Default**: 50 |
| <code>orderBy?</code> | <code>string</code> | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For example, `?order_by=id[ASC]`.<br><br>Valid fields for ordering: `id`.<br>**Default**: "id[DESC]" |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Return entities that match the specified status. Use a comma-separated list to specify multiple status values. |
| <code>search?</code> | <code>string</code> | Return entities that match a search query. Searches all fields except `status`, `created_at`, and `updated_at`. |
| <code>skipCount?</code> | <code>string</code> | Set to `true` to skip the count query on list operations. When set, `meta.pagination.estimated_total` returns `-1` instead of an exact count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.addresses.listAddresses(request)`

- **OnSuccess**: <code>[CustomersAddressesResponse](src/models/customers-addresses-response.ts)</code>
- **OnError**: throws <code>[Addresses.ListAddressesError](src/resources/addresses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.addresses.listAddresses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersAddressesResponse, Addresses.ListAddressesError&gt;</code>, with `result.value` of type <code>[CustomersAddressesResponse](src/models/customers-addresses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAddress(request: Addresses.UpdateAddressRequest, options?: RequestOptions): ApiPromise&lt;CustomersAddressesResponse1, Addresses.UpdateAddressError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an address for a customer using its ID and related customer ID.

If successful, your response includes a copy of the updated address entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.addresses.updateAddress({
    addressId: "some example string",
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    body: {
      description: "California Office",
      firstLine: "5400 E Washington Drive, Floor 2",
      city: "San Jose",
      region: "CA",
      customData: {},
    },
  });
  // TODO: Handle 'response' of type CustomersAddressesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Addresses.UpdateAddressError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.addresses.updateAddress({
  addressId: "some example string",
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  body: {
    description: "California Office",
    firstLine: "5400 E Washington Drive, Floor 2",
    city: "San Jose",
    region: "CA",
    customData: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersAddressesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>addressId</code> | <code>string</code> | Paddle ID of the address entity to work with. |
| <code>customerId</code> | <code>string</code> | Paddle ID of the customer entity to work with. |
| <code>body</code> | <code>[AddressUpdate](src/models/address-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.addresses.updateAddress(request)`

- **OnSuccess**: <code>[CustomersAddressesResponse1](src/models/customers-addresses-response1.ts)</code>
- **OnError**: throws <code>[Addresses.UpdateAddressError](src/resources/addresses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.addresses.updateAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersAddressesResponse1, Addresses.UpdateAddressError&gt;</code>, with `result.value` of type <code>[CustomersAddressesResponse1](src/models/customers-addresses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PaddleApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

