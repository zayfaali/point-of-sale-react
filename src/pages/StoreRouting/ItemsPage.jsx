import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../../context/items.context";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

const ItemsPage = () => {
  const { getAllItems, allItems } = useContext(ItemContext);

  useEffect(() => {
    getAllItems();
  }, []);

  const [sortingString, setSortingString] = useState("");

  const handleChange = (event) => {
    setSortingString(event.target.value);
    getAllItems(event.target.value);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            All Items
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
              All Items
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Items of all the stores are displayed here, You can sort them by
              using the sorting selector below
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="sortingStringSelector">Sort Items</InputLabel>
                  <Select
                    labelId="sortingSelectorLabel"
                    id="SortingSelector"
                    value={sortingString}
                    label="Sort By"
                    onChange={handleChange}
                  >
                    <MenuItem value={`priceascending`}>
                      Price Ascending
                    </MenuItem>
                    <MenuItem value={`pricedescending`}>
                      Price Descending
                    </MenuItem>
                    <MenuItem value={`alphabeticalorder`}>
                      Alphabetical Order
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Array.isArray(allItems) && allItems.length > 0 ? (
              allItems.map((item) => (
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
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
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

export default ItemsPage;
