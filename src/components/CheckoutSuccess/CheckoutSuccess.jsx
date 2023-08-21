import React, { useEffect, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { OrderContext } from "../../context/orders.context";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const defaultTheme = createTheme();

const CheckoutSuccess = () => {
  const { cartItems, cartTotal, emptyCart } = useContext(CartContext);
  const { createOrder } = useContext(OrderContext);

  const updateStocks = async () => {
    const response = await fetch(
      "http://localhost:5000/api/item/update-stock",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: cartItems }),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    updateStocks();
  }, []);

  useEffect(() => {
    createOrder(cartItems, cartTotal);
  }, []);

  useEffect(() => {
    emptyCart();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Payment Success
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Order Has Been Place
          </Typography>
          <Link to="/stores">
            <Button variant="contained">Go To Stores</Button>
          </Link>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
};

export default CheckoutSuccess;
