interface Project {
  id_project: number;
  name: string;
  description: string;
  id_user: number;
  created_at: Date;
  update_at: Date;
}

type ProjectContextType = {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

export type { Project, ProjectContextType };
