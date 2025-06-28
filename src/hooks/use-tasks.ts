import api from "@/apiInstance/apiAxiosInstance";
import { Task } from "@/types/tasks";
import { useState } from "react";

interface createTask {
  title: string;
  description: string;
  position: number;
  id_column: string;
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks/gettasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  console.log(tasks);
  const createTask = async (task: createTask) => {
    try {
      const response = await api.post("/tasks/createtask", task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await api.delete(`/tasks/deletetask`, {
        data: { taskId },
      });
      setTasks(tasks.filter((task) => task.id_task !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return { tasks, setTasks, fetchTasks, createTask, deleteTask };
};
