import { Grid } from "@mui/material";
import React from "react";
import { Text } from "./HeaderStyle";

const Header = () => {
  return (
    <Grid item xs={12}>
      <Text>To Do List</Text>
    </Grid>
  );
};

export default Header;
