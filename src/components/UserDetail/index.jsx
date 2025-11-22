import React from "react";
import { Typography, Box, Button } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  const fullName = `${user.first_name} ${user.last_name}`;

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        {fullName}
      </Typography>
      <Typography>Location: {user.location}</Typography>
      <Typography>Occupation: {user.occupation}</Typography>
      <Typography>Description: {user.description}</Typography>

      <Box mt={2}>
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={`/photos/${userId}`}
        >
          Photos of {fullName}
        </Button>
      </Box>
    </Box>
  );
}

export default UserDetail;
