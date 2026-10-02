import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether this entity can be used in Paddle. */
export const Status = {
  /** "active": { "description": "Entity is active and can be used." } */
  Active: "active",
  /** "archived": { "description": "Entity is archived, so can't be used." } */
  Archived: "archived",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
