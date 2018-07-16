import { projectsApi } from "./lib";
import { makeRequest } from "./api";

export const fetchProjects = () => {
  console.log(projectsApi);
  return makeRequest(projectsApi.root, "GET");
};
