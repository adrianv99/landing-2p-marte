import { useState, useEffect } from "react";

const DarkThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference on initial load
    const storedTheme = localStorage.getItem("darkTheme");
    setDarkTheme(storedTheme === "true");
  }, []);

  useEffect(() => {
    // Update the HTML tag class when dark theme changes
    document.documentElement.classList.toggle("dark", darkTheme);
    // Store theme preference in local storage for persistence
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <button onClick={toggleTheme} type="button">
      {darkTheme ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" strokeLinejoin="round" />
            <path
              strokeLinecap="round"
              d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"
            />
          </g>
        </svg>
      )}
    </button>
  );
};

export default DarkThemeButton;
