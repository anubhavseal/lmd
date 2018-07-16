import { tasksApi } from "./lib";
import { makeRequest } from "./api";

export const fetchTasks = () => {
  return makeRequest(tasksApi.root, "GET");
};
