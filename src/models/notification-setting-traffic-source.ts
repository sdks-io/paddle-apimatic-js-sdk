import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Paddle should deliver real platform events, simulation events or both to this
 * notification destination.
 */
export const NotificationSettingTrafficSource = {
  /**
   * "platform": { "description": "Deliver real platform events to this notification destination." }
   */
  Platform: "platform",
  /**
   * "simulation": { "description": "Deliver simulation events to this notification destination." }
   */
  Simulation: "simulation",
  /**
   * "all": { "description": "Deliver platform and simulation events to this notification
   * destination." }
   */
  All: "all",
} as const;
export type NotificationSettingTrafficSource =
  | (typeof NotificationSettingTrafficSource)[keyof typeof NotificationSettingTrafficSource]
  | (string & {});

export const notificationSettingTrafficSourceSchema: EnumSchema<NotificationSettingTrafficSource> =
  s.enumOf<NotificationSettingTrafficSource>(NotificationSettingTrafficSource);
