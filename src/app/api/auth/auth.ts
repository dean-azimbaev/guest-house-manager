import { fetchUtils } from "react-admin";

import { TokenStorage } from "./token.storage";

export const authorizedFetch = async (
  url: string,
  options: fetchUtils.Options = {}
) => {
  if (!TokenStorage.getAccessToken()) {
    await TokenStorage.refreshTokens();
  }

  const access_token = TokenStorage.getAccessToken();

  const customerHeaders =
    options.headers ||
    new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    });

  options.headers = customerHeaders;

  options.user = {
    authenticated: !!access_token,
    token: "Bearer " + access_token,
  };

  return fetchUtils.fetchJson(url, options);
};
