import React, { useEffect, useState } from "react";
// import darkButton from "/modo-oscuro.png";
import Image from "next/image";

function DarkButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar si el modo oscuro está activado en el almacenamiento local
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    // Guardar el estado del tema en el almacenamiento local
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <button onClick={toggleTheme}>
      <Image alt="Cambio de modo" width={38} height={38} src="/modo-oscuro.png" />
    </button>
  );
}

export default DarkButton;
