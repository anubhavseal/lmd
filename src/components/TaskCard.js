import React from "react";
import {
  Typography,
  Card,
  CardActions,
  Button,
  CardContent
} from "@material-ui/core";

export const TaskCard = props => {
  const { startTask } = props;
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">Word of the Day</Typography>
        <Typography variant="headline" component="h2">
          {props.title}
        </Typography>
        <Typography color="textSecondary">adjective</Typography>
        <Typography component="p">
          well meaning and kindly.<br />
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Start</Button>
        <Button size="small">Stop</Button>
      </CardActions>
    </Card>
  );
};
