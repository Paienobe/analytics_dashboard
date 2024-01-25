import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContext.tsx";
import { GlobalContextProvider } from "./context/GlobalContext/GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
