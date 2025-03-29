import { ProviderUTIL } from "@/shared";

import { baseDataProvider } from "./http";

export const dataProvider = ProviderUTIL.compose(baseDataProvider);
