class StorageManager {
  #AUTH_TOKEN_KEY = "jwtToken";
  #STUPID_WORD = "bearer ";

  constructor() {}

  setAuthToken(token) {
    localStorage.setItem(this.#AUTH_TOKEN_KEY, this.#STUPID_WORD + token);
  }
  removeAuthToken() {
    localStorage.removeItem(this.#AUTH_TOKEN_KEY);
  }
  getAuthenticationKey() {
    return localStorage.getItem(this.#AUTH_TOKEN_KEY);
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
}

const storageManager = new StorageManager();
export default storageManager;
