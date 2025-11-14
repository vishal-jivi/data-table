# Data Table (Vite + React + TypeScript)

A production-ready, reusable DataTable component built with React 18+, TypeScript, and Context API. This component is designed to be used across multiple pages in your application and can also be published as a standalone npm package for use in other projects.

## 🚀 Features

### Core Functionality
- ✅ **Type-Safe Generic Component**: Works with any data type using TypeScript generics
- ✅ **Column Sorting**: Click column headers to sort ascending/descending/none
- ✅ **Real-Time Search**: Filter data with instant text search
- ✅ **Text Highlighting**: Search terms are highlighted in yellow
- ✅ **Single Row Selection**: Click rows to select/deselect with visual feedback
- ✅ **Responsive Design**: Horizontal scroll on mobile devices (< 768px)
- ✅ **Empty State Handling**: Graceful display when no data matches filters

### Architecture
- 🏗️ **Context API State Management**: Clean, scalable state management without prop drilling
- 🔄 **Reusable Across Pages**: Import once, use everywhere in your application
- 📦 **NPM Package Ready**: Complete structure for independent deployment
- 🎨 **CSS Modules**: Scoped styling to prevent conflicts
- 🧩 **Composable Components**: Modular sub-components for easy customization
- 🔒 **No `any` Types**: Fully type-safe implementation

### User Experience
- 🎯 **Visual Feedback**: Hover effects, selected row highlighting, sort indicators
- ⚡ **Performance Optimized**: Uses `useMemo` and `useCallback` for efficient rendering
- 🎨 **Clean UI**: Professional styling with neutral color palette
- 📱 **Mobile Friendly**: Touch-friendly interface with proper sizing

## 📋 Prerequisites
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)

## 🛠️ Install
```bash
npm install
```

## 🏃 Run (development)
```bash
npm run dev
```
- Open the URL shown in the terminal (usually `http://localhost:5173`)
- The demo page shows a fully functional DataTable with sample user data

## 🏗️ Build (production)
```bash
npm run build
```

## 📖 Usage in Your Application

### Basic Usage

```tsx
import { DataTable, Column } from './components/DataTable';

interface User {
  name: string;
  email: string;
  role: string;
  status: string;
}

const userData: User[] = [
  { name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob', email: 'bob@example.com', role: 'User', status: 'Active' },
];

const userColumns: Column<User>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

function UsersPage() {
  const handleRowSelect = (user: User | null) => {
    console.log('Selected user:', user);
    // Navigate to user detail page, open modal, etc.
  };

  return (
    <DataTable
      data={userData}
      columns={userColumns}
      onRowSelect={handleRowSelect}
      searchPlaceholder="Search users..."
    />
  );
}
```

## 🎯 Component API

### DataTable Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | `T[]` | ✅ | - | Array of data objects to display |
| `columns` | `Column<T>[]` | ✅ | - | Column configuration array |
| `onRowSelect` | `(row: T \| null) => void` | ❌ | - | Callback fired when a row is selected/deselected |
| `searchPlaceholder` | `string` | ❌ | `"Search..."` | Placeholder text for search input |
| `className` | `string` | ❌ | `""` | Additional CSS class for container |

### Column Configuration

```typescript
interface Column<T> {
  key: keyof T;        // Key from your data object
  label: string;       // Display text for column header
  sortable?: boolean;  // Enable/disable sorting (default: true)
}
```

## 🏗️ Component Architecture

### Context-Based State Management

```
DataTableProvider (Context)
├── SearchBar Component
├── Table
│   ├── TableHeader Component
│   └── TableBody Component
│       └── HighlightText Component
```

**Benefits:**
- No prop drilling through multiple component levels
- Centralized state management for search, sort, and selection
- Easy to extend with new features
- Clean separation of concerns

### State Flow

1. **Search State**: Managed in Context, filters data in real-time
2. **Sort State**: Tracks current sort column and direction
3. **Selection State**: Tracks selected row and triggers callback
4. **Derived State**: `filteredAndSortedData` computed with `useMemo`

## 📦 Publishing as NPM Package

### For Independent Use Across Projects

This DataTable component is structured to be published as an npm package, allowing you to:

✅ Use the same component across multiple applications
✅ Version control your UI components independently
✅ Share with other teams or the open-source community
✅ Install via npm/yarn in any React project

