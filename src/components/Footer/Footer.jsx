import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    setDate(year);
  }, []);
  return (
    <div className="bg-black min-h-28 flex flex-col items-center p-4 gap-5">
      <a href="/">
        <img
          src="/vite.svg"
          alt="home"
          className="h-14 border-white border-2 rounded-full"
        />
      </a>
      <Link to="/about" className="text-white hover:underline transition-all ">
        <p>Conocer el proyecto</p>
      </Link>
      <div className="flex items-center gap-2 md:gap-5 flex-col md:flex-row text-xs">
        <p className="text-white text-center">
          © {date} - Todos los derechos reservados.
        </p>
        <a
          href="https://github.com/Agustin-Gonzalorena"
          title="mi github"
          target="_blank"
          rel="noopener noreferrer"
          className="active:scale-[0.9] hover:underline hover:text-white transition-all"
        >
          <p>By Agustin Gonzalorena</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
