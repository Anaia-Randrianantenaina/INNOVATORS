import { FiUsers } from "react-icons/fi"; 
import { Box, Card } from '@mui/material'
import React from 'react'
import DataTable from '../datatable/DataTable'

const Suivi = () => {
  return (
    <Box className='flex-1 p-4'>
    <h1 className=' mt-[-2%] text-[30px] '>Suivis des actions</h1>      
    <div className='flex gap-14 grid-cols-1'>
      <Card className='w-[350px] h-[60px]'>
        <FiUsers />
      </Card>
    </div>
    </Box>
  )
}

export default Suivi
