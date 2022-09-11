import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app/App.component";

import "normalize.css";
import "./styles/Global.module.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
