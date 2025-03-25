import { Box } from '@mui/material';
import React from 'react';
import DataTable from '../datatable/DataTable';

// DÉFINITION COLONNE
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nom', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'telephone', headerName: 'Téléphone', width: 150 },
  { field: 'role', headerName: 'Rôle', width: 180 },
];

// DÉFINITION COMPOSANT
const rows = [
  { id: 1, name: 'Rakoto', email: 'rakoto@gmail.com', telephone: '0340011124', role: 'Responsable logistique' },
  { id: 2, name: 'Jean', email: 'jean@gmail.com', telephone: '0340022233', role: 'Technicien' },
  { id: 3, name: 'Paul', email: 'paul@gmail.com', telephone: '0340033344', role: 'Manager' },
  { id: 4, name: 'Sophie', email: 'sophie@gmail.com', telephone: '0340044455', role: 'Assistante RH' },
  { id: 5, name: 'Luc', email: 'luc@gmail.com', telephone: '0340055566', role: 'Développeur' },
  { id: 6, name: 'George', email: 'luc@gmail.com', telephone: '0340055566', role: 'Développeur' },
  { id: 7, name: 'Anthonio', email: 'luc@gmail.com', telephone: '0340055566', role: 'Développeur' },
  { id: 8, name: 'Mickael', email: 'luc@gmail.com', telephone: '0340055566', role: 'Développeur' },
  { id: 9, name: 'AUrélien', email: 'luc@gmail.com', telephone: '0340055566', role: 'Développeur' },
];

const Demande = () => {
  return (
    <Box className="flex-1 p-4 space-y-10">
      <h1>Demande page</h1>
      <DataTable columns={columns} rows={rows} pageSize={5} />
    </Box>
  );
};

export default Demande;
