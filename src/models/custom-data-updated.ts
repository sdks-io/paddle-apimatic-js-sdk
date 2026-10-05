import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details specific to `subscription_custom_data_updated` actions. */
export type CustomDataUpdated = {
  /** What happened on the subscription. @default "subscription_custom_data_updated" */
  action?: "subscription_custom_data_updated";
  /**
   * Updated custom data on the subscription. `null` if custom data was removed. This is what the
   * custom data was changed to.
   */
  customData: Record<string, unknown> | null;
};

export const customDataUpdatedSchema: Schema<CustomDataUpdated> = s.object<CustomDataUpdated>({
  action: s.defaulted(s.literal("subscription_custom_data_updated"), "subscription_custom_data_updated"),
  customData: s.nullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    customData: "custom_data",
  },
});
