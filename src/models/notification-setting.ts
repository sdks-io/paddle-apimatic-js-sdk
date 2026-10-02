import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import {
  notificationSettingTrafficSourceSchema,
  type NotificationSettingTrafficSource,
} from "./notification-setting-traffic-source.js";
import { notificationSettingTypeSchema, type NotificationSettingType } from "./notification-setting-type.js";

/** Represents a notification destination. */
export type NotificationSetting = {
  id: string;
  /** Short description for this notification destination. Shown in the Paddle dashboard. */
  description: string;
  /** Where notifications should be sent for this destination. */
  type: NotificationSettingType;
  /** Webhook endpoint URL or email address. */
  destination: string;
  /** Whether Paddle should try to deliver events to this notification destination. @default true */
  active?: boolean;
  /**
   * API version that returned objects for events should conform to. Must be a valid version of the
   * Paddle API. Can't be a version older than your account default.
   */
  apiVersion: number;
  /**
   * Whether potentially sensitive fields should be sent to this notification destination.
   *
   * @default false
   */
  includeSensitiveFields?: boolean;
  /** Subscribed events for this notification destination. */
  subscribedEvents: EventType[];
  /**
   * Webhook destination secret key, prefixed with `pdl_ntfset_`. Used for signature verification.
   */
  endpointSecretKey: string;
  /**
   * Whether Paddle should deliver real platform events, simulation events or both to this
   * notification destination.
   */
  trafficSource: NotificationSettingTrafficSource;
};

export const notificationSettingSchema: Schema<NotificationSetting> = s.object<NotificationSetting>({
  id: s.string(),
  description: s.string(),
  type: notificationSettingTypeSchema,
  destination: s.string(),
  active: s.defaulted(s.boolean(), true),
  apiVersion: s.number(),
  includeSensitiveFields: s.defaulted(s.boolean(), false),
  subscribedEvents: s.array(s.lazy(() => eventTypeSchema)),
  endpointSecretKey: s.string(),
  trafficSource: notificationSettingTrafficSourceSchema,
  _keysMap: {
    apiVersion: "api_version",
    includeSensitiveFields: "include_sensitive_fields",
    subscribedEvents: "subscribed_events",
    endpointSecretKey: "endpoint_secret_key",
    trafficSource: "traffic_source",
  },
});
