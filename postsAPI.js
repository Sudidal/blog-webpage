const getAllPosts = (limit) => [
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
  {
    id: 2,
    title: "important words to say",
    content: "yeah, this is very important",
    publishDate: "1 month ago - 2024-8-5",
    author: {
      id: 2,
      username: "oxide",
      email: "mohammed@gmail.com",
    },
    comments: [
      { content: "never thought of this!" },
      { content: "can i reach to you?" },
      { content: "not gonna lie, i made these mistakes" },
    ],
  },
];

const getPost = (id) => {
  return {
    id: id,
    title: "a very cool post",
    content: "just wanted to say hi",
    publishDate: "5 months ago - 2024-4-5",
    author: {
      id: 2,
      username: "oxide",
      email: "mohammed@gmail.com",
      comments: [
        { content: "haha, very informative" },
        { content: "agree with everything said" },
      ],
    },
  };
};

export { getAllPosts, getPost };
