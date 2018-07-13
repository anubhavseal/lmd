import React from "react";
import Project from "../container/Project";
import { List } from "@material-ui/core";
import { Grid } from "@material-ui/core";

export class ProjectListContainer extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item md={4} lg={3}>
          <List>
            <Project />
            <Project />
            <Project />
          </List>
        </Grid>
      </Grid>
    );
  }
}
