import React from "react";
import { createContext, useState, useContext, useEffect } from "react";
export const themeContext = createContext();
function ThemeState({ children }) {
  let [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function darkMode() {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
  function lightMode() {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
  return (
    <themeContext.Provider value={{ theme, setTheme, darkMode, lightMode }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeState;
export const useTheme = () => {
  return useContext(themeContext);
};
