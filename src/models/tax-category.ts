import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Tax category for this product. Used for charging the correct rate of tax. Selected tax category
 * must be enabled on your Paddle account.
 */
export const TaxCategory = {
  /**
   * "digital-goods": { "description": "Non-customizable digital files or media (not software)
   * acquired with an up front payment that can be accessed without any physical product being
   * delivered." }
   */
  DigitalGoods: "digital-goods",
  /**
   * "ebooks": { "description": "Digital books and educational material which is sold with permanent
   * rights for use by the customer." }
   */
  Ebooks: "ebooks",
  /**
   * "implementation-services": { "description": "Remote configuration, set-up, and integrating
   * software on behalf of a customer." }
   */
  ImplementationServices: "implementation-services",
  /**
   * "professional-services": { "description": "Services that involve the application of your
   * expertise and specialized knowledge of a software product." }
   */
  ProfessionalServices: "professional-services",
  /**
   * "saas": { "description": "Products that allow users to connect to and use online or cloud-based
   * applications over the Internet." }
   */
  Saas: "saas",
  /**
   * "software-programmin-services": { "description": "Services that can be used to customize and
   * white label software products." }
   */
  SoftwareProgrammingServices: "software-programming-services",
  /**
   * "standard": { "description": "Software products that are pre-written and can be downloaded and
   * installed onto a local device." }
   */
  Standard: "standard",
  /**
   * "training-services": { "description": "Training and education services related to software
   * products." }
   */
  TrainingServices: "training-services",
  /**
   * "website-hosting": { "description": "Cloud storage service for personal or corporate
   * information, assets, or intellectual property." }
   */
  WebsiteHosting: "website-hosting",
} as const;
export type TaxCategory = (typeof TaxCategory)[keyof typeof TaxCategory] | (string & {});

export const taxCategorySchema: EnumSchema<TaxCategory> = s.enumOf<TaxCategory>(TaxCategory);
