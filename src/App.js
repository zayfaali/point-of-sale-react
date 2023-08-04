import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarWithDrawer/NavBar";
import HomePage from "./components/Home/Home";
import AdminSignIn from "./components/AdminSignIn/AdminSignIn";
import StoresPage from "./pages/StoresPage/StoresPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="stores/*" element={<StoresPage />} />
          <Route path="signin" element={<AdminSignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
