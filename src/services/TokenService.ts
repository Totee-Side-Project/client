const TOKEN_KEY = "access_token";

export default class TokenService {
  public static get() {
    return localStorage.getItem(TOKEN_KEY);
  }

  public static set(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public static remove(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
