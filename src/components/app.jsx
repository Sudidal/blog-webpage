import Posts from "./posts/posts.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <p>hello</p>
      <Outlet />
      {/* <Posts /> */}
    </div>
  );
}

export default App;
