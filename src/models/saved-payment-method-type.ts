import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of payment method saved. */
export const SavedPaymentMethodType = {
  /** "alipay": { "description": "Alipay, popular in China." } */
  Alipay: "alipay",
  /** "apple_pay": { "description": "Apple Pay on a supported Apple device." } */
  ApplePay: "apple_pay",
  /** "blik": { "description": "BLIK, a popular payment method in Poland." } */
  Blik: "blik",
  /** "card": { "description": "Credit or debit card." } */
  Card: "card",
  /**
   * "google_pay": { "description": "Google Pay on a supported Android device, Chromebook, or Google
   * Chrome browser." }
   */
  GooglePay: "google_pay",
  /** "kakao_pay": { "description": "Kakao Pay, a popular payment method in South Korea." } */
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
  /** "naver_pay": { "description": "Naver Pay, a popular payment method in South Korea." } */
  NaverPay: "naver_pay",
  /** "payco": { "description": "Payco, a popular payment method in South Korea." } */
  Payco: "payco",
  /** "paypal": { "description": "PayPal." } */
  Paypal: "paypal",
  /** "pix": { "description": "Pix, popular in Brazil." } */
  Pix: "pix",
  /** "samsung_pay": { "description": "Samsung Pay, a popular payment method in South Korea." } */
  SamsungPay: "samsung_pay",
  /** "upi": { "description": "Unified Payments Interface (UPI), popular in India." } */
  Upi: "upi",
  /** "wechat_pay": { "description": "WeChat Pay, a popular payment method in China." } */
  WechatPay: "wechat_pay",
} as const;
export type SavedPaymentMethodType =
  | (typeof SavedPaymentMethodType)[keyof typeof SavedPaymentMethodType]
  | (string & {});

export const savedPaymentMethodTypeSchema: EnumSchema<SavedPaymentMethodType> =
  s.enumOf<SavedPaymentMethodType>(SavedPaymentMethodType);
