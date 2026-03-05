// This will be use inside index.js for routerBlog structure

import { createContext, useState } from "react";
// Create Context
const ThemeContext = createContext();

// Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // default value ligth

  // Toggle theme for button
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export
export { ThemeContext, ThemeProvider };
