import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Action performed by Paddle as a result of this exposure. */
export const ApiKeyExposureActionTaken = {
  /** "revoked": { "description": "API Key Exposure led to a revocation." } */
  Revoked: "revoked",
  /** "none": { "description": "API Key Exposure resulted in no action." } */
  None: "none",
} as const;
export type ApiKeyExposureActionTaken =
  | (typeof ApiKeyExposureActionTaken)[keyof typeof ApiKeyExposureActionTaken]
  | (string & {});

export const apiKeyExposureActionTakenSchema: EnumSchema<ApiKeyExposureActionTaken> =
  s.enumOf<ApiKeyExposureActionTaken>(ApiKeyExposureActionTaken);
