import React, { useState, useEffect, createContext, useContext } from "react";

const key = import.meta.env.VITE_SHARED_KEY;
const urlApi = import.meta.env.VITE_URL_API;

const api = createContext();
export const useApi = () => {
  return useContext(api);
};

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-shared-key": key,
  },
};

const ApiContextProvider = ({ children }) => {
  const [statusSv, setStatusSv] = useState(".");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(urlApi, options)
      .then((res) => res.json())
      .then((res) => {
        setStatusSv(res.results.text);
        setLoading(false);
      })
      .catch((err) => {
        setStatusSv("");
        setLoading(false);
        console.log(err);
      });
  }, []);

  return <api.Provider value={{ statusSv, loading }}>{children}</api.Provider>;
};

export default ApiContextProvider;
