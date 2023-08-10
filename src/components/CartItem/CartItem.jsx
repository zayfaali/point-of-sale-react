import React from "react";
import "./CartItem.styles.css";
const CartItem = ({ cartItem }) => {
  const { itemName, itemPic, itemPrice, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={itemPic} alt={`${itemName}`} />
      <div className="item-details">
        <span className="name">{itemName}</span>
        <span className="price">
          {quantity} x ${itemPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
