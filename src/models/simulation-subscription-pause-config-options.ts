import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  SimulationConfigSubscriptionPauseOptionsEffectiveFrom,
  simulationConfigSubscriptionPauseOptionsEffectiveFromSchema,
} from "./simulation-config-subscription-pause-options-effective-from.js";

/** Options that determine which webhooks are sent as part of a simulation. */
export type SimulationSubscriptionPauseConfigOptions = {
  /**
   * Determines which webhooks are sent based on when the subscription is paused or canceled. If
   * omitted, defaults to `immediately`.
   *
   * @default SimulationConfigSubscriptionPauseOptionsEffectiveFrom.Immediately
   */
  effectiveFrom?: SimulationConfigSubscriptionPauseOptionsEffectiveFrom;
  /**
   * Whether a simulated subscription has a past due transaction (`true`) or not (`false`), which
   * determines whether events occur for canceling past due transactions. If omitted, defaults to
   * `false`.
   *
   * @default false
   */
  hasPastDueTransaction?: boolean;
};

export const simulationSubscriptionPauseConfigOptionsSchema: Schema<SimulationSubscriptionPauseConfigOptions> =
  s.object<SimulationSubscriptionPauseConfigOptions>({
    effectiveFrom: s.defaulted(
      simulationConfigSubscriptionPauseOptionsEffectiveFromSchema,
      SimulationConfigSubscriptionPauseOptionsEffectiveFrom.Immediately,
    ),
    hasPastDueTransaction: s.defaulted(s.boolean(), false),
    _keysMap: {
      effectiveFrom: "effective_from",
      hasPastDueTransaction: "has_past_due_transaction",
    },
  });
