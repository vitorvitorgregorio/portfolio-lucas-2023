import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/styles/css/reset.css";
import "../src/styles/sass/Variables.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Arquivo from "./routes/Arquivo";
import FineApp from "./routes/projects/FineApp";
import StartEmpreendedor from "./routes/projects/StartEmpreendedor";
/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Arquivo",
    element: <Arquivo />,
  },
]); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "arquivo",
        element: <Arquivo />,
      },
      {
        path: "fineapp",
        element: <FineApp />,
      },
      {
        path: "startempreendedor",
        element: <StartEmpreendedor />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
