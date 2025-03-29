import { UserIdentity } from "react-admin";

export class TokenStorage {
  static getAccessToken() {
    return localStorage.getItem("access_token");
  }

  static saveAccessToken(token: string) {
    localStorage.setItem("access_token", token);
  }

  static getIdentityFromToken(): UserIdentity {
    const token = TokenStorage.getAccessToken() as string;
    const { sub } = TokenStorage.parseJWT<{ sub: string }>(token);

    return { id: sub };
  }

  static async refreshTokens() {
    localStorage.clear();
  }

  private static parseJWT<T = Record<string, any>>(jwt: string): T {
    const base64Url = jwt.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
}
