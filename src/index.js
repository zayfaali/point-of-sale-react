import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./context/admin.context";
import { StoreProvider } from "./context/stores.context";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
