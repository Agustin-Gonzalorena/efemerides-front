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
      <Link to="/about" className="text-white underline">
        <p>Conocer el proyecto</p>
      </Link>
      <p className="text-white text-center pt-5">
        © {date} - Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
