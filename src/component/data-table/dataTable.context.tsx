import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { Column, DataTableContextValue } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataTableContext = createContext<DataTableContextValue<any> | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useDataTableContext<T>() {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error('DataTable components must be used within DataTableProvider');
  }
  return context as DataTableContextValue<T>;
}

export function DataTableProvider<T>({ 
  children, 
  data, 
  columns,
  onRowSelect 
}: { 
  children: React.ReactNode;
  data: T[];
  columns: Column<T>[];
  onRowSelect?: (row: T | null) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
  const [selectedRow, setSelectedRow] = useState<T | null>(null);

  const handleRowSelect = useCallback((row: T | null) => {
    setSelectedRow(row);
    onRowSelect?.(row);
  }, [onRowSelect]);

  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Filter
    if (searchTerm) {
      result = result.filter(row =>
        columns.some(col => {
          const value = row[col.key];
          return String(value).toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }

    // Sort
    if (sortConfig) {
      result.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        
        if (aVal === bVal) return 0;
        
        const comparison = aVal < bVal ? -1 : 1;
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  }, [data, columns, searchTerm, sortConfig]);

  const value: DataTableContextValue<T> = {
    data,
    columns,
    searchTerm,
    setSearchTerm,
    sortConfig,
    setSortConfig,
    selectedRow,
    setSelectedRow: handleRowSelect,
    filteredAndSortedData
  };

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
}