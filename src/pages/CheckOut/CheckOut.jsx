import React, { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import CheckOutTable from "../../components/CheckOutTable/CheckOutTable";
import { CartContext } from "../../context/cart.context";

const defaultTheme = createTheme();

const CheckOut = () => {
  const { cartTotal } = useContext(CartContext);
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              CheckOut
            </Typography>
          </Container>
          <CheckOutTable />
          <Typography
            component="h1"
            variant="h2"
            align="right"
            color="text.primary"
            gutterBottom
          >
            {`CartTotal : ${cartTotal}`}
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CheckOut;
