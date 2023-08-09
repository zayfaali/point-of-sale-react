import React from "react";
import { Route, Routes } from "react-router-dom";
import StoresPreview from "../../components/StoresPreview/StoresPreview";
import DisplayItems from "../../components/DisplayItems/DisplayItems";

const StoreRouting = () => {
  return (
    <Routes>
      <Route index element={<StoresPreview />} />
      <Route path=":storeid" element={<DisplayItems />} />
    </Routes>
  );
};

export default StoreRouting;
