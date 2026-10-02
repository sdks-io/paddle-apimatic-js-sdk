import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { catalogTypeSchema, type CatalogType } from "../models/catalog-type.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { productCreateSchema, type ProductCreate } from "../models/product-create.js";
import { productIncludeEnumSchema, type ProductIncludeEnum } from "../models/product-include-enum.js";
import { productUpdateSchema, type ProductUpdate } from "../models/product-update.js";
import { productsResponseSchema, type ProductsResponse } from "../models/products-response.js";
import { productsResponse1Schema, type ProductsResponse1 } from "../models/products-response1.js";
import { productsResponse2Schema, type ProductsResponse2 } from "../models/products-response2.js";
import { statusSchema, type Status } from "../models/status.js";
import { taxCategory1Schema, type TaxCategory1 } from "../models/tax-category1.js";
import type { Servers } from "../servers.js";

/**
 * Product entities describe the items that customers can purchase. They hold high-level product
 * attributes.
 */
export class Products {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a product
   *
   * @remarks
   * Creates a new product.
   *
   * Paddle does not upload product images to a CDN. For `image_url`, you should host images on an
   * HTTPS server that's publicly accessible. We recommend using square images (`1:1` ratio).
   *
   * If successful, your response includes a copy of the new product entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Products.CreateProductError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProduct(
    request: Products.CreateProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductsResponse1, Products.CreateProductError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/products"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: productCreateSchema },
      },
      {
        success: { kind: "json", schema: productsResponse1Schema },
        errorFactory: Products.CreateProductError,
      },
      options,
    );
  }

  /**
   * Get a product
   *
   * @remarks
   * Returns a product using its ID.
   *
   * Use the `include` parameter to include related price entities in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Products.GetProductError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProduct(
    request: Products.GetProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductsResponse2, Products.GetProductError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "product_id", value: request.productId, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => productIncludeEnumSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productsResponse2Schema },
        errorFactory: Products.GetProductError,
      },
      options,
    );
  }

  /**
   * List products
   *
   * @remarks
   * Returns a paginated list of products. Use the query parameters to page through results.
   *
   * By default, Paddle returns products that are `active`. Use the `status` query parameter to
   * return products that are archived.
   *
   * Use the `include` parameter to include related price entities in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Products.ListProductsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProducts(
    request: Products.ListProductsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductsResponse, Products.ListProductsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => productIncludeEnumSchema))),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => statusSchema))) },
          {
            name: "tax_category",
            value: request.taxCategory,
            schema: s.optional(s.array(s.lazy(() => taxCategory1Schema))),
          },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => catalogTypeSchema)) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productsResponseSchema },
        errorFactory: Products.ListProductsError,
      },
      options,
    );
  }

  /**
   * Update a product
   *
   * @remarks
   * Updates a product using its ID.
   *
   * Paddle does not upload product images to a CDN. For `image_url`, you should host images on an
   * HTTPS server that's publicly accessible. We recommend using square images (`1:1` ratio).
   *
   * If successful, your response includes a copy of the updated product entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Products.UpdateProductError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProduct(
    request: Products.UpdateProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductsResponse1, Products.UpdateProductError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/products/{product_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "product_id", value: request.productId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: productUpdateSchema },
      },
      {
        success: { kind: "json", schema: productsResponse1Schema },
        errorFactory: Products.UpdateProductError,
      },
      options,
    );
  }
}

export namespace Products {
  export type CreateProductRequest = {
    body: ProductCreate;
  };

  export class CreateProductError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateProductError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProductRequest = {
    /** Paddle ID of the product entity to work with. */
    productId: string;
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: ProductIncludeEnum[];
  };

  export class GetProductError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetProductError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListProductsRequest = {
    /** Return only the IDs specified. Use a comma-separated list to get multiple entities. */
    id?: string[];
    /**
     * Return entities after the specified Paddle ID when working with paginated endpoints. Used in
     * the `meta.pagination.next` URL in responses for list operations.
     */
    after?: string;
    /**
     * Set how many entities are returned per page. Paddle returns the maximum number of results if
     * a number greater than the maximum is requested. Check `meta.pagination.per_page` in the
     * response to see how many were returned.
     *
     * Default: `50`; Maximum: `200`.
     *
     * @default 50
     */
    perPage?: number;
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: ProductIncludeEnum[];
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `created_at`, `custom_data`, `description`, `id`, `image_url`,
     * `name`, `status`, `tax_category`, and `updated_at`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /**
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: Status[];
    /**
     * Return entities that match the specified tax category. Use a comma-separated list to specify
     * multiple tax categories.
     */
    taxCategory?: TaxCategory1[];
    /** Return items that match the specified type. */
    type?: CatalogType;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListProductsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListProductsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateProductRequest = {
    /** Paddle ID of the product entity to work with. */
    productId: string;
    body: ProductUpdate;
  };

  export class UpdateProductError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateProductError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
