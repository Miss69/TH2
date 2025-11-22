import React from "react";
import { Box, Typography, Paper } from "@mui/material";

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import images from "../../images";

function formatDate(str) {
  try {
    const d = new Date(str);
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return str;
  }
}

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId) || [];

  if (!photos.length) {
    return <Typography>No photos for this user.</Typography>;
  }

  return (
    <>
      {photos.map((photo) => (
        <Paper key={photo._id} sx={{ p: 2, mb: 2 }}>
          {/* Ảnh */}
          <Box mb={1}>
            <img
              src={images[photo.file_name]}
              alt={photo.file_name}
              style={{ maxWidth: "100%", borderRadius: 4 }}
            />
          </Box>

          <Typography variant="caption" display="block" gutterBottom>
            Taken: {formatDate(photo.date_time)}
          </Typography>

          {/* Comments */}
          {photo.comments?.length ? (
            <Box mt={1}>
              <Typography variant="subtitle2">Comments:</Typography>
              {photo.comments.map((c) => (
                <Box key={c._id} ml={1} mt={0.5}>
                  <Typography variant="caption" display="block">
                    {formatDate(c.date_time)} •{" "}
                    <Link to={`/users/${c.user._id}`}>
                      {c.user.first_name} {c.user.last_name}
                    </Link>
                  </Typography>
                  <Typography variant="body2">{c.comment}</Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No comments
            </Typography>
          )}
        </Paper>
      ))}
    </>
  );
}

export default UserPhotos;
