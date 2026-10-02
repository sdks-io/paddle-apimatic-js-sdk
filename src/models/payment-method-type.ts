import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of payment method used for this payment attempt. */
export const PaymentMethodType = {
  /** "alipay": { "description": "Alipay, popular in China." } */
  Alipay: "alipay",
  /** "apple_pay": { "description": "Apple Pay on a supported Apple device." } */
  ApplePay: "apple_pay",
  /** "bancontact": { "description": "Bancontact, popular in Belgium." } */
  Bancontact: "bancontact",
  /** "blik": { "description": "BLIK, a popular payment method in Poland." } */
  Blik: "blik",
  /** "card": { "description": "Credit or debit card." } */
  Card: "card",
  /**
   * "google_pay": { "description": "Google Pay on a supported Android device, Chromebook, or Google
   * Chrome browser." }
   */
  GooglePay: "google_pay",
  /** "ideal": { "description": "iDEAL, popular in the Netherlands." } */
  Ideal: "ideal",
  /** "kakao_pay": { "description": "Kakao Pay, a popular payment method in Korea." } */
  KakaoPay: "kakao_pay",
  /**
   * "korea_local": { "description": "Korean payment methods, which includes over 20 payment options
   * for the Korean market. Check `underlying_payment_method.korea_local` for information about the
   * Korean payment method used to pay.", "deprecated": true }
   */
  KoreaLocal: "korea_local",
  /** "south_korea_local_card": { "description": "Korean local credit or debit card." } */
  SouthKoreaLocalCard: "south_korea_local_card",
  /** "mb_way": { "description": "MB WAY, a popular payment method in Portugal." } */
  MbWay: "mb_way",
  /** "naver_pay": { "description": "Naver Pay, a popular payment method in Korea." } */
  NaverPay: "naver_pay",
  /** "paypal": { "description": "PayPal." } */
  Offline: "offline",
  /** "offline": { "description": "Payment recorded offline." } */
  Payco: "payco",
  /** "payco": { "description": "Payco, a popular payment method in Korea." } */
  Paypal: "paypal",
  /** "pix": { "description": "Pix, popular in Brazil. Available in early access." } */
  Pix: "pix",
  /** "samsung_pay": { "description": "Samsung Pay, a popular payment method in Korea." } */
  SamsungPay: "samsung_pay",
  /** "unknown": { "description": "Payment method not known." } */
  Unknown: "unknown",
  /**
   * "upi": { "description": "Unified Payments Interface (UPI), popular in India. Available in early
   * access." }
   */
  Upi: "upi",
  /** "wechat_pay": { "description": "WeChat Pay, a popular payment method in China." } */
  WechatPay: "wechat_pay",
  /** "wire_transfer": { "description": "Wire transfer, sometimes called bank transfer." } */
  WireTransfer: "wire_transfer",
} as const;
export type PaymentMethodType = (typeof PaymentMethodType)[keyof typeof PaymentMethodType] | (string & {});

export const paymentMethodTypeSchema: EnumSchema<PaymentMethodType> =
  s.enumOf<PaymentMethodType>(PaymentMethodType);
