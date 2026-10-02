import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of Korean payment method used to pay. */
export const SouthKoreaLocalCardType = {
  Bc: "bc",
  Citi: "citi",
  Hana: "hana",
  Hyundai: "hyundai",
  Jeju: "jeju",
  Jeonbuk: "jeonbuk",
  Kakaobank: "kakaobank",
  Kbank: "kbank",
  Kdbbank: "kdbbank",
  Kookmin: "kookmin",
  Kwangju: "kwangju",
  Lotte: "lotte",
  Mg: "mg",
  Nh: "nh",
  Post: "post",
  Samsung: "samsung",
  Savingsbank: "savingsbank",
  Shinhan: "shinhan",
  Shinhyup: "shinhyup",
  Suhyup: "suhyup",
  Tossbank: "tossbank",
  Unknown: "unknown",
  Woori: "woori",
} as const;
export type SouthKoreaLocalCardType =
  | (typeof SouthKoreaLocalCardType)[keyof typeof SouthKoreaLocalCardType]
  | (string & {});

export const southKoreaLocalCardTypeSchema: EnumSchema<SouthKoreaLocalCardType> =
  s.enumOf<SouthKoreaLocalCardType>(SouthKoreaLocalCardType);
