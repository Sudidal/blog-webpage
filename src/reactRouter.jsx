import { createBrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import Posts from "./routes/posts.jsx";
import AllPosts from "./components/allPosts/allPosts.jsx";
import PostContent from "./components/postContent/postContent.jsx";
import Login from "./routes/login.jsx";
import Register from "./routes/register.jsx";
import redirectLogged from "./loaders/redirectLogged.js";
import NewPost from "./routes/newPost.jsx";
import EditPost from "./routes/editPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <h1>Whoops, that&apos;s an ugly error page that i need to change</h1>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
        loader: redirectLogged,
      },
      {
        path: "register",
        element: <Register />,
        loader: redirectLogged,
      },
      {
        path: "posts",
        element: <Posts />,
        children: [
          {
            path: "",
            element: <AllPosts />,
          },
          {
            path: ":postId",
            element: <PostContent />,
          },
          {
            path: "new",
            element: <NewPost />,
          },
          {
            path: "edit/:postId",
            element: <EditPost />,
          },
        ],
      },
    ],
  },
]);

export default router;
