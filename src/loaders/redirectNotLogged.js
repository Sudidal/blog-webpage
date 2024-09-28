import blogApi from "../blogAPI.js";
import { redirect } from "react-router-dom";

async function redirectNotLogged() {
  const res = await blogApi.isLoggedIn();
  if (res === false) return redirect("/login");
  else return null;
}

export default redirectNotLogged;
