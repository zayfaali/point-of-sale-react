import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddStoreModal from "../AddStoreModal/AddStoreModal";
import { StoreContext } from "../../context/stores.context";
import { Link } from "react-router-dom";
import EditStoreModal from "../EditStoreModal/EditStoreModal";

const defaultTheme = createTheme();

const StoresPreview = () => {
  const { getStores, stores } = useContext(StoreContext);

  useEffect(() => {
    getStores();
  }, []);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

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
                Stores
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <AddStoreModal />
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {stores.map((store) => (
                <Grid item key={store._id} xs={12} sm={6} md={4}>
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
                    <Link
                      to={`/stores/${store._id}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: "56.25%",
                        }}
                        image={`${store.storePic}`}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {store.storeName}
                        </Typography>
                        <Typography>{store.storeDesc}</Typography>
                      </CardContent>
                    </Link>
                    <CardActions
                      sx={{
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <EditStoreModal storeId={store._id} />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box
          sx={{ bgcolor: "background.paper", p: 6 }}
          component="footer"
        ></Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
};

export default StoresPreview;
