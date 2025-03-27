import React from 'react'
import { BsPersonFillCheck } from "react-icons/bs"; 
import { BsPersonCheckFill } from "react-icons/bs"; 
import DataTable from "../../composant/datatable/DataTable";

// DÉFINITION DES COLONNES
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nom", width: 150 },
  { field: "Rôle", headerName: "Rôle", width: 250 },
  { field: "action", headerName: "Action", width: 250 },
  { field: "date", headerName: "Date", width: 180 },
  { field: "time", headerName: "Heure", width: 150 },
];

// DÉFINITION DES LIGNES (exemples d'actions)
const rows = [
  { id: 1, name: "Rakoto", Rôle: "Managers", action: "Validation d'un nouveau demande", date: "2025-03-25", time: "14:30" },
  { id: 2, name: "Rakoto", Rôle: "Managers", action: "Validation d'un nouveau demande", date: "2025-03-25", time: "14:30" },
  { id: 3, name: "Rakoto", Rôle: "Managers", action: "Validation d'un nouveau demande", date: "2025-03-25", time: "14:30" },
  { id: 4, name: "Jean", Rôle: "Personnels", action: "Ajout d'un nouveau demande", date: "2025-03-26", time: "09:45" },
  { id: 5, name: "Paul", Rôle: "Personnels", action: "Ajout d'un nouveau demande", date: "2025-03-26", time: "09:45" },
];

const Suivi = () => {
  return (
    <div className="flex-1 p-8 space-y-10">
      {/* TITRE */}
      <div className=" mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Suivis</h1>
        <p className="text-lg text-gray-500 mt-2">Suivis des actions de tout les personnels </p>
      </div>
      
      {/* BOUTONS PERSONNEL / MANAGERS */}
      <div className="flex space-x-6 mt-6">
        <button className="p-3 flex items-center justify-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out">
          <BsPersonCheckFill className="mr-2 text-xl" /> 
          <span className="text-lg">Personnels</span>
        </button>

        <button className="p-3 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300 ease-in-out">
          <BsPersonFillCheck className="mr-2 text-xl" /> 
          <span className="text-lg">Managers</span>
        </button>
      </div>

      {/* TABLEAU DES ACTIONS */}
      <div className="mt-6 shadow-md rounded-lg p-6">
        <DataTable columns={columns} rows={rows} pageSize={5} />
      </div>
    </div>
  )
}

export default Suivi;
