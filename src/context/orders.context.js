import { createContext, useState } from "react";

const host = process.env.REACT_APP_API_HOST;

export const OrderContext = createContext({
  orders: [],
  setOrders: () => null,
});

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const createOrder = async (cartItems, cartTotal) => {
    const apiUrl = `${host}/api/order/create-order`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems: cartItems, totalPrice: cartTotal }),
    });
    const newOrder = await response.json();
    console.log(newOrder);
  };

  //GET ALL ORDERS
  const getOrders = async () => {
    const apiUrl = `${host}/api/order/getorders`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const allOrders = await response.json();
    setOrders(allOrders);
  };

  const value = { orders, setOrders, createOrder, getOrders };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
