import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StoreProvider } from "./context/StoreContext";
import { SKUProvider } from "./context/SKUContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider>
      <SKUProvider>
        <App />
      </SKUProvider>
    </StoreProvider>
  </BrowserRouter>
);
