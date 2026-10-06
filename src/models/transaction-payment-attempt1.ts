import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";
import { methodDetails1Schema, type MethodDetails1 } from "./method-details1.js";
import { paymentAttemptStatusSchema, type PaymentAttemptStatus } from "./payment-attempt-status.js";

export type TransactionPaymentAttempt1 = {
  /** UUID for this payment attempt. */
  paymentAttemptId: string;
  /**
   * UUID for the stored payment method used for this payment attempt. Deprecated - use
   * `payment_method_id` instead.
   *
   * @deprecated
   */
  storedPaymentMethodId: string;
  /** Paddle ID of the payment method used for this payment attempt, prefixed with `paymtd_`. */
  paymentMethodId?: string | null;
  /** Amount for collection in the lowest denomination of a currency (e.g. cents for USD). */
  amount: string;
  /** Status of this payment attempt. */
  status: PaymentAttemptStatus;
  /** Reason why a payment attempt failed. Returns `null` if payment captured successfully. */
  errorCode?: ErrorCode | null;
  /** Information about the payment method used for a payment attempt. */
  methodDetails: MethodDetails1;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /**
   * RFC 3339 datetime string of when this payment was captured. `null` if `status` is not
   * `captured`.
   */
  capturedAt?: Date | null;
};

export const transactionPaymentAttempt1Schema: Schema<TransactionPaymentAttempt1> =
  s.object<TransactionPaymentAttempt1>({
    paymentAttemptId: s.string(),
    storedPaymentMethodId: s.string(),
    paymentMethodId: s.optionalNullable(s.string()),
    amount: s.string(),
    status: paymentAttemptStatusSchema,
    errorCode: s.optionalNullable(s.lazy(() => errorCodeSchema)),
    methodDetails: methodDetails1Schema,
    createdAt: s.dateTime(),
    capturedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      paymentAttemptId: "payment_attempt_id",
      storedPaymentMethodId: "stored_payment_method_id",
      paymentMethodId: "payment_method_id",
      errorCode: "error_code",
      methodDetails: "method_details",
      createdAt: "created_at",
      capturedAt: "captured_at",
    },
  });
