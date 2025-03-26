import { BsPencilSquare } from "react-icons/bs"; 
import { CgAdd } from "react-icons/cg"; 
import { Box, MenuItem, Tooltip } from '@mui/material'
import React from 'react'
import Bouton from '../bouton/Bouton'
import DataTable from "../datatable/DataTable";
import { Input, Select } from 'antd';
const { Search } = Input;

const Materiel = () => {

  // DÉFINITION COLONNE
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Nom', headerName: 'Nom', width: 200 },
  { field: 'Description', headerName: 'Description', width: 350 },
  { field: 'Réferences', headerName: 'Réferences', width: 200 },
  { field: 'Actions', headerName: 'Actions', width: 150 },
];

// DÉFINITION COMPOSANT
const rows = [
  { id: 1, Nom: 'Rakoto', Description: 'rakoto@gmail.com', Réferences: '0340011124', role: 'Responsable logistique' },
  { id: 2, Nom: 'Jean', Description: 'jean@gmail.com', Réferences: '0340022233', role: 'Technicien' },
  { id: 3, Nom: 'Paul', Description: 'paul@gmail.com', Réferences: '0340033344', role: 'Manager' },
  { id: 4, Nom: 'Sophie', Description: 'sophie@gmail.com', Réferences: '0340044455', role: 'Assistante RH' },
  { id: 5, Nom: 'Luc', Description: 'luc@gmail.com', Réferences: '0340055566', role: 'Développeur' },
  { id: 6, Nom: 'George', Description: 'luc@gmail.com', Réferences: '0340055566', role: 'Développeur' },
  { id: 7, Nom: 'Anthonio', Description: 'luc@gmail.com', Réferences: '0340055566', role: 'Développeur' },
  { id: 8, Nom: 'Mickael', Description: 'luc@gmail.com', Réferences: '0340055566', role: 'Développeur' },
  { id: 9, Nom: 'AUrélien', Description: 'luc@gmail.com', Réferences: '0340055566', role: 'Développeur' },
];
  
  return (
    <Box className='flex-1 p-4'>
      {/* ------------------------------------titre--------------------------------------------- */}
      <h1 className="font-bold text-xl">MATERIELS</h1>
      {/* ------------------------------------Contenu qui contient le bouton nouveau et budget------------------------------------ */}
      <Box className="flex">
        {/* -----------------------------bouton----------------------------- */}
        <div className="w-[500px] mt-9">
          <Bouton label="Nouveau" boutonStyle={{ width: "25%" }}/>
        </div>
        {/* -----------------------------budget----------------------------- */}
        <div className='ml-auto w-[400px]'>
          <p className="underline">Budget :</p>
          <div className="flex bg-white rounded-lg p-2 shadow-sm">
            <Select style={{ width: 150 }}>

            </Select>
            <p className="ms-1 mt-0.5">: 3000 ar</p>
            <div className="flex mt-1 ml-auto me-3">
              <Tooltip title="Nouveau budget">
                <CgAdd className="text-2xl me-3 cursor-pointer" />
              </Tooltip>
              <Tooltip title="Mise à jour budget">
                <BsPencilSquare className="text-2xl cursor-pointer" />
              </Tooltip>
            </div>
          </div>
        </div>
      </Box>
      {/* ------------------------------------Contenu qui contient la recherche et le tableau------------------------------------ */}
      <Box className="bg-white w-full h-[37rem] rounded-lg mt-5">
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

export default Materiel
