import { Box, Card, CardContent } from '@mui/material';
import React from 'react';
import DataTable from '../datatable/DataTable';
import Bouton from '../bouton/Bouton';
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
];


const Demande = () => {
  return (
    <Box className="flex-1 p-4 space-y-10">

     <h1 className=' mt-[-2%] text-[30px] '>Demandes</h1>

      {/* PETIT DASHBOARD */}
     <div className='flex justify-center  gap-14 grid-cols-1'>
      <Card className='w-[350px] h-[120px]'> 
        <CardContent></CardContent>
      </Card>

        <Card className='w-[350px] h-[120px]'> 
          <CardContent></CardContent>
        </Card>

        <Card className='w-[350px] h-[120px]'> 
          <CardContent></CardContent>
        </Card>

        <Card className='w-[350px] h-[120px]'> 
          <CardContent></CardContent>
        </Card>
     </div>

     {/* BOUTTON */}
     <div className='flex justify-between'>
      <div className='flex'>
      <Bouton label="Nouveau"className/>
       <Bouton label="Nouveau"className/>
       <Bouton label="Nouveau"className/>
      </div>
       <Bouton label="Nouveau"/>
     </div>

      <DataTable columns={columns} rows={rows} pageSize={5} />
    </Box>
  );
};

export default Demande;
