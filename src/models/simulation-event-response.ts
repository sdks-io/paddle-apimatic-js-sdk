import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the response. Sent by the responding server for the notification setting. */
export type SimulationEventResponse = {
  /** Response body sent by the responding server. May be empty for success responses. */
  body: string;
  /** HTTP status code sent by the responding server. */
  statusCode: number;
};

export const simulationEventResponseSchema: Schema<SimulationEventResponse> =
  s.object<SimulationEventResponse>({
    body: s.string(),
    statusCode: s.float64(),
    _keysMap: {
      statusCode: "status_code",
    },
  });
