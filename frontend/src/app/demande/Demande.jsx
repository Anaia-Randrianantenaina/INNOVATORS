import { CgClose } from "react-icons/cg";
import { BiLoader } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { Box, Card, CardContent, MenuItem, Select, FormControl, InputLabel, Button } from "@mui/material";
import React, { useState } from "react";
import DataTable from "../datatable/DataTable";

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
  const [selection, setSelection] = useState("");

  return (
    <Box className="flex-1 p-4 space-y-10">
      <h1 className="text-[30px]">Demandes</h1>

      {/* PETIT DASHBOARD */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="p-4 text-center"> 
          <CardContent>
            <BsCardChecklist size={50} className="text-blue-500" />
            <p>Nombre de demandes</p>
            <p>15</p>
          </CardContent>
        </Card>

        <Card className="p-4 text-center"> 
          <CardContent>
            <AiFillCheckCircle size={24} />
            <p>Demandes validées</p>
            <p>15</p>
          </CardContent>
        </Card>

        <Card className="p-4 text-center"> 
          <CardContent>
            <BiLoader size={24} />
            <p>Demandes en attente</p>
            <p>15</p>
          </CardContent>
        </Card>

        <Card className="p-4 text-center"> 
          <CardContent>
            <CgClose size={24} />
            <p>Demandes rejetées</p>
            <p>15</p>
          </CardContent>
        </Card>
      </div>

      {/* SELECTEURS */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          {[
            "Filtrer par statut",
            "Filtrer par rôle",
            "Filtrer par date"
          ].map((label, index) => (
            <FormControl key={index} className="w-[150px]" sx={{ height: '20px' }}>
              <InputLabel>{label}</InputLabel>
              <Select value={selection} onChange={(e) => setSelection(e.target.value)}>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </FormControl>
          ))}
          <Button variant="contained" color="primary">Appliquer</Button>
        </div>
      </div>

      <DataTable columns={columns} rows={rows} pageSize={5} />
    </Box>
  );
};

export default Demande;
