"use client";

import React, { createContext, use, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark"; // define theme type

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | null>(null); // create context with null value representing theme context which will be used to provide theme to all components

export default function ThemeContextProvider({
     children 
    }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light"); // default theme is light

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark"); // save theme dark to local storage
      document.documentElement.classList.add("dark"); // add dark class to html element
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light"); // save theme light to local storage
      document.documentElement.classList.remove("dark"); // remove dark class from html element
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null; // get theme from local storage

    if (localTheme) {
      setTheme(localTheme); // set theme from local storage, basically means user has already selected a theme so we will use that theme on page load
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark"); // add dark class to html element if theme is dark
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark"); // set theme to dark if user's system theme is dark
      document.documentElement.classList.add("dark"); // add dark class to html element
    }
  }, []);

  return <ThemeContext.Provider value={{
    theme, 
    toggleTheme
    }}>{children}
  </ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}