import { CgClose } from "react-icons/cg";
import { BiLoader } from "react-icons/bi";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { Box, Card, CardContent, MenuItem, Select, FormControl, InputLabel, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import DataTable from "../../composant/datatable/DataTable";

// DÉFINITION COLONNE
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nom", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "telephone", headerName: "Téléphone", width: 150 },
  { field: "role", headerName: "Rôle", width: 180 },
];

// DÉFINITION COMPOSANT
const rows = [
  { id: 1, name: "Rakoto", email: "rakoto@gmail.com", telephone: "0340011124", role: "Responsable logistique" },
  { id: 2, name: "Jean", email: "jean@gmail.com", telephone: "0340022233", role: "Technicien" },
  { id: 3, name: "Paul", email: "paul@gmail.com", telephone: "0340033344", role: "Manager" },
  { id: 4, name: "Sophie", email: "sophie@gmail.com", telephone: "0340044455", role: "Assistante RH" },
];

const Demande = () => {
  const [search, setSearch] = useState(""); // Pour le champ de recherche
  const [selectionDate, setSelectionDate] = useState(""); // Pour le filtre par date
  const [selectionStatut, setSelectionStatut] = useState(""); // Pour le filtre par statut


  return (
    <Box className="flex-1 p-4 space-y-10">
     <div className=" mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Demandes</h1>
      <p className="text-lg text-gray-500 mt-2">Liste de vos demandes </p>
    </div>

      {/* PETIT DASHBOARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="p-4 flex items-center justify-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <CardContent className="flex flex-col items-center justify-center">
            <BsCardChecklist size={50} className="text-blue-500" />
            <p className="font-bold text-[20px]">Nombre de demandes</p>
            <p className="text-gray-500 font-bold text-[20px]">15</p>
          </CardContent>
        </Card>

        <Card className="p-4 flex items-center justify-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <CardContent className="flex flex-col items-center justify-center">
            <AiFillCheckCircle size={50} className="text-green-500" />
            <p className="font-bold text-[20px]">Demandes validées</p>
            <p className="text-gray-500 font-bold text-[20px]">15</p>
          </CardContent>
        </Card>

        <Card className="p-4 flex items-center justify-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <CardContent className="flex flex-col items-center justify-center">
            <BiLoader size={50} className="text-yellow-500" />
            <p className="font-bold text-[20px]">Demandes en attente</p>
            <p className="text-gray-500 font-bold text-[20px]">15</p>
          </CardContent>
        </Card>

        <Card className="p-4 flex items-center justify-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <CardContent className="flex flex-col items-center justify-center">
            <CgClose size={50} className="text-red-500" />
            <p className="font-bold text-[20px]">Demandes refusées</p>
            <p className="text-gray-500 font-bold text-[20px]">15</p>
          </CardContent>
        </Card>
      </div>

      {/* SELECTEURS */}
      <div className="flex justify-between items-center w-full mt-6">
        <div className="flex gap-2">
          {/* Champ de recherche */}
          {/* <TextField className="w-[150px]" label="Rechercher" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} /> */}

          {/* Filtrer par date */}
          <FormControl className="w-[120px]">
            <InputLabel>Date</InputLabel>
            <Select value={selectionDate} onChange={(e) => setSelectionDate(e.target.value)}>
              <MenuItem value="aujourd'hui">Aujourd'hui</MenuItem>
              <MenuItem value="tous">Tous les jours</MenuItem>
            </Select>
          </FormControl>

          {/* Filtrer par statut */}
          <FormControl className="w-[120px]">
            <InputLabel>Statut</InputLabel>
            <Select value={selectionStatut} onChange={(e) => setSelectionStatut(e.target.value)}>
              <MenuItem value="valider">Validées</MenuItem>
              <MenuItem value="attente">En attente</MenuItem>
              <MenuItem value="refuser">Refusées</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Bouton */}
        <Button variant="contained" color="primary" startIcon={<AiOutlinePlus />}>Nouveau</Button>
      </div>

      <DataTable columns={columns} rows={rows} pageSize={5} />
    </Box>
  );
};

export default Demande;
