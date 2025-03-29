import simpleRestProvider from "ra-data-simple-rest";

import { AppConfig } from "../../config";
import { authorizedFetch } from "../auth";

export const baseDataProvider = simpleRestProvider(
  AppConfig.ApiBaseUrl,
  authorizedFetch
);
