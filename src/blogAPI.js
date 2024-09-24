import storageManager from "./storageManager.js";

class BlogAPI {
  #API_URL = "http://localhost:4000";
  constructor() {}

  #getAuthToken = () => storageManager.getAuthenticationKey();

  async register(username, email, password, confirm_password) {
    const res = await fetch(this.#API_URL + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ username, email, password, confirm_password }),
    });
    const data = await res.json();
    console.log(data);
  }

  async login(username, password) {
    const res = await fetch(this.#API_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    storageManager.setAuthToken(data.jwtToken);
  }

  async getUserInfo() {
    const res = await fetch(this.#API_URL + "/users/me", {
      method: "GET",
      headers: { authorization: this.#getAuthToken() },
    });
    const userObj = await res.json();
    return userObj.user;
  }

  async isLoggedIn() {
    const res = await fetch(this.#API_URL + "/users/me", {
      method: "GET",
      headers: { authorization: this.#getAuthToken() },
    });
    if (res.status === 401) return false;
    else return true;
  }

  async getAllPosts() {
    const res = await fetch(this.#API_URL + "/posts", {
      headers: { authorization: this.#getAuthToken() },
    });
    const postsObj = await res.json();
    return postsObj.posts;
  }

  async getPost(postId) {
    const url = this.#API_URL + "/posts/" + postId;
    const res = await fetch(url, {
      headers: { authorization: this.#getAuthToken() },
    });
    const postsObj = await res.json();
    return postsObj.post;
  }

  async postComment(content, postId) {
    await fetch(this.#API_URL + "/posts/" + postId + "/comments", {
      method: "POST",
      headers: {
        authorization: this.#getAuthToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
  }
}

const blogApi = new BlogAPI();

export default blogApi;
