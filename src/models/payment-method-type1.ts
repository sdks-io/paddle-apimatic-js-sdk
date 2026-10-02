import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of payment method available for use in the checkout. */
export const PaymentMethodType1 = {
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
  /** "kakao_pay": { "description": "Kakao Pay, a popular payment method in South Korea." } */
  KakaoPay: "kakao_pay",
  /**
   * "korea_local": { "description": "Korean payment methods, which includes over 20 payment options
   * for the Korean market.", "deprecated": true }
   */
  KoreaLocal: "korea_local",
  /** "mb_way": { "description": "MB WAY, a popular payment method in Portugal." } */
  NaverPay: "naver_pay",
  /** "naver_pay": { "description": "Naver Pay, a popular payment method in South Korea." } */
  Payco: "payco",
  /** "payco": { "description": "Payco, a popular payment method in South Korea." } */
  SamsungPay: "samsung_pay",
  /** "paypal": { "description": "PayPal." } */
  SouthKoreaLocalCard: "south_korea_local_card",
  /** "pix": { "description": "Pix, popular in Brazil." } */
  MbWay: "mb_way",
  /** "samsung_pay": { "description": "Samsung Pay, a popular payment method in South Korea." } */
  Paypal: "paypal",
  /** "south_korea_local_card": { "description": "Korean local credit or debit card." } */
  Pix: "pix",
  /** "upi": { "description": "Unified Payments Interface (UPI), popular in India." } */
  Upi: "upi",
  /** "wechat_pay": { "description": "WeChat Pay, a popular payment method in China." } */
  WechatPay: "wechat_pay",
} as const;
export type PaymentMethodType1 = (typeof PaymentMethodType1)[keyof typeof PaymentMethodType1] | (string & {});

export const paymentMethodType1Schema: EnumSchema<PaymentMethodType1> =
  s.enumOf<PaymentMethodType1>(PaymentMethodType1);
