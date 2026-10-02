import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this API key. */
export const ApiKeyStatus = {
  Active: "active",
  Expired: "expired",
  Revoked: "revoked",
} as const;
export type ApiKeyStatus = (typeof ApiKeyStatus)[keyof typeof ApiKeyStatus] | (string & {});

export const apiKeyStatusSchema: EnumSchema<ApiKeyStatus> = s.enumOf<ApiKeyStatus>(ApiKeyStatus);
