import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionCreationConfigForItemsSchema,
  type SubscriptionCreationConfigForItems,
} from "../subscription-creation-config-for-items.js";
import {
  subscriptionCreationConfigForTransactionSchema,
  type SubscriptionCreationConfigForTransaction,
} from "../subscription-creation-config-for-transaction.js";
import {
  subscriptionCreationConfigWithoutPricesSchema,
  type SubscriptionCreationConfigWithoutPrices,
} from "../subscription-creation-config-without-prices.js";

/** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
export type SimulationSubscriptionCreationConfigEntitiesCreate =
  | SubscriptionCreationConfigWithoutPrices
  | SubscriptionCreationConfigForItems
  | SubscriptionCreationConfigForTransaction;

export const simulationSubscriptionCreationConfigEntitiesCreateSchema: Schema<SimulationSubscriptionCreationConfigEntitiesCreate> =
  s.of<SimulationSubscriptionCreationConfigEntitiesCreate>(
    s.union([
      s.lazy(() => subscriptionCreationConfigWithoutPricesSchema),
      s.lazy(() => subscriptionCreationConfigForItemsSchema),
      s.lazy(() => subscriptionCreationConfigForTransactionSchema),
    ]),
  );
