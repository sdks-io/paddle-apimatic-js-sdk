import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about this response. */
export type Meta = {
  /**
   * Unique ID for the request relating to this response. Provide this when contacting Paddle
   * support about a specific request.
   */
  requestId: string;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
