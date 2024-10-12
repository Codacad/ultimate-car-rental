import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Services from "./routes/Services.jsx";
import Cars from "./routes/Cars.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import "./config/i18next.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/cars", element: <Cars /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <React.Suspense>
        <App />
      </React.Suspense>
    </RouterProvider>
  </StrictMode>
);
