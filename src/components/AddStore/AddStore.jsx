import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { StoreContext } from "../../context/stores.context";

const defaultTheme = createTheme();

const AddStore = () => {
  const { addStore } = useContext(StoreContext);
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let formFields = {
      storeName: data.get("storeName"),
      storePic: data.get("storePic"),
      storeDesc: data.get("storeDesc"),
    };
    const storeLocation = location;
    console.log(formFields);
    console.log(storeLocation);
    const { storeName, storeDesc, storePic } = formFields;
    await addStore(storeName, storeDesc, storePic, storeLocation);
    event.target.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Add Store
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="storeName"
                  required
                  fullWidth
                  id="storeName"
                  label="Store Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="storePic"
                  label="Store Picture URL"
                  name="storePic"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="storeDesc"
                  label="Store Description"
                  name="storeDesc"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Store Location
                </InputLabel>
                <Select
                  labelId="Store Location"
                  id="storeLocation"
                  value={location}
                  label="Store Location"
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value={"Rawalpindi"}>Rawalpindi</MenuItem>
                  <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
                  <MenuItem value={"Lahore"}>Lahore</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Store
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddStore;
