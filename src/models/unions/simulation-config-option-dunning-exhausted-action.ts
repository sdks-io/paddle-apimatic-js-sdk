import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  simulationConfigOptionsPaymentDunningExhaustedActionSchema,
  type SimulationConfigOptionsPaymentDunningExhaustedAction,
} from "../simulation-config-options-payment-dunning-exhausted-action.js";

/**
 * Determines which webhooks are sent based on what happens to the subscription when payment
 * recovery attempts are exhausted. Only applies when `payment_outcome` is `failed`. If omitted,
 * defaults to `null`.
 */
export type SimulationConfigOptionDunningExhaustedAction =
  SimulationConfigOptionsPaymentDunningExhaustedAction;

export const simulationConfigOptionDunningExhaustedActionSchema: Schema<SimulationConfigOptionDunningExhaustedAction> =
  s.of<SimulationConfigOptionDunningExhaustedAction>(
    s.union([s.lazy(() => simulationConfigOptionsPaymentDunningExhaustedActionSchema)]),
  );
