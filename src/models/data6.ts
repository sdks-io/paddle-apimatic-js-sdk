import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiKeyStatusSchema, type ApiKeyStatus } from "./api-key-status.js";
import { permissionSchema, type Permission } from "./permission.js";
import { description15Schema, type Description15 } from "./unions/description15.js";
import { expiresAt11Schema, type ExpiresAt11 } from "./unions/expires-at11.js";
import { exposedAtSchema, type ExposedAt } from "./unions/exposed-at.js";
import { lastUsedAtSchema, type LastUsedAt } from "./unions/last-used-at.js";

/** New or changed entity. */
export type Data6 = {
  /** Unique Paddle ID for this API key entity, prefixed with `apikey_`. */
  id: string;
  /** Short name of this API key. Typically unique and human-identifiable. */
  name: string;
  /**
   * Short description of this API key. Typically gives details about what the API key is used for
   * and where it's used.
   */
  description: Description15;
  /** An obfuscated version of this API key, prefixed with `pdl_` and containing `_apikey_ `. */
  key: string;
  /** Status of this API key. */
  status: ApiKeyStatus;
  /** Permissions assigned to this API key. Determines what actions the API key can perform. */
  permissions: Permission[];
  /** RFC 3339 datetime string of when this API key was first exposed. `null` if never exposed. */
  exposedAt: ExposedAt;
  /** RFC 3339 datetime string of when this API key expires. */
  expiresAt: ExpiresAt11;
  /**
   * RFC 3339 datetime string of when this API key was last used (accurate to within 1 hour). `null`
   * if never used.
   */
  lastUsedAt: LastUsedAt;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const data6Schema: Schema<Data6> = s.object<Data6>({
  id: s.string(),
  name: s.string(),
  description: description15Schema,
  key: s.string(),
  status: apiKeyStatusSchema,
  permissions: s.array(s.lazy(() => permissionSchema)),
  exposedAt: exposedAtSchema,
  expiresAt: expiresAt11Schema,
  lastUsedAt: lastUsedAtSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    exposedAt: "exposed_at",
    expiresAt: "expires_at",
    lastUsedAt: "last_used_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
