import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel(); //The model comes in from models.userListModel()
  return (
    <div>
      <Typography variant="body1">User List</Typography>

      <List component="nav">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem disablePadding>
              {/* Khi click → đi tới /users/:id */}
              <ListItemButton component={Link} to={`/users/${user._id}`}>
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                  secondary={user.occupation || user.location}
                />
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;
