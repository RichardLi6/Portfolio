"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark"; // define theme type

export default function ThemeSwitch() {
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


  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
            border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center 
        hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? 
          <BsSun /> : <BsMoon />}
    </button>
  );
}
