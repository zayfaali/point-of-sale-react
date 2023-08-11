import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.styles.css";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const navigateToCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item._id} cartItem={item} />
        ))}
      </div>
      <Button onClick={navigateToCheckOut}>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
