import { useDataTableContext } from "./dataTable.context";
import { styles } from "./styles";

export function SearchBar<T>({ placeholder = 'Search...' }: { placeholder?: string }) {
  const { searchTerm, setSearchTerm } = useDataTableContext<T>();

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        style={styles.searchInput}
      />
    </div>
  );
}