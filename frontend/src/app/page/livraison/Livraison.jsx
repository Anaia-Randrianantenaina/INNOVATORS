
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button, Input, Modal, Select } from 'antd'
import DataTable from "../../composant/datatable/DataTable";

const Livraison = () => {
  return (
    <Box className='flex-1 p-4'>
      <h1 className='mt-[-1%] text-gray-700 font-semibold text-[3vh]'>Livraison</h1>

      <div className='flex mt-1'>
        <div className='bg-white w-[99%] h-[90vh] rounded-md'>
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
        </div>
      </div>
    </Box>
  )
}

export default Livraison
