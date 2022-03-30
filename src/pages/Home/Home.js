import { Grid } from "@mui/material";
import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
const Home = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} lg={4}>
        <Header />
        <Form />
        <List />
      </Grid>
    </Grid>
  );
};

export default Home;
