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
    <div className="min-h-[calc(90vh-80px)] flex flex-col justify-center items-center gap-20 mt-10 mb-10 md:mt-0 md:mb-0">
      <h1 className="md:text-7xl text-5xl text-center font-bold">
        ¿Que paso un dia como hoy?
      </h1>
      {!loading ? (
        <div
          className={`flex min-h-60 w-10/12 md:w-8/12 border rounded-3xl p-14 pb-10 md:p-10 items-center ${
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
            <div>
              <p>{efemeride}</p>
              <p className="text-end font-thin mt-5">OpenAI</p>
            </div>
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
