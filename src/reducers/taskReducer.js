import {
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  START_TASK
} from "../actions/actionTypes";

const INITIAL_STATE = {
  tasks: []
};

export const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
