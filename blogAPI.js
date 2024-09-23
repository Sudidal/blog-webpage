const API_URL = "http://localhost:4000/";
const token =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInVzZXJuYW1lIjoib3hpZGUiLCJlbWFpbCI6Im1vaGFtbWVkaGFpZGVyMTVtb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRxemRTbXNPMk5ZS0cuU0YuR0prLjJPbVFZTVpFVS5xL05pa1o2dnJIWnJkMlhvZkFBWGJBSyIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzI3MDcwMjU2fQ.0chjx7QIZ11nIBBD4k-f_X5MgERZPvKvuGYqbBH6Hhg";

async function getAllPosts() {
  const res = await fetch(API_URL + "posts", {
    headers: { authorization: token },
  });
  console.log(res);
  const postsObj = await res.json();
  console.log(postsObj.posts);
  return postsObj.posts;
}

async function getPost(postId) {
  const url = API_URL + "posts/" + postId;
  console.log(url);
  const res = await fetch(url, {
    headers: { authorization: token },
  });
  console.log(res);
  const postsObj = await res.json();
  console.log(postsObj.post);
  return postsObj.post;
}

export { getAllPosts, getPost };
