import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvaider from "./context/ContextProvaider";
import Documentation from "./pages/Documentation";
import Home from "./pages/Home";
import Layout from "./pages/layouts/Layout";
import React from "react";
import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/docs",
        element: <Documentation />,
      },
      {
        path: "/*",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvaider>
      <RouterProvider router={router} />
      <SpeedInsights />
    </ContextProvaider>
  </React.StrictMode>
);
