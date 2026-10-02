import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of actor that performed this action. */
export const ActorType = {
  /** "customer": { "description": "Action was performed by a customer." } */
  Customer: "customer",
  /** "user": { "description": "Action was performed by a Paddle user account." } */
  User: "user",
  /** "api_key": { "description": "Action was performed by an API key." } */
  ApiKey: "api_key",
  /** "paddle_staff": { "description": "Action was performed by a member of the Paddle team." } */
  PaddleStaff: "paddle_staff",
  /**
   * "publisher": { "description": "Action was performed by a publisher (app) acting on behalf of a
   * user or seller." }
   */
  Publisher: "publisher",
  /** "system": { "description": "Action was performed by an internal system process." } */
  System: "system",
} as const;
export type ActorType = (typeof ActorType)[keyof typeof ActorType] | (string & {});

export const actorTypeSchema: EnumSchema<ActorType> = s.enumOf<ActorType>(ActorType);
