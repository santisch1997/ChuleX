import React, { useEffect } from "react";

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("isDarkTheme")) ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return <div>{children}</div>;
};