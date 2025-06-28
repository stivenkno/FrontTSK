"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { useProjects } from "@/hooks/useProjects";
import { useColumns } from "@/hooks/use-columns";
import { useTasks } from "@/hooks/use-tasks";
import { Project } from "@/types/projects";
import { Column } from "@/types/columns";
import { Task } from "@/types/tasks";

import { useEffect } from "react";

import { MdDelete } from "react-icons/md";

export default function Page() {
  const { projects, setProjects, fetchProjects, createProject, deleteProject } =
    useProjects();

  const { columns, setColumns, fetchColumns, createColumn, deleteColumn } =
    useColumns();

  const { tasks, setTasks, fetchTasks, createTask, deleteTask } = useTasks();

  useEffect(() => {
    fetchProjects();
    fetchColumns();
    fetchTasks();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex w-full lg:max-w-[calc(100%-var(--sidebar-width))] flex-col gap-4 p-4">
          <div className="min-w-full h-[20px] flex justify-end items-center">
            <button
              className="text-[var(--color-primary-foreground)] bg-[var(--color-primary)] rounded text-center px-5 py-2 hover:brightness-110 transition hover:cursor-pointer"
              onClick={() =>
                createColumn({
                  name: "New Column",
                  position: columns.length,
                  id_project: "2",
                })
              }
            >
              + Create Column
            </button>
          </div>

          <div className="bg-[color-mix(in srgb, var(--color-muted) 50%, transparent)] min-w-full rounded md:min-h-min text-3xl flex gap-2 overflow-x-auto p-2">
            {columns.map((column: Column) => (
              <div
                key={column.id_column}
                className="min-w-[300px] sm:min-w-[250px] lg:min-w-[300px] h-[500px] rounded-[var(--radius-xl)] bg-[var(--color-card)] text-[var(--color-card-foreground)] shadow-lg border border-[var(--color-border)] p-5 flex flex-col justify-between hover:shadow-2xl transition-all"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b pb-2 border-[var(--color-border)]">
                  <h2 className="text-xl font-semibold">{column.name}</h2>
                  <div className="w-6 h-6 bg-[var(--color-sidebar-accent)] text-[var(--color-sidebar-accent-foreground)] rounded-full flex items-center justify-center text-xs font-bold">
                    {columns.length}
                  </div>
                  <MdDelete
                    className="hover:cursor-pointer hover:text-[var(--color-destructive)]"
                    onClick={() => deleteColumn(column.id_column)}
                  />
                </div>

                <div className="flex-1 text-sm bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded p-3 mb-4 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="italic">
                      Aquí iría una descripción del proyecto o tareas.
                    </p>
                  </div>
                  <button className="mt-3 w-full h-[30px] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-[var(--radius-md)] hover:brightness-110 transition hover:cursor-pointer">
                    + Añadir Tarea
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
