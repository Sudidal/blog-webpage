import blogApi from "../blogAPI.js";
import { redirect } from "react-router-dom";

async function redirectLogged() {
  const res = await blogApi.isLoggedIn();
  if (res === true) return redirect("/");
  else return null;
}

export default redirectLogged;
