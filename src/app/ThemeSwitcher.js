"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const LightIcon = () => (
  <svg
    className="h-6 w-6 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const DarkIcon = () => (
  <svg
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [initialThemeSet, setInitialThemeSet] = useState(false);

  useEffect(() => {
    const storedTheme = sessionStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const currentHour = new Date().getHours();
      const newTheme = currentHour >= 7 && currentHour < 19 ? "light" : "dark";
      setTheme(newTheme);
      sessionStorage.setItem("theme", newTheme);
      setInitialThemeSet(true);
    }
  }, [setTheme]);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    sessionStorage.setItem("theme", newTheme);
  }

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? <DarkIcon /> : <LightIcon />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

