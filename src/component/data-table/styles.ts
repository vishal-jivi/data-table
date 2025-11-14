import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: {
    width: '100%',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: '14px',
    color: '#1f2937'
  },
  searchContainer: {
    marginBottom: '16px'
  },
  searchInput: {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box'
  },
  tableWrapper: {
    overflowX: 'auto',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#fff'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '600px'
  },
  headerRow: {
    backgroundColor: '#f9fafb',
    borderBottom: '2px solid #e5e7eb'
  },
  headerCell: {
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: 600,
    color: '#374151',
    userSelect: 'none'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  sortIndicator: {
    fontSize: '12px',
    color: '#6b7280'
  },
  bodyRow: {
    borderBottom: '1px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'background-color 0.15s',
    backgroundColor: '#fff'
  },
  bodyCell: {
    padding: '12px 16px'
  },
  selectedRow: {
    backgroundColor: '#dbeafe'
  },
  highlight: {
    backgroundColor: '#fef08a',
    padding: '2px 0',
    fontWeight: 500
  },
  emptyState: {
    padding: '32px',
    textAlign: 'center',
    color: '#6b7280'
  }
};

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    tbody tr:hover {
      background-color: #f3f4f6 !important;
    }
    tbody tr:hover td {
      color: #111827;
    }
    input:focus {
      border-color: #3b82f6 !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `;
  document.head.appendChild(styleSheet);
}