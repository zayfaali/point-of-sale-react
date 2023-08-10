import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./context/admin.context";
import { StoreProvider } from "./context/stores.context";
import { ItemProvider } from "./context/items.context";
import { CartProvider } from "./context/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <StoreProvider>
          <ItemProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ItemProvider>
        </StoreProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
