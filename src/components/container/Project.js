import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import ArrowForward from "@material-ui/icons/ArrowForward";

export default () => (
  <ListItem>
    <ListItemAvatar>
      <FlightTakeoff color="primary" />
    </ListItemAvatar>
    <ListItemText primary="Hello World" secondary="AirBnb" />
    <ListItemSecondaryAction>
      <IconButton color="secondary">
        <ArrowForward />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
