import { useState } from "react";
import type { Column } from "./component/data-table/types";
import { DataTable } from "./component/data-table/dataTable";

interface User {
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: User[] = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active' },
  { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Guest', status: 'Inactive' },
  { name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  { name: 'Evan Wright', email: 'evan@example.com', role: 'User', status: 'Active' },
  { name: 'Fiona Green', email: 'fiona@example.com', role: 'Guest', status: 'Inactive' }
];

const columns: Column<User>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true }
];

export default function Demo() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 'bold' }}>
        Reusable DataTable Component
      </h1>

      <DataTable
        data={sampleData}
        columns={columns}
        onRowSelect={(user) => setSelectedUser(user)}
        searchPlaceholder="Search users..."
      />

      {selectedUser && (
        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '8px'
        }}>
          <strong>Selected User:</strong> {selectedUser.name} ({selectedUser.email})
        </div>
      )}
    </div>
  );
}