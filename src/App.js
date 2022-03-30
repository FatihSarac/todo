import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Grid } from "@mui/material";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Grid>
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;
