import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useApi } from "../../context/apiEfemerides";

const Home = () => {
  const { statusSv, loading } = useApi();
  const [efemeride, setEfemeride] = useState("");

  useEffect(() => {
    setEfemeride(statusSv);
  }, [statusSv]);

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-20">
      <h1 className="md:text-7xl text-5xl text-center font-bold">
        ¿Que paso un dia como hoy?
      </h1>
      {!loading ? (
        <div
          className={`flex min-h-60 w-8/12 border rounded-3xl p-10 items-center ${
            efemeride != "" ? "border-green-400" : "border-red-500"
          }`}
        >
          {efemeride == "" ? (
            <div className="flex flex-col justify-center items-center w-full gap-5">
              <p>Puede que el servidor no este disponible.</p>
              <NavLink to="/about">
                <button className="border p-2 border-white rounded-2xl shadow-black shadow-lg transition-all active:scale-[0.9] hover:border-black hover:text-black hover:bg-white">
                  Conoce el proyecto
                </button>
              </NavLink>
            </div>
          ) : (
            <p>{efemeride}</p>
          )}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      {efemeride != "" ? (
        <a
          href={`https://www.google.com/search?q=${efemeride}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border p-2 border-white rounded-2xl shadow-black shadow-lg transition-all active:scale-[0.9] hover:border-black hover:text-black hover:bg-white"
        >
          Mas informacion
        </a>
      ) : null}
    </div>
  );
};

export default Home;
