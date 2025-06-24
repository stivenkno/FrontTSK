import { useState } from "react";
import api from "@/apiInstance/apiAxiosInstance";
import { Project } from "@/types/projects";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const createProject = async (project: Project) => {
    try {
      const response = await api.post("/projects", project);
      setProjects([...projects, response.data]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const updateProject = async (projectId: number, updatedProject: Project) => {
    try {
      const response = await api.put(`/projects/${projectId}`, updatedProject);
      setProjects(
        projects.map((project) =>
          project.id_project === projectId ? response.data : project
        )
      );
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const deleteProject = async (projectId: number) => {
    try {
      await api.delete(`/projects/${projectId}`);
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
    updateProject,
    deleteProject,
  };
};
