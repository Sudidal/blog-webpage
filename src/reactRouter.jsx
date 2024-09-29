import { createBrowserRouter } from "react-router-dom";
import redirectLogged from "./loaders/redirectLogged.js";
import redirectNotLogged from "./loaders/redirectNotLogged.js";
import App from "./app.jsx";
import Posts from "./routes/posts.jsx";
import AllPosts from "./pages/allPosts.jsx";
import PostContent from "./pages/postContent.jsx";
import Login from "./routes/login.jsx";
import Register from "./routes/register.jsx";
import NewPost from "./pages/newPost.jsx";
import EditPost from "./pages/editPost.jsx";

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
        path: "/",
        element: <Posts />,
        loader: redirectNotLogged,
        children: [
          {
            path: "",
            element: <AllPosts />
          }
        ]
      },
      {
        path: "posts",
        element: <Posts />,
        loader: redirectNotLogged,
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
