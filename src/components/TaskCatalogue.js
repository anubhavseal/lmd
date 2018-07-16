import React from "react";
import { TaskCard } from "./TaskCard";

export const TaskCatalogue = props => {
  const { selectedProject, tasks, startTask } = props;
  const filteredTasks = [];
  tasks.forEach(task => {
    if (selectedProject && task["project_id"] === selectedProject["id"]) {
      filteredTasks.push(
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
        />
      );
    }
  });
  return filteredTasks;
};
