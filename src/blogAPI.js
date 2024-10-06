import fetchManager from "./fetchManager.js";
import storageManager from "./storageManager.js";
import { v4 as uuidv4 } from "uuid";

class BlogAPI {
  #API_URL = "http://localhost:4000";
  #ADMIN_ROLE_NAME = "ADMIN";
  #AUTHOR_ROLE_NAME = "AUTHOR";
  constructor() {}

  async register(values) {
    const res = await fetchManager.authPostFetchReq(
      this.#API_URL + "/register",
      {
        username: values.username,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
      }
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  }

  async login(username, password) {
    const res = await fetchManager.authPostFetchReq(this.#API_URL + "/login", {
      username,
      password,
    });

    if (res.ok) {
      const data = await res.json();
      storageManager.setAuthToken(data.jwtToken);
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  }

  async logout() {
    storageManager.removeAuthToken();
    return true;
  }

  async getUserInfo() {
    const res = await fetchManager.authGetFetchReq(this.#API_URL + "/users/me");

    if (res.ok) {
      const userObj = await res.json();
      return userObj.user;
    } else {
      return null;
    }
  }

  async isLoggedIn() {
    const res = await fetchManager.authGetFetchReq(this.#API_URL + "/users/me");

    return res.ok;
  }

  async getAllPosts() {
    const res = await fetchManager.authGetFetchReq(this.#API_URL + "/posts");

    if (res.ok) {
      const postsObj = await res.json();
      this.#addIsPublished(postsObj.posts);
      return postsObj.posts;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  }

  async getPost(postId) {
    const res = await fetchManager.authGetFetchReq(
      this.#API_URL + "/posts/" + postId
    );

    if (res.ok) {
      const postsObj = await res.json();
      this.#addIsPublished(postsObj.post);
      return postsObj.post;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  }

  async getComment(commentId) {
    const res = await fetchManager.authGetFetchReq(
      this.#API_URL + "/posts/comments/" + commentId
    );

    if (res.ok) {
      const commentObj = await res.json();
      return commentObj.comment;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  }

  postNewPost = async (values) => {
    const res = await fetchManager.authPostFetchReq(this.#API_URL + "/posts", {
      title: values.title,
      content: values.content,
      publish: values.publish,
    });

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  };

  async postNewComment(content, postId) {
    const res = await fetchManager.authPostFetchReq(
      this.#API_URL + "/posts/" + postId + "/comments",
      { content }
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  }

  editPost = async (values, postId) => {
    const res = await fetchManager.authPutFetchReq(
      this.#API_URL + "/posts/" + postId,
      {
        title: values.title,
        content: values.content,
        publish: values.publish,
      }
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  };

  editComment = async (content, commentId) => {
    const res = await fetchManager.authPutFetchReq(
      this.#API_URL + "/posts/comments/" + commentId,
      {
        content,
      }
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  };

  likePost = async (postId) => {
    const res = await fetchManager.authPostFetchReq(
      this.#API_URL + "/posts/" + postId + "/like"
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  };

  likeComment = async (commentId) => {
    const res = await fetchManager.authPostFetchReq(
      this.#API_URL + "/posts/comments/" + commentId + "/like"
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  };

  deletePost = async (postId) => {
    const res = await fetchManager.authDeleteFetchReq(
      this.#API_URL + "/posts/" + postId
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  };

  deleteComment = async (commentId) => {
    const res = await fetchManager.authDeleteFetchReq(
      this.#API_URL + "/posts/comments/" + commentId
    );

    if (res.ok) {
      return true;
    } else {
      const data = await this.#formatResMsgs(res);
      return data;
    }
  };

  #addIsPublished(input) {
    if (!input) return;
    if (Array.isArray(input)) {
      input.forEach((item) => {
        item.isPublished = item.postStatus === "PUBLISHED";
      });
    } else {
      input.isPublished = input.postStatus === "PUBLISHED";
    }
  }

  async #formatResMsgs(res) {
    if (!res) return;
    const obj = await res.json();
    console.log(Object.assign(obj));

    if (!Array.isArray(obj.errors)) {
      obj.errors = [obj.errors];
    }

    const newMsgsArr = new Array(obj.errors.length);
    obj.errors.forEach((msg) => {
      const newMsg = { text: "", id: 0 };
      let content = "";
      if (typeof msg === "string") {
        content = msg;
      } else if (typeof msg === "object") {
        if (msg.message) {
          content = msg.message;
        } else if (msg.msg) {
          content = msg.msg;
        }
      }

      newMsg.text = content;
      newMsg.id = uuidv4();
      newMsgsArr.push(newMsg);
    });

    obj.errors = newMsgsArr;
    return obj;
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
