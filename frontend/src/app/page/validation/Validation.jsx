import { AiFillEye } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button, Input, Modal, Select } from 'antd'
import DataTable from '../datatable/DataTable';

// DÉFINITION COMPOSANT
const rows = [
  { id: 1, name: 'Rakoto', resultat: 'Validé', urgent: 'Urgent', role: 'Responsable logistique' },
  { id: 2, name: 'Jean', resultat: 'Refusé', urgent: 'Reguliere ', role: 'Technicien' },
  { id: 3, name: 'Paul', resultat: 'En attente', urgent: 'Prioritaire', role: 'Manager' },
  { id: 4, name: 'Sophie', resultat: 'En attente', urgent: 'Reguliere', role: 'Assistante RH' },
  { id: 5, name: 'Luc', resultat: 'Validé', urgent: 'Prioritaire', role: 'Développeur' },
  { id: 6, name: 'George', resultat: 'Validé', urgent: 'Prioritaire', role: 'Développeur' },
  { id: 7, name: 'Anthonio', resultat: 'Refusé', urgent: 'Reguliere', role: 'Développeur' },
  { id: 8, name: 'Mickael', resultat: 'Refusé', urgent: 'Urgent', role: 'Développeur' },
  { id: 9, name: 'AUrélien', resultat: 'En attente', urgent: 'Urgent', role: 'Développeur' },
];

const Validation = () => {
  //colonne du composant
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Nom', width: 100 },
    { field: 'resultat', headerName: 'Resultat', width: 150 },
    { field: 'urgent', headerName: 'Urgent', width: 150, },
    { field: 'role', headerName: 'Rôle', width: 180 },
    {
      field: "Action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
        <div className="flex mt-2">
          <Button onClick={showModal} className="mr-1">
            <AiOutlineCheck className="text-green-600 text-[18px]" />
          </Button>

          <Button>
            <AiFillEye className="text-blue-500 text-[18px]" />
          </Button>
        </div>
      )
    }
  ];

  //declaration variable pour le modal
  const [ModalOvert, setModalOvert] = useState(false)
  const showModal = () => setModalOvert(true)
  const handleCancel = () => setModalOvert(false)

  //declaration justification modal
  const [action, setAction] = useState(null);

  return (
    <Box className='flex-1 p-4'>
      <h1 className='mt-[-1%] text-gray-700 font-semibold text-[3vh]'>Validation de demande</h1>

      <div className='flex mt-1'>
        <div className='bg-white w-[65%] h-[90vh] rounded-md'>
          <div className='mt-3 mr-3 ml-[43%]'>
            <Input
              placeholder="Recherche"
              className='mt-2 mr-2  w-[45%]'
            />

            <Select
              className='w-[30%] mt-2 mr-2'
              placeholder="Choisir votre choix"
              options={[
                { value: "androany", label: "Aujourd'huis" },
                { value: "tous", label: "Tous" }
              ]}
              onChange={(value) => console.log(value)}
            />

            <Select
              className='mt-2'
              placeholder="Resultat"
              options={[
                { value: "validé", label: "Validé" },
                { value: "En attente", label: "En attente" },
              ]}
              onChange={(value) => console.log(value)}
            />
          </div>

          <div className='w-[95%] ml-6 mt-4'>
            <DataTable columns={columns} rows={rows} pageSizeOptions={[10]}/>
          </div>
        </div>

        <div className='bg-white w-[35%] h-[90vh] ml-3 rounded-md'>
          <h1 className='text-gray-700 font-semibold text-[25px] mt-2 ml-3'>Prioritaire</h1>
        </div>
      </div>

      <Modal
        title="Validation Demande"
        open={ModalOvert}
        onCancel={handleCancel}
        footer={
          action === "attente" ? (
            <Button key="confirmer" type="primary" onClick={() => setModalOvert(false)}>
              Confirmer
            </Button>
          ) : (
            <>
              <Button key="attente" onClick={() => setAction("attente")}>
                En attente
              </Button>
              <Button key="valider" type="primary" onClick={() => setModalOvert(false)}>
                Valider
              </Button>
            </>
          )
        }
      >
        <div className="flex mb-3 mt-2">
          <span className="mr-2">
            <TextField id="outlined-basic" label="Nom" variant="outlined" />
          </span>
          <span className="mr-2">
            <TextField id="outlined-basic" label="Role" variant="outlined" />
          </span>
          <span className="">
            <TextField id="outlined-basic" label="Urgence" variant="outlined" />
          </span>
        </div>

        <div className="mb-3">
          <span className="mr-2">
            <TextField id="outlined-basic" label="Demande" variant="outlined" className="w-[55vh]"/>
          </span>
        </div>

        <div>
          <span className="mr-2">
            <TextField id="outlined-basic" label="Motif" variant="outlined" className="w-[55vh]"/>
          </span>
        </div>

      {action === "attente" && (
        <div className="mt-3">
          <TextField id="outlined-basic" label="Justification" variant="outlined" className="w-[55vh]" multiline rows={4}/>
        </div>
      )}
      </Modal>
    </Box>
  )
}

export default Validation