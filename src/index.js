import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./context/admin.context";
import { StoreProvider } from "./context/stores.context";
import { ItemProvider } from "./context/items.context";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <StoreProvider>
          <ItemProvider>
            <App />
          </ItemProvider>
        </StoreProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
