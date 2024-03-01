import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ApiContextProvider from "./context/apiEfemerides.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContextProvider>
      <RouterProvider router={router} />
    </ApiContextProvider>
  </React.StrictMode>
);
