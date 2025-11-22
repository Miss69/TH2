import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const { pathname } = useLocation();

  let rightText = "";
  if (pathname === "/users") {
    rightText = "Users";
  } else if (pathname.startsWith("/users/")) {
    const userId = pathname.split("/")[2]; // tách userId
    const u = models.userModel(userId);
    if (u) rightText = `${u.first_name} ${u.last_name}`;
  } else if (pathname.startsWith("/photos/")) {
    const userId = pathname.split("/")[2]; // tách userId
    const u = models.userModel(userId);
    if (u) rightText = `Photos of ${u.first_name} ${u.last_name}`;
  }

  return (
    <AppBar className="topbar-appBar" position="fixed">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">B22DCAT276</Typography>
        <Typography variant="h6">{rightText}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
