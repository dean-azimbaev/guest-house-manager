export class API {
  static baseURL(): string {
    const backendEntryPoint = entryPoint();

    return backendEntryPoint;

    function entryPoint() {
      return `${path()}${serverApiPrefix()}`.replace(/\/+/g, "/");
    }

    function path() {
      const match = window.location.pathname.match(/^(.*?)(?:#.*)?$/);
      return match ? match[1] : "";
    }

    function serverApiPrefix() {
      return import.meta.env.VITE_API_BASE_URL;
    }
  }
}
