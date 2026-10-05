import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiKeyExposureActionTakenSchema,
  type ApiKeyExposureActionTaken,
} from "./api-key-exposure-action-taken.js";
import { apiKeyExposureLevelSchema, type ApiKeyExposureLevel } from "./api-key-exposure-level.js";

/** New or changed entity. */
export type Data5 = {
  /** Unique Paddle ID for this API key exposure entity, prefixed with `apkexp_`. */
  id: string;
  /** Unique Paddle ID for this API key entity, prefixed with `apikey_`. */
  apiKeyId: string;
  /** Risk level of this exposure. */
  riskLevel: ApiKeyExposureLevel;
  /** Action performed by Paddle as a result of this exposure. */
  actionTaken: ApiKeyExposureActionTaken;
  /** Source of this exposure. @default "github" */
  source?: "github";
  /** Reference or identifier for this exposure. */
  reference: string;
  description: string | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
};

export const data5Schema: Schema<Data5> = s.object<Data5>({
  id: s.string(),
  apiKeyId: s.string(),
  riskLevel: apiKeyExposureLevelSchema,
  actionTaken: apiKeyExposureActionTakenSchema,
  source: s.defaulted(s.literal("github"), "github"),
  reference: s.string(),
  description: s.nullable(s.string()),
  createdAt: s.dateTime(),
  _keysMap: {
    apiKeyId: "api_key_id",
    riskLevel: "risk_level",
    actionTaken: "action_taken",
    createdAt: "created_at",
  },
});
