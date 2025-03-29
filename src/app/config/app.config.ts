import { API } from "./api.config";
export class AppConfig {
  static get Environment() {
    return import.meta.env.VITE_ENV;
  }

  static get ApiBaseUrl() {
    return import.meta.env.VITE_API_BASE_URL;
  }
}
