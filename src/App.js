import "./App.css";

import React from "react";
import { Grid, Typography, Paper, Toolbar } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = (props) => {
  return (
    <Router>
      <TopBar />
      <Toolbar /> {/* spacer đúng cao AppBar */}
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Paper className="main-grid-item">
            <UserList />
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="main-grid-item">
            <Routes>
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/photos/:userId" element={<UserPhotos />} />
              <Route
                path="/users"
                element={
                  <Typography variant="body1" sx={{ p: 2 }}>
                    Select a user from the left.
                  </Typography>
                }
              />
            </Routes>
          </Paper>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
