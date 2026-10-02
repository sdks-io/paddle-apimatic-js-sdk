import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reason why a payment attempt failed. Returns `null` if payment captured successfully. */
export const ErrorCode = {
  /**
   * "already_canceled": { "description": "Cancellation not possible because the amount has already
   * been canceled. Not typically returned for payments." }
   */
  AlreadyCanceled: "already_canceled",
  /**
   * "already_refunded": { "description": "Refund is not possible because the amount has already
   * been refunded. Not typically returned for payments." }
   */
  AlreadyRefunded: "already_refunded",
  /**
   * "authentication_failed": { "description": "Payment required a 3DS2 authentication challenge.
   * The customer completed the challenge but was not successful." }
   */
  AuthenticationFailed: "authentication_failed",
  /**
   * "blocked_card": { "description": "Payment method issuer has indicated that the card cannot be
   * used as it is frozen, lost, damaged, or stolen." }
   */
  BlockedCard: "blocked_card",
  /**
   * "canceled": { "description": "Customer has requested that the mandate for recurring payments be
   * canceled." }
   */
  Canceled: "canceled",
  /**
   * "declined": { "description": "Payment method has been declined, with no other information
   * returned." }
   */
  Declined: "declined",
  /**
   * "declined_not_retryable": { "description": "Payment method has been declined, and the issuer
   * has indicated that it should not be retried. This could mean the account is closed or the
   * customer revoked authorization to charge the payment method." }
   */
  DeclinedNotRetryable: "declined_not_retryable",
  /**
   * "expired_card": { "description": "Payment method issuer has indicated that this card is
   * expired. Expired cards may also return `invalid_payment_details`, depending on how a payment is
   * routed." }
   */
  ExpiredCard: "expired_card",
  /**
   * "fraud": { "description": "Payment method issuer or payment service provider flagged this
   * payment as potentially fraudulent." }
   */
  Fraud: "fraud",
  /**
   * "invalid_amount": { "description": "Payment method issuer or payment service provider cannot
   * process a payment that is this high or low." }
   */
  InvalidAmount: "invalid_amount",
  /**
   * "invalid_payment_details": { "description": "Payment service provider has indicated the payment
   * method isn't valid. This typically means that it's expired. `expired_card` is returned by the
   * payment method issuer, rather than the payment service provider." }
   */
  InvalidPaymentDetails: "invalid_payment_details",
  /**
   * "issuer_unavailable": { "description": "Payment service provider couldn't reach the payment
   * method issuer." }
   */
  IssuerUnavailable: "issuer_unavailable",
  /**
   * "not_enough_balance": { "description": "Payment method declined because of insufficient funds,
   * or fund limits being reached." }
   */
  NotEnoughBalance: "not_enough_balance",
  /**
   * "preferred_network_not_supported": { "description": "Payment method has been declined because
   * the network scheme that the customer selected isn't supported by the payment service provider."
   * }
   */
  PreferredNetworkNotSupported: "preferred_network_not_supported",
  /**
   * "prepaid_card_not_supported": { "description": "Payment method has been declined because it's a
   * prepaid card and prepaid cards are blocked on this Paddle account." }
   */
  PrepaidCardNotSupported: "prepaid_card_not_supported",
  /**
   * "psp_error": { "description": "Something went wrong with the payment service provider, with no
   * other information returned." }
   */
  PspError: "psp_error",
  /**
   * "redacted_payment_method": { "description": "Payment service provider didn't receive payment
   * method information as they've been redacted." }
   */
  RedactedPaymentMethod: "redacted_payment_method",
  /**
   * "system_error": { "description": "Something went wrong with the Paddle platform. Try again
   * later, or check status.paddle.com." }
   */
  SystemError: "system_error",
  /**
   * "transaction_not_permitted": { "description": "Payment method issuer doesn't allow this kind of
   * payment because of limits on the account, or legal or compliance reasons." }
   */
  TransactionNotPermitted: "transaction_not_permitted",
  /**
   * "unknown": { "description": "Payment attempt unsuccessful, with no other information returned."
   * }
   */
  Unknown: "unknown",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
