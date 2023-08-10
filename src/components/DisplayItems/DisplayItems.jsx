import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddItemModal from "../AddItemModal/AddItemModal";
import { ItemContext } from "../../context/items.context";
import { StoreContext } from "../../context/stores.context";
import { CartContext } from "../../context/cart.context";

const defaultTheme = createTheme();

const DisplayItems = () => {
  const { getItems, items } = useContext(ItemContext);
  const { addItemToCart } = useContext(CartContext);

  const {
    setCurrentStore,
    currentStore,
    getCurrentStoreDetails,
    currentStoreDetails,
  } = useContext(StoreContext);

  const { storeid } = useParams();

  useEffect(() => {
    setCurrentStore(storeid);
    getItems(storeid);
    getCurrentStoreDetails(storeid);
  }, []);

  console.log("the current store is", currentStore);
  console.log("the current items are ", items);
  console.log("the current store details are ", currentStoreDetails);

  const { storeName, storeDesc } = currentStoreDetails;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            {storeName}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
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
              {storeName}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {storeDesc}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <AddItemModal />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Array.isArray(items) && items.length > 0 ? (
              items.map((item) => (
                <Grid item key={item._id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    variant="outlined"
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%",
                      }}
                      image={`${item.itemPic}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.itemName}
                      </Typography>
                      <Typography align="center" variant="h6">
                        Price : {item.itemPrice}
                      </Typography>
                      <Typography align="center" variant="h6">
                        {item.itemDesc}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Button onClick={() => addItemToCart(item)}>
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h6">No items available.</Typography>
            )}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default DisplayItems;
