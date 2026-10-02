import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Where the entry originated from. */
export const ActionSource = {
  /** "system": { "description": "Entry originated from an internal system process." } */
  System: "system",
  /** "api": { "description": "Entry originated from the Paddle API." } */
  Api: "api",
  /** "dashboard": { "description": "Entry originated from the dashboard." } */
  Dashboard: "dashboard",
  /** "customer_portal": { "description": "Entry originated from the customer portal." } */
  CustomerPortal: "customer_portal",
  /** "support_bot": { "description": "Entry originated from Paddle.net." } */
  SupportBot: "support_bot",
  /** "retain": { "description": "Entry originated from Paddle Retain." } */
  Retain: "retain",
  /** "checkout": { "description": "Entry originated from Paddle Checkout." } */
  Checkout: "checkout",
  /**
   * "external_provider": { "description": "Entry originated from an import from an external
   * provider." }
   */
  ExternalProvider: "external_provider",
  /** "paddle_classic": { "description": "Entry originated from an import from Paddle Classic." } */
  PaddleClassic: "paddle_classic",
  /**
   * "unknown": { "description": "Entry happened before history recording began. Its source couldn't
   * be determined." }
   */
  Unknown: "unknown",
} as const;
export type ActionSource = (typeof ActionSource)[keyof typeof ActionSource] | (string & {});

export const actionSourceSchema: EnumSchema<ActionSource> = s.enumOf<ActionSource>(ActionSource);
