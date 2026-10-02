import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaxCategory1 = {
  /**
   * "digital-goods": { "description": "Return entities with the tax category of `digital-goods`.
   * Non-customizable digital files or media (not software) acquired with an up front payment that
   * can be accessed without any physical product being delivered." }
   */
  DigitalGoods: "digital-goods",
  /**
   * "ebooks": { "description": "Return entities with the tax category of `ebooks`. Digital books
   * and educational material which is sold with permanent rights for use by the customer." }
   */
  Ebooks: "ebooks",
  /**
   * "implementation-services": { "description": "Return entities with the tax category of
   * `implementation-services`. Remote configuration, set-up, and integrating software on behalf of
   * a customer." }
   */
  ImplementationServices: "implementation-services",
  /**
   * "professional-services": { "description": "Return entities with the tax category of
   * `professional-services`. Services that involve the application of your expertise and
   * specialized knowledge of a software product." }
   */
  ProfessionalServices: "professional-services",
  /**
   * "saas": { "description": "Return entities with the tax category of `saas`. Products that allow
   * users to connect to and use online or cloud-based applications over the Internet." }
   */
  Saas: "saas",
  /**
   * "software-programming-services": { "description": "Return entities with the tax category of
   * `software-programming-services`. Services that can be used to customize and white label
   * software products." }
   */
  SoftwareProgrammingServices: "software-programming-services",
  /**
   * "standard": { "description": "Return entities with the tax category of `standard`. Software
   * products that are pre-written and can be downloaded and installed onto a local device." }
   */
  Standard: "standard",
  /**
   * "training-services": { "description": "Return entities with the tax category of
   * `training-services`. Training and education services related to software products." }
   */
  TrainingServices: "training-services",
  /**
   * "website-hosting": { "description": "Return entities with the tax category of
   * `website-hosting`. Cloud storage service for personal or corporate information, assets, or
   * intellectual property." }
   */
  WebsiteHosting: "website-hosting",
} as const;
export type TaxCategory1 = (typeof TaxCategory1)[keyof typeof TaxCategory1] | (string & {});

export const taxCategory1Schema: EnumSchema<TaxCategory1> = s.enumOf<TaxCategory1>(TaxCategory1);
