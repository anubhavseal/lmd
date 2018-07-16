import { combineReducers } from "redux";

import { projectsReducer } from "./projectsReducer";
import { tasksReducer } from "./taskReducer";

export default combineReducers({
  projectsReducer,
  tasksReducer
});
