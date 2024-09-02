import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import appRouter from "./utils/appRouter";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
