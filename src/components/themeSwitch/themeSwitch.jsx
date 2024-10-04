import { useState, useEffect } from "react";
import storageManager from "../../storageManager.js";
import IconButton from "../iconButton/iconButton.jsx";

function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setInitialTheme();
  }, []);

  console.log("that led me to a new verse")
  console.log(storageManager.getItem("dark"), dark)

  let icon = "";
  if (dark) {
    console.log("where the theme is dark")
    icon = "/sun.svg";
    document.body.classList.add("dark");
  } else {
    console.log("where the theme is light")
    icon = "/crescent-moon.svg";
    document.body.classList.remove("dark");
  }

  function saveTheme(value) {
    console.log("lets use it")
    storageManager.setItem("dark", value);
    setDark(value);
  }

  function swichTheme() {
    saveTheme(!dark);
  }

  function setInitialTheme() {
    console.log("init theme");
    const storedTheme = storageManager.getItem("dark");
    if (storedTheme === null) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      setDark(prefersDark);
    } else {
      console.log("looks like it is there")
      saveTheme(storedTheme);
    }
  }

  return <IconButton iconSrc={icon} onClick={swichTheme} />;
}

export default ThemeSwitch;
