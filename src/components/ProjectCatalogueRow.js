import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar
} from "@material-ui/core";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import ArrowForward from "@material-ui/icons/ArrowForward";

export const ProjectCatalogueRow = props => {
  const { title, subtitle, onClick } = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FlightTakeoff color="primary" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />
      <ListItemSecondaryAction>
        <IconButton onClick={onClick} color="secondary">
          <ArrowForward />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
