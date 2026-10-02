import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { ipAddressResponseSchema, type IpAddressResponse } from "../models/ip-address-response.js";
import type { Servers } from "../servers.js";

/**
 * Get Paddle IP addresses.
 */
export class IpAddresses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get Paddle IP addresses
   *
   * @remarks
   * Returns Paddle IP addresses. You can add these IP addresses to your allowlist.
   *
   * IP addresses returned are for the environment that you're making the request in. For example,
   * making the request to the production base URL returns all production IP addresses.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link IpAddresses.GetIpAddressesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIpAddresses(options?: RequestOptions): ApiPromise<IpAddressResponse, IpAddresses.GetIpAddressesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ips"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipAddressResponseSchema },
        errorFactory: IpAddresses.GetIpAddressesError,
      },
      options,
    );
  }
}

export namespace IpAddresses {
  export class GetIpAddressesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetIpAddressesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
