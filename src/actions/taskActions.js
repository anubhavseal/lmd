import { FETCH_TASKS, FETCH_TASKS_SUCCESS, START_TASK } from "./actionTypes";
import { fetchTasks } from "../api/tasksApi";

export const getTasks = () => dispatch => {
  dispatch({
    type: FETCH_TASKS
  });
  fetchTasks().then(projects => {
    dispatch({
      type: FETCH_TASKS_SUCCESS,
      payload: projects.data.tasklogs
    });
  });
};

export const startTask = task => {
  task["startedAt"] = Date.now();
  return {
    type: START_TASK,
    payload: task
  };
};
