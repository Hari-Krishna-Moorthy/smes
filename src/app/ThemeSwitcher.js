"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const {theme, setTheme } = useTheme();
  
  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log('current hour --->  :',currentHour);
    // Assuming light mode from 7 AM to 7 PM, and dark mode from 7 PM to 7 AM
    if (currentHour >= 7 && currentHour < 19) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log('theme set  --->  :',theme);
  }, []);
  
  return (
    <div>
      <button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
