import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigOptionsPaymentDunningExhaustedActionSchema,
  type SimulationConfigOptionsPaymentDunningExhaustedAction,
} from "./simulation-config-options-payment-dunning-exhausted-action.js";
import {
  SimulationConfigOptionsPaymentPaymentOutcome,
  simulationConfigOptionsPaymentPaymentOutcomeSchema,
} from "./simulation-config-options-payment-payment-outcome.js";

/** Options to configure simulations based on the payment outcome. */
export type PaymentOutcomeOptions = {
  /**
   * Determines which webhooks are sent based on the outcome of the payment. If omitted, defaults to
   * `success`.
   *
   * @default SimulationConfigOptionsPaymentPaymentOutcome.Success
   */
  paymentOutcome?: SimulationConfigOptionsPaymentPaymentOutcome;
  /**
   * Determines which webhooks are sent based on what happens to the subscription when payment
   * recovery attempts are exhausted. Only applies when `payment_outcome` is `failed`. If omitted,
   * defaults to `null`.
   */
  dunningExhaustedAction?: SimulationConfigOptionsPaymentDunningExhaustedAction | null;
};

export const paymentOutcomeOptionsSchema: Schema<PaymentOutcomeOptions> = s.object<PaymentOutcomeOptions>({
  paymentOutcome: s.defaulted(
    simulationConfigOptionsPaymentPaymentOutcomeSchema,
    SimulationConfigOptionsPaymentPaymentOutcome.Success,
  ),
  dunningExhaustedAction: s.optionalNullable(
    s.lazy(() => simulationConfigOptionsPaymentDunningExhaustedActionSchema),
  ),
  _keysMap: {
    paymentOutcome: "payment_outcome",
    dunningExhaustedAction: "dunning_exhausted_action",
  },
});
