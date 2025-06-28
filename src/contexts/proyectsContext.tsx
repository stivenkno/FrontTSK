"use client";

import { createContext, useContext, useState } from "react";
import type { Project, ProjectContextType } from "@/types/projects";

const ProyectsContext = createContext<ProjectContextType | null>(null);

export function ProyectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <ProyectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProyectsContext.Provider>
  );
}

export function useProyects() {
  const context = useContext(ProyectsContext);
  if (!context) {
    throw new Error("useProyects must be used within a ProyectsProvider.");
  }
  return context;
}
