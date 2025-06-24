interface Task {
  id_task: number;
  title: string;
  description: string;
  position: number;
  id_column: number;
  created_at: Date;
  update_at: Date;
}

type TasksContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export type { Task, TasksContextType };
