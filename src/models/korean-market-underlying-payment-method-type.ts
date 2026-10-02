import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of Korean payment method used to pay. */
export const KoreanMarketUnderlyingPaymentMethodType = {
  /** "bc": { "description": "BC Card (BCard), a kind of card issued in Korea. (비씨카드)" } */
  Bc: "bc",
  /** "citi": { "description": "Card issued by Citi Bank in Korea. (한국씨티은행)" } */
  Citi: "citi",
  /** "hana": { "description": "Card issued by Hana Bank in Korea. (하나카드)" } */
  Hana: "hana",
  /**
   * "hyundai": { "description": "Hyundai Card, a credit card issued by Hyundai in Korea. (현대카드)" }
   */
  Hyundai: "hyundai",
  /** "jeju": { "description": "Card issued by Jeju Bank in Korea. (제주은행)" } */
  Jeju: "jeju",
  /** "jeonbuk": { "description": "Card issued by Jeonbuk Bank in Korea. (전북은행)" } */
  Jeonbuk: "jeonbuk",
  /** "kakaobank": { "description": "Card issued by Kakaobank in Korea. (주식회사 카카오뱅크)" } */
  Kakaobank: "kakaobank",
  /** "kakaopay": { "description": "KakaoPay digital wallet, popular in Korea. (카카오페이)" } */
  Kakaopay: "kakaopay",
  /** "kbank": { "description": "Card issued by K Bank in Korea. (케이뱅크)" } */
  Kbank: "kbank",
  /** "kdbbank": { "description": "Card issued by KDB Bank in Korea. (한국산업은행)" } */
  Kdbbank: "kdbbank",
  /** "kookmin": { "description": "Card issued by Kookmin Bank in Korea. (국민은행)" } */
  Kookmin: "kookmin",
  /** "kwangju": { "description": "Card issued by Kwangju Bank in Korea. (광주은행)" } */
  Kwangju: "kwangju",
  /**
   * "lotte": { "description": "Lotte Card, a credit card issued by the Lotte Corporation in Korea.
   * (롯데카드)" }
   */
  Lotte: "lotte",
  /**
   * "mg": { "description": "Card issued by MG Community Credit Cooperatives (KFCC) in Korea.
   * (MG새마을금고)" }
   */
  Mg: "mg",
  /**
   * "naverpaycard": { "description": "Card issued by Naver Pay in Korea. (네이버 페이)", "deprecated":
   * true }
   */
  Naverpaycard: "naverpaycard",
  /**
   * "naverpaypoint": { "description": "Naver Pay digital wallet, popular in Korea. (네이버 페이)",
   * "deprecated": true }
   */
  Naverpaypoint: "naverpaypoint",
  /** "nh": { "description": "NH Card, a card issued by Nonghyup Bank in Korea. (NH농협은행)" } */
  Nh: "nh",
  /**
   * "payco": { "description": "PayCo digital wallet, popular in Korea. (페이코)", "deprecated": true }
   */
  Payco: "payco",
  /** "post": { "description": "Card issued by Korea Post. (우체국예금보험)" } */
  Post: "post",
  /** "samsung": { "description": "Samsung Card, a card issued by Samsung in Korea. (삼성카드)" } */
  Samsung: "samsung",
  /**
   * "samsungpay": { "description": "Samsung Pay digital wallet, popular in Korea. (삼성 월렛)",
   * "deprecated": true }
   */
  Samsungpay: "samsungpay",
  /**
   * "savingsbank": { "description": "Card issued by the Korean Federation of Savings Banks in
   * Korea. (저축은행중앙회)" }
   */
  Savingsbank: "savingsbank",
  /** "shinhan": { "description": "Card issued by Shinhan Bank in Korea. (주식회사 신한은행)" } */
  Shinhan: "shinhan",
  /**
   * "shinhyup": { "description": "Card issued by the National Credit Unit Federation of Korea
   * (Shinhyup) in Korea. (신한은행 신협)" }
   */
  Shinhyup: "shinhyup",
  /**
   * "suhyup": { "description": "Card issued by the National Federation of Fisheries Cooperation
   * (Suhyup) in Korea. (수협은행)" }
   */
  Suhyup: "suhyup",
  /** "tossbank": { "description": "Card issued by Toss Bank in Korea. (토스뱅크)" } */
  Tossbank: "tossbank",
  /** "unknown": { "description": "Underlying payment method not recognized." } */
  Unknown: "unknown",
  /** "woori": { "description": "Card issued by Woori Bank in Korea. (주식회사 우리은행)" } */
  Woori: "woori",
} as const;
export type KoreanMarketUnderlyingPaymentMethodType =
  | (typeof KoreanMarketUnderlyingPaymentMethodType)[keyof typeof KoreanMarketUnderlyingPaymentMethodType]
  | (string & {});

export const koreanMarketUnderlyingPaymentMethodTypeSchema: EnumSchema<KoreanMarketUnderlyingPaymentMethodType> =
  s.enumOf<KoreanMarketUnderlyingPaymentMethodType>(KoreanMarketUnderlyingPaymentMethodType);
