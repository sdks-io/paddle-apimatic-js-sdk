import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Requests are authenticated with API keys. Provide your API key as a Bearer token in the
   * Authorization header.
   *
   * API keys are assigned permissions, granting them access to entities and operations. Each
   * endpoint may require one or more permissions, defined with the `x-permissions` extension.
   * Values for include parameters may require specific permissions as defined in the
   * `x-enum-permissions` extension. See all available permissions in the apikey-permission schema
   * or [documentation](https://developer.paddle.com/api-reference/about/permissions).
   *
   * Get an API key and select the permissions you need from the Paddle dashboard under [Paddle >
   * Developer Tools > Authentication](https://vendors.paddle.com/authentication).
   */
  readonly bearerAuth?: TokenProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Sandbox;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
