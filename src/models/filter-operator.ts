import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Operator to use when filtering. */
export const FilterOperator = {
  /** "lt": { "description": "Less than." } */
  Lt: "lt",
  /** "gte": { "description": "Greater than or equal to." } */
  Gte: "gte",
} as const;
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator] | (string & {});

export const filterOperatorSchema: EnumSchema<FilterOperator> = s.enumOf<FilterOperator>(FilterOperator);
