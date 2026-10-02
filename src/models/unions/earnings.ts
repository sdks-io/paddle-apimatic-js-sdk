import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Total earnings for this transaction. This is the total minus the Paddle fee. `null` until the
 * transaction is `completed` and the fee is processed.
 */
export type Earnings = string;

export const earningsSchema: Schema<Earnings> = s.of<Earnings>(s.union([s.string()]));
