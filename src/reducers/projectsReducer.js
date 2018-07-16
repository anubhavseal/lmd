import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  SELECT_PROJECT
} from "../actions/actionTypes";

const INITIAL_STATE = {
  projects: [],
  selectedProject: null
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        selectedProject: action.payload[0]
      };
    case SELECT_PROJECT:
      return { ...state, selectedProject: action.payload };
    default:
      return state;
  }
};
