import { Box, MenuItem, Select } from '@mui/material'
import React from 'react'
import Bouton from '../bouton/Bouton'

const Materiel = () => {
  
  return (
    <Box className='flex-1 p-4'>
      {/* ------------------------------------titre--------------------------------------------- */}
      <h1 className="font-bold text-xl">MATERIELS</h1>
      {/* ------------------------------------Contenu 1------------------------------------ */}
      <Box className="flex">
        <div className="w-[500px]">
          <Bouton label="Nouveau"/>
        </div>
        <div className='ml-auto'>
          <Select>
            <MenuItem>Janvier</MenuItem>
          </Select>
        </div>
      </Box>
      {/* ------------------------------------Contenu 1------------------------------------ */}
      <Box className="bg-white w-full h-[500px] rounded-lg">

      </Box>
    </Box>
  )
}

export default Materiel
