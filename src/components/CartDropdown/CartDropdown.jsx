import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.styles.css";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item._id} cartItem={item} />
        ))}
      </div>
      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
