import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Image for this product. Included in the checkout and on some customer documents. */
export type ImageUrl = string;

export const imageUrlSchema: Schema<ImageUrl> = s.of<ImageUrl>(s.union([s.string()]));
