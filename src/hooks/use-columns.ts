import api from "@/apiInstance/apiAxiosInstance";
import { useState } from "react";
import { Column } from "@/types/columns";

interface CreateColumn {
  name: string;
  position: number;
  id_project: string;
}

export const useColumns = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const fetchColumns = async () => {
    try {
      const response = await api.get("/columns/getcolumns");
      setColumns(response.data);
    } catch (error) {
      console.error("Error fetching columns:", error);
    }
  };

  console.log(columns);
  const createColumn = async (column: CreateColumn) => {
    try {
      const response = await api.post("/columns/createcolumn", column);
      setColumns([...columns, response.data]);
    } catch (error) {
      console.error("Error creating column:", error);
    }
  };

  const deleteColumn = async (columnId: number) => {
    try {
      await api.delete(`/columns/deletecolumn`, {
        data: { id: columnId },
      });
      setColumns(columns.filter((column) => column.id_column !== columnId));
    } catch (error) {
      console.error("Error deleting column:", error);
    }
  };

  return { columns, setColumns, fetchColumns, createColumn, deleteColumn };
};
