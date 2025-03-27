import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const paginationModel = { page: 0, pageSize: 5 };

// POUR QUE LES COMPOSANT ROWS ET COLUMNS SOIT RÉUTILISABLES 
export default function DataTable({ rows, columns, style}) {
  return (
    <Paper sx={{ height: 400, width: '100%', ...style}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
  
      />
    </Paper>
  );
}
