export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
}

export interface DataTableContextValue<T> {
  data: T[];
  columns: Column<T>[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortConfig: { key: keyof T; direction: 'asc' | 'desc' } | null;
  setSortConfig: (config: { key: keyof T; direction: 'asc' | 'desc' } | null) => void;
  selectedRow: T | null;
  setSelectedRow: (row: T | null) => void;
  filteredAndSortedData: T[];
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowSelect?: (row: T | null) => void;
  searchPlaceholder?: string;
  className?: string;
}