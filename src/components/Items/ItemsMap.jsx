import React from "react";
import { useParams } from "react-router-dom";

const ItemsMap = () => {
  const { number } = useParams();
  console.log(number);
  return (
    <div>
      <h1>this is the itemsMap</h1>
    </div>
  );
};

export default ItemsMap;
