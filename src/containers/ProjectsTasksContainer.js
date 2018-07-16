import React from "react";
import { List, Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { getProjects, selectProject } from "../actions/projectActions";
import { getTasks } from "../actions/taskActions";
import { ProjectCatalogueRow } from "../components/ProjectCatalogueRow";
import { TaskCatalogue } from "../components/TaskCatalogue";

class ProjectsTasksContainer extends React.Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getTasks();
  }

  render() {
    const { tasks, selectedProject } = this.props;
    return (
      <Grid container>
        <Grid item md={4} lg={3}>
          <List>{this.renderProjectList()}</List>
        </Grid>
        <Grid item md={4} lg={7}>
          <TaskCatalogue
            selectedProject={selectedProject}
            tasks={tasks}
            startTask={this.startTask.bind(this)}
          />
        </Grid>
      </Grid>
    );
  }

  renderProjectList() {
    const { projects } = this.props;
    return projects.map(project => {
      const { id, name, description } = project;
      return (
        <ProjectCatalogueRow
          key={id}
          title={name}
          subtitle={description}
          onClick={this.selectProject.bind(this, project)}
        />
      );
    });
  }

  selectProject(project) {
    this.props.selectProject(project);
  }

  startTask(task) {
    this.props.startTask(task);
  }
}

const mapStateToProps = state => {
  const { projects, selectedProject } = state.projectsReducer;
  const { tasks } = state.tasksReducer;
  return { projects, tasks, selectedProject };
};
export default connect(
  mapStateToProps,
  { getProjects, getTasks, selectProject }
)(ProjectsTasksContainer);
