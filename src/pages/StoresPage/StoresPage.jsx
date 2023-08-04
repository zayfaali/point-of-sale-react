import React from "react";
import { Routes, Route } from "react-router-dom";
import StoresPreview from "../../components/StoresPreview/StoresPreview";
import ItemsMap from "../../components/Items/ItemsMap";
const StoresPage = () => {
  return (
    <>
      <Routes>
        <Route index element={<StoresPreview />} />
        <Route path=":number" element={<ItemsMap />} />
      </Routes>
    </>
  );
};

export default StoresPage;
