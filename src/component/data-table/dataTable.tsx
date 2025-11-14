import { DataTableProvider } from "./dataTable.context";
import { TableBody } from "./tableBody";
import { TableHeader } from "./tableHeader";
import { styles } from "./styles";
import type { DataTableProps } from "./types";
import { SearchBar } from "./searchBar";

export function DataTable<T>({
  data,
  columns,
  onRowSelect,
  searchPlaceholder = 'Search...',
  className = ''
}: DataTableProps<T>) {
  return (
    <DataTableProvider data={data} columns={columns} onRowSelect={onRowSelect}>
      <div style={styles.container} className={className}>
        <SearchBar<T> placeholder={searchPlaceholder} />
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <TableHeader<T> />
            <TableBody<T> />
          </table>
        </div>
      </div>
    </DataTableProvider>
  );
}