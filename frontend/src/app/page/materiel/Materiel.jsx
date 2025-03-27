import { FaTools } from "react-icons/fa"; 
import { BsPencilSquare } from "react-icons/bs"; 
import { CgAdd } from "react-icons/cg"; 
import { Box, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import Bouton from '../../composant/bouton/Bouton'
import DataTable from "../../composant/datatable/DataTable";
import { Select } from 'antd';
import Modal from "../../composant/modalDialog/Modal"
import Formulaire from "./formulaire/article/Formulaire";
import FormulaireBudget from "./formulaire/budget/Formulaire";
import { AiOutlinePlus } from "react-icons/ai";

const Materiel = () => {

  const [ openModalArticle, setopenModalArticle ] = useState(false);
  const [ openModalBudg, setOpenModalBudg ] = useState(false);

  // DÉFINITION COLONNE
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Nom', headerName: 'Nom', width: 200 },
  { field: 'Description', headerName: 'Description', width: 350 },
  { field: 'Références', headerName: 'Références', width: 200 },
  { field: 'Actions', headerName: 'Actions', width: 150 },
];

// DÉFINITION COMPOSANT
const rows = [
  { id: 1, Nom: 'Rakoto', Description: 'rakoto@gmail.com', Références: '0340011124', role: 'Responsable logistique' },
  { id: 2, Nom: 'Jean', Description: 'jean@gmail.com', Références: '0340022233', role: 'Technicien' },
  { id: 3, Nom: 'Paul', Description: 'paul@gmail.com', Références: '0340033344', role: 'Manager' },
  { id: 4, Nom: 'Sophie', Description: 'sophie@gmail.com', Références: '0340044455', role: 'Assistante RH' },
  { id: 5, Nom: 'Luc', Description: 'luc@gmail.com', Références: '0340055566', role: 'Développeur' },
  { id: 6, Nom: 'George', Description: 'luc@gmail.com', Références: '0340055566', role: 'Développeur' },
  { id: 7, Nom: 'Anthonio', Description: 'luc@gmail.com', Références: '0340055566', role: 'Développeur' },
  { id: 8, Nom: 'Mickael', Description: 'luc@gmail.com', Références: '0340055566', role: 'Développeur' },
  { id: 9, Nom: 'AUrélien', Description: 'luc@gmail.com', Références: '0340055566', role: 'Développeur' },
];
  
  return (
    <Box className='flex-1 p-4'>
      {/* ------------------------------------titre--------------------------------------------- */}
      <h1 className="font-bold text-xl">Articles</h1>
      {/* ------------------------------------Contenu qui contient le bouton nouveau et budget------------------------------------ */}
      <Box className="flex">
        {/* -----------------------------bouton----------------------------- */}
        <div className="w-[500px] mt-9">
          <Bouton label="Nouveau" iconStart={<AiOutlinePlus />} boutonStyle={{ width: "25%" }} click={ () => setopenModalArticle(true) }/>
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
                <CgAdd className="text-2xl me-3 cursor-pointer" onClick={() => setOpenModalBudg(true)}/>
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
        {/* -----------------------------Tableau----------------------------- */}
        <DataTable rows={rows} columns={columns} />
      </Box>
      {/* -----------------------------Modal ajout articles----------------------------- */}
      <Modal ouvrir={openModalArticle} fermer={() => setopenModalArticle(false)}
        titre={<p className="flex font-bold absolute">Nouveau article<FaTools className="ms-2 mt-1" /> </p>}
        corps={<Formulaire />}
      />
      {/* -----------------------------Modal ajout budget----------------------------- */}
      <Modal ouvrir={openModalBudg} fermer={() => setOpenModalBudg(false)}
        titre={<p className="flex font-bold absolute">Ajout Budget </p>}
        corps={<FormulaireBudget />}
      />
    </Box>
  )
}

export default Materiel
