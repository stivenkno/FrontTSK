"use client";

import { createContext, useContext, useState } from "react";

import type { Column, ColumnContextType } from "@/types/columns";

const ColumnsContext = createContext<ColumnContextType | null>(null);

export function ColumnsProvider({ children }: { children: React.ReactNode }) {
  const [columns, setColumns] = useState<Column[]>([]);
  return (
    <ColumnsContext.Provider value={{ columns, setColumns }}>
      {children}
    </ColumnsContext.Provider>
  );
}

export function useColumns() {
  const context = useContext(ColumnsContext);
  if (!context) {
    throw new Error("useColumns must be used within a ColumnsProvider");
  }
  return context;
}
