import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Total earnings for this transaction. This is the total minus the Paddle fee. `null` until the
 * transaction is `completed` and the fee is processed.
 */
export type Earnings1 = string;

export const earnings1Schema: Schema<Earnings1> = s.of<Earnings1>(s.union([s.string()]));
