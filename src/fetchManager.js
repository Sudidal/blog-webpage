import storageManager from "./storageManager.js";

class FetchManager {
  #AUTH_HEADER = "authorization";

  constructor() {}

  fetchReq = (url, method, headers, body) => {
    return fetch(url, { method, headers, body: JSON.stringify(body) });
  };

  authGetFetchReq = (url) => {
    return this.fetchReq(url, "GET", {
      [this.#AUTH_HEADER]: this.#getAuthKey(),
    });
  };
  authDeleteFetchReq = (url) => {
    return this.fetchReq(url, "DELETE", {
      [this.#AUTH_HEADER]: this.#getAuthKey(),
    });
  };
  authPostFetchReq = (url, body = {}) => {
    return this.fetchReq(
      url,
      "POST",
      {
        [this.#AUTH_HEADER]: this.#getAuthKey(),
        "Content-Type": "application/json",
      },
      body
    );
  };
  authPutFetchReq = (url, body = {}) => {
    return this.fetchReq(
      url,
      "PUT",
      {
        [this.#AUTH_HEADER]: this.#getAuthKey(),
        "Content-Type": "application/json",
      },
      body
    );
  };

  #getAuthKey = () => storageManager.getAuthenticationKey();
}

const fetchManager = new FetchManager();
export default fetchManager;
