const getPosts = (limit) => [
  {
    id: 1,
    title: "a very cool post",
    content: "just wanted to say hi",
    publishDate: "5 months ago - 2024-4-5",
    author: {
      id: 2,
      username: "oxide",
      email: "mohammed@gmail.com",
    },
    comments: [
      { content: "haha, very informative" },
      { content: "agree with everything said" },
    ],
  },
];
export default getPosts;
