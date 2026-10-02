import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actorTypeSchema, type ActorType } from "./actor-type.js";
import { id1Schema, type Id1 } from "./unions/id1.js";

/** Details about the actor that performed an action. */
export type Actor = {
  /** The type of actor that performed this action. */
  type: ActorType;
  /**
   * The ID of the actor in relation to the `type`. `null` where the type of actor doesn't have an
   * ID.
   */
  id: Id1;
};

export const actorSchema: Schema<Actor> = s.object<Actor>({
  type: actorTypeSchema,
  id: id1Schema,
});
