import blogApi from "../blogAPI.js";

function Register() {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault()
        blogApi.register(ev.target["0"].value, ev.target["1"].value, ev.target["2"].value, ev.target["3"].value);
      }}
    >
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="confirm-password"
        placeholder="confirm-password"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
