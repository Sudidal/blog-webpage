import { createBrowserRouter } from "react-router-dom";
import App from "./components/app.jsx";
import Posts from "../routes/posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Whoops, that&apos;s an ugly error page that i need to change</h1>,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:postId",
        element: <p>That is a cool post you are viewing</p>
      }
    ],
  },
]);

export default router;
