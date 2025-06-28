import { useState } from "react";
import api from "@/apiInstance/apiAxiosInstance";
import { Project } from "@/types/projects";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects/getprojects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  console.log(projects);

  const createProject = async ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => {
    try {
      const response = await api.post("/projects/createproject", {
        name,
        description,
      });
      setProjects([...projects, response.data]);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const deleteProject = async ({ projectId }: { projectId: number }) => {
    try {
      await api.delete(`/projects/deleteproject`, {
        data: { projectId },
      });

      setProjects(
        projects.filter((project) => project.id_project !== projectId)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return {
    projects,
    setProjects,
    fetchProjects,
    createProject,
    deleteProject,
  };
};
