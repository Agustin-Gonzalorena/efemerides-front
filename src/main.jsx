import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ApiContextProvider from "./context/apiEfemerides.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
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
