import { Box } from '@mui/material'
import React from 'react'
import { Input } from 'antd';
import DataTable from '../../composant/datatable/DataTable';
const { Search } = Input;

const User = () => {

    // DÉFINITION COLONNE
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nomtilisateur', headerName: 'Nom d\'utilisateur', width: 200 },
    { field: 'Email', headerName: 'Email', width: 300 },
    { field: 'Rôle', headerName: 'Rôle', width: 200 },
    { field: 'Actions', headerName: 'Actions', width: 150 },
  ];

  // DÉFINITION COMPOSANT
  const rows = [
    { id: 1, nomUtilisateur: 'Rakoto', Email: 'rakoto@gmail.com', Rôle: 'Responsable logistique' },
    { id: 2, nomUtilisateur: 'Jean', Email: 'jean@gmail.com', Rôle: 'Technicien' },
    { id: 3, nomUtilisateur: 'Paul', Email: 'paul@gmail.com', Rôle: 'Manager' },
    { id: 4, nomUtilisateur: 'Sophie', Email: 'sophie@gmail.com', Rôle: 'Assistante RH' },
    { id: 5, nomUtilisateur: 'Luc', Email: 'luc@gmail.com', Rôle: 'Développeur' },
    { id: 6, nomUtilisateur: 'George', Email: 'luc@gmail.com', Rôle: 'Développeur' },
    { id: 7, nomUtilisateur: 'Anthonio', Email: 'luc@gmail.com', Rôle: 'Développeur' },
    { id: 8, nomUtilisateur: 'Mickael', Email: 'luc@gmail.com', Rôle: 'Développeur' },
    { id: 9, nomUtilisateur: 'AUrélien', Email: 'luc@gmail.com', Rôle: 'Développeur' },
  ];
  return (
    <Box className='flex-1 p-4'>
      {/* ------------------------------------titre--------------------------------------------- */}
      <h1 className="font-bold text-xl">LISTE DES UTILISATEURS</h1>
      {/* -----------------------contenu qui contient la liste des utilisateurs----------------- */}
      <Box className="bg-white w-full h-[37rem] rounded-lg mt-10">
        {/* -----------------------------barre de recherche----------------------------- */}
        <div>
          <Search placeholder="Recherche" style={{ width: 300, marginTop: "2%", marginLeft: "5%" }} allowClear />
        </div>
        {/* -----------------------------Tableau----------------------------- */}
        <div className="w-[90%] mx-auto mt-5" >
          <DataTable rows={rows} columns={columns} />
        </div>
      </Box>
    </Box>
  )
}

export default User
