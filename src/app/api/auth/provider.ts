import { AuthProvider, HttpError } from "react-admin";

import { AppConfig } from "@/app/config";
import { TokenStorage } from "./token.storage";

enum HttpStatus {
  FORBIDDEN = 403,
}

type AuthFailureReponse = {
  statusCode: HttpStatus;
  error: string;
  message: string;
};

type AuthResponse = {
  access_token: string;
};

class AuthFailureHandler {
  static handler(response: AuthFailureReponse) {
    if (response.statusCode === HttpStatus.FORBIDDEN) {
      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        })
      );
    }
  }

  static isFailed(response: AuthFailureReponse) {
    return !!(response.error || response.message);
  }
}

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    alert(AppConfig.ApiBaseUrl);
    const authResponse: AuthResponse | AuthFailureReponse = await fetch(
      `${AppConfig.ApiBaseUrl}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    if (AuthFailureHandler.isFailed(authResponse as AuthFailureReponse)) {
      await AuthFailureHandler.handler(authResponse as AuthFailureReponse);
    }

    const { access_token } = authResponse as AuthResponse;
    TokenStorage.saveAccessToken(access_token);

    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("access_token");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  // checkAuth: () =>
  //   localStorage.getItem("access_token") ? Promise.resolve() : Promise.reject(),
  checkAuth: () => {
    return Promise.resolve();
  },
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    return Promise.resolve(TokenStorage.getIdentityFromToken());
  },
};

export default authProvider;
