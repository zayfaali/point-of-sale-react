import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarWithDrawer/NavBar";
import HomePage from "./components/Home/Home";
import AdminSignIn from "./components/AdminSignIn/AdminSignIn";
import StoreRouting from "./pages/StoreRouting/StoreRouting";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import CheckOut from "./pages/CheckOut/CheckOut";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="stores/*" element={<StoreRouting />} />
          <Route path="signin" element={<AdminSignIn />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
