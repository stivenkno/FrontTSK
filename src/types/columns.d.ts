interface Column {
  id_column: number;
  name: string;
  position: number;
  id_project: number;
  created_at: Date;
  update_at: Date;
}

type ColumnContextType = {
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
};

export type { Column, ColumnContextType };
