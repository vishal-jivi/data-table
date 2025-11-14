import { useDataTableContext } from "./dataTable.context";
import { styles } from "./styles";

export function TableHeader<T>() {
  const { columns, sortConfig, setSortConfig } = useDataTableContext<T>();

  const handleSort = (key: keyof T, sortable?: boolean) => {
    if (sortable === false) return;

    const next: { key: keyof T; direction: "asc" | "desc"; } | null = !sortConfig || sortConfig.key !== key
      ? { key, direction: 'asc' }
      : (sortConfig.direction === 'asc'
          ? { key, direction: 'desc' }
          : null);

    setSortConfig(next);
  };

  return (
    <thead>
      <tr style={styles.headerRow}>
        {columns.map(col => (
          <th
            key={String(col.key)}
            onClick={() => handleSort(col.key, col.sortable)}
            style={{
              ...styles.headerCell,
              cursor: col.sortable !== false ? 'pointer' : 'default'
            }}
          >
            <div style={styles.headerContent}>
              {col.label}
              {sortConfig?.key === col.key && (
                <span style={styles.sortIndicator}>
                  {sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}