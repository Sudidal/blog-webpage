import storageManager from "./storageManager.js";

class BlogAPI {
  #API_URL = "http://localhost:4000";
  #ADMIN_ROLE_NAME = "ADMIN";
  #AUTHOR_ROLE_NAME = "AUTHOR";
  constructor() {}

  #getAuthToken = () => storageManager.getAuthenticationKey();

  async register(username, email, password, confirm_password) {
    const res = await fetch(this.#API_URL + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ username, email, password, confirm_password }),
    });
    if (res.ok) {
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  }

  async login(username, password) {
    const res = await fetch(this.#API_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      storageManager.setAuthToken(data.jwtToken);
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  }

  async getUserInfo() {
    const res = await fetch(this.#API_URL + "/users/me", {
      method: "GET",
      headers: { authorization: this.#getAuthToken() },
    });
    if (res.ok) {
      const userObj = await res.json();
      return userObj.user;
    } else {
      return null;
    }
  }

  async isLoggedIn() {
    const res = await fetch(this.#API_URL + "/users/me", {
      method: "GET",
      headers: { authorization: this.#getAuthToken() },
    });
    return res.ok;
  }

  async getAllPosts() {
    const res = await fetch(this.#API_URL + "/posts", {
      headers: { authorization: this.#getAuthToken() },
    });
    if (res.ok) {
      const postsObj = await res.json();
      this.addIsPublished(postsObj.posts);
      return postsObj.posts;
    } else {
      const data = await res.json();
      return data;
    }
  }

  async getPost(postId) {
    const url = this.#API_URL + "/posts/" + postId;
    const res = await fetch(url, {
      headers: { authorization: this.#getAuthToken() },
    });
    if (res.ok) {
      const postsObj = await res.json();
      this.addIsPublished(postsObj.post);
      return postsObj.post;
    } else {
      const data = await res.json();
      return data;
    }
  }

  postNewPost = async (values) => {
    const res = await fetch(this.#API_URL + "/posts", {
      method: "POST",
      headers: {
        authorization: this.#getAuthToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
        publish: values.publish,
      }),
    });
    if (res.ok) {
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  };

  async postNewComment(content, postId) {
    const res = await fetch(this.#API_URL + "/posts/" + postId + "/comments", {
      method: "POST",
      headers: {
        authorization: this.#getAuthToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (res.ok) {
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  }

  editPost = async (values, postId) => {
    const res = await fetch(this.#API_URL + "/posts/" + postId, {
      method: "PUT",
      headers: {
        authorization: this.#getAuthToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
        publish: values.publish,
      }),
    });
    if (res.ok) {
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  };

  likePost = async (postId) => {
    const res = await fetch(this.#API_URL + "/posts/" + postId + "/like", {
      method: "POST",
      headers: {
        authorization: this.#getAuthToken(),
      },
    });
    if (res.ok) {
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  };

  likeComment = async (commentId) => {
    const res = await fetch(
      this.#API_URL + "/posts/comments/" + commentId + "/like",
      {
        method: "POST",
        headers: {
          authorization: this.#getAuthToken(),
        },
      }
    );
    if (res.ok) {
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  };

  deletePost = async (postId) => {
    const res = await fetch(this.#API_URL + "/posts/" + postId, {
      method: "DELETE",
      headers: {
        authorization: this.#getAuthToken(),
      },
    });
    if (res.ok) {
      return true;
    } else {
      const data = await res.json();
      return data;
    }
  };

  addIsPublished(input) {
    if (Array.isArray(input)) {
      input.forEach((item) => {
        item.isPublished = item.postStatus === "PUBLISHED";
      });
    } else {
      input.isPublished = input.postStatus === "PUBLISHED";
    }
  }

  isAdmin(user) {
    return user?.role === this.#ADMIN_ROLE_NAME;
  }
  isAuthor(user) {
    return user?.role === this.#AUTHOR_ROLE_NAME;
  }
}

const blogApi = new BlogAPI();

export default blogApi;
