import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Disposition = {
  /**
   * "attachment": { "description": "Generated URL downloads the PDF as an attachment. Browsers
   * typically automatically save the PDF." }
   */
  Attachment: "attachment",
  /**
   * "inline": { "description": "Generated URL displays the PDF inline in the browser. Browsers
   * typically open the PDF in the current tab." }
   */
  Inline: "inline",
} as const;
export type Disposition = (typeof Disposition)[keyof typeof Disposition] | (string & {});

export const dispositionSchema: EnumSchema<Disposition> = s.enumOf<Disposition>(Disposition);
