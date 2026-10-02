import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  countryAndZipPostalCodeSchema,
  type CountryAndZipPostalCode,
} from "../country-and-zip-postal-code.js";
import {
  existingCustomerPaddleIDsSchema,
  type ExistingCustomerPaddleIDs,
} from "../existing-customer-paddle-ids.js";
import { ipAddress1Schema, type IpAddress1 } from "../ip-address1.js";
import { noLocationInformationSchema, type NoLocationInformation } from "../no-location-information.js";

export type TransactionPreviewCreate =
  | NoLocationInformation
  | CountryAndZipPostalCode
  | IpAddress1
  | ExistingCustomerPaddleIDs;

export const transactionPreviewCreateSchema: Schema<TransactionPreviewCreate> =
  s.of<TransactionPreviewCreate>(
    s.union([
      s.lazy(() => noLocationInformationSchema),
      s.lazy(() => countryAndZipPostalCodeSchema),
      s.lazy(() => ipAddress1Schema),
      s.lazy(() => existingCustomerPaddleIDsSchema),
    ]),
  );
