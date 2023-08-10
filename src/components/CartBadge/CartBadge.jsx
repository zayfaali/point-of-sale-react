import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartDropdown from "../CartDropdown/CartDropdown";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartBadge = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartCount} color="info">
        <ShoppingCartOutlinedIcon
          style={{ color: "white" }}
          onClick={handleClick}
        />
        {isCartOpen && <CartDropdown />}
      </StyledBadge>
    </IconButton>
  );
};

export default CartBadge;
