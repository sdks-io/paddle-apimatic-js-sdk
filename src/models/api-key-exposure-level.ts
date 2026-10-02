import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Risk level of this exposure. */
export const ApiKeyExposureLevel = {
  /** "high": { "description": "API Key Exposure is high risk." } */
  High: "high",
  /** "low": { "description": "API Key Exposure is low risk." } */
  Low: "low",
} as const;
export type ApiKeyExposureLevel =
  | (typeof ApiKeyExposureLevel)[keyof typeof ApiKeyExposureLevel]
  | (string & {});

export const apiKeyExposureLevelSchema: EnumSchema<ApiKeyExposureLevel> =
  s.enumOf<ApiKeyExposureLevel>(ApiKeyExposureLevel);
