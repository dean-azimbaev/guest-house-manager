import { DataProvider } from "react-admin";

export class ProviderUTIL {
  /** right side provider ovverides left */
  static compose = (...providers: DataProvider[]): DataProvider => {
    return providers.reduce((acc, provider) => {
      acc = {
        ...acc,
        ...provider,
      };
      return acc;
    }, {} as DataProvider);
  };
}
