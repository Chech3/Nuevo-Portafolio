import React, { useEffect, useState } from "react";
import Image from "next/image";

function DarkButton({ ancho, alto }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="transition-transform duration-300 transform hover:scale-125 active:scale-95 hover:rotate-12 flex items-center justify-center focus:outline-none"
      aria-label="Toggle theme"
    >
      <Image className="dark:hidden" alt="sol" width={ancho} height={alto} src="/lunaluna.png" />
      <Image className="hidden dark:block" alt="luna" width={ancho} height={alto} src="/solsol.png" />
    </button>
  );
}

export default DarkButton;
