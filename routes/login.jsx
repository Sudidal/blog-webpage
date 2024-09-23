import blogApi from "../blogAPI.js";

function Login() {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault()
        blogApi.login(ev.target["0"].value, ev.target["1"].value);
      }}
    >
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
