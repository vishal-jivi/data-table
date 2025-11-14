import { useDataTableContext } from "../dataTable.context";
import { HighlightText } from "./highLightText";
import { styles } from "../styles";

export function TableBody<T>() {
  const { columns, filteredAndSortedData, selectedRow, setSelectedRow, searchTerm } = useDataTableContext<T>();

  const handleRowClick = (row: T) => {
    setSelectedRow(selectedRow === row ? null : row);
  };

  if (filteredAndSortedData.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length} style={styles.emptyState}>
            No data found
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {filteredAndSortedData.map((row, idx) => (
        <tr
          key={idx}
          onClick={() => handleRowClick(row)}
          style={{
            ...styles.bodyRow,
            ...(selectedRow === row ? styles.selectedRow : {})
          }}
        >
          {columns.map(col => (
            <td key={String(col.key)} style={styles.bodyCell}>
              <HighlightText
                text={String(row[col.key])} 
                highlight={searchTerm}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}