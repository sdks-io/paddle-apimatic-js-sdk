import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSourceSchema, type ActionSource } from "./action-source.js";
import { actorSchema, type Actor } from "./actor.js";
import {
  subscriptionHistoryReasonSchema,
  type SubscriptionHistoryReason,
} from "./subscription-history-reason.js";
import {
  subscriptionHistoryDetailSchema,
  type SubscriptionHistoryDetail,
} from "./unions/subscription-history-detail.js";

/** Represents a subscription history entry. */
export type SubscriptionHistory = {
  /** Unique Paddle ID for this subscription history entry, prefixed with `subhis_`. */
  id: string;
  /**
   * Unique Paddle ID for this subscription history group, prefixed with `subhisgrp_`. History
   * entries that occurred as part of the same request share the same group ID.
   */
  groupId: string;
  /** Paddle ID of the subscription that this history entry relates to, prefixed with `sub_`. */
  subscriptionId: string;
  /** RFC 3339 datetime string of when the entry happened. */
  occurredAt: Date;
  /** Where the entry originated from. */
  source: ActionSource;
  /** Details about the actor that performed the action that created this entry. */
  actor: Actor;
  /** Why the entry was created. Only applicable to certain actions; `null` otherwise. */
  reason?: SubscriptionHistoryReason | null;
  /** Details specific to the action. The fields returned depend on the value of `action`. */
  detail: SubscriptionHistoryDetail;
};

export const subscriptionHistorySchema: Schema<SubscriptionHistory> = s.object<SubscriptionHistory>({
  id: s.string(),
  groupId: s.string(),
  subscriptionId: s.string(),
  occurredAt: s.dateTime(),
  source: actionSourceSchema,
  actor: actorSchema,
  reason: s.optionalNullable(s.lazy(() => subscriptionHistoryReasonSchema)),
  detail: subscriptionHistoryDetailSchema,
  _keysMap: {
    groupId: "group_id",
    subscriptionId: "subscription_id",
    occurredAt: "occurred_at",
  },
});
