import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  SELECT_PROJECT
} from "./actionTypes";
import { fetchProjects } from "../api/projectsApi";

export const getProjects = () => dispatch => {
  dispatch({
    type: FETCH_PROJECTS
  });
  fetchProjects("projects", "GET")
    .then(projects => {
      dispatch({
        type: FETCH_PROJECTS_SUCCESS,
        payload: projects.data.projects
      });
    })
    .catch(error => console.log("Error fetching projects", error));
};

export const selectProject = project => {
  return {
    type: SELECT_PROJECT,
    payload: project
  };
};
