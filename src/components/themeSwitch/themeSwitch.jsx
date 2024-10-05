import { useState, useEffect } from "react";
import storageManager from "../../storageManager.js";
import IconButton from "../iconButton/iconButton.jsx";

function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setInitialTheme();
  }, []);


  let icon = "";
  if (dark) {
    icon = "/sun.svg";
    document.body.classList.add("dark");
  } else {
    icon = "/crescent-moon.svg";
    document.body.classList.remove("dark");
  }

  function saveTheme(value) {
    storageManager.setItem("dark", value);
    setDark(value);
  }

  function swichTheme() {
    saveTheme(!dark);
  }

  function setInitialTheme() {
    const storedTheme = storageManager.getItem("dark");
    if (storedTheme === null) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      setDark(prefersDark);
    } else {
      saveTheme(storedTheme);
    }
  }

  return <IconButton iconSrc={icon} onClick={swichTheme} />;
}

export default ThemeSwitch;
