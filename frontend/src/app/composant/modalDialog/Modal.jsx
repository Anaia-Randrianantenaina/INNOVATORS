import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

const Modal = ({  ouvrir, fermer, titre, corps, titreStyle, corpsStyle }) => {
  return (
    <Dialog open={ouvrir} onClose={fermer} fullWidth>
        {/* ------------------contenu du titre------------------ */}
          <DialogTitle sx={{ ...titreStyle }}>
            {titre}
            <IconButton className='float-right' onClick={fermer}><CloseIcon /></IconButton>
          </DialogTitle>
          {/* ------------------contenu du corps------------------ */}
          <DialogContent sx={{ ...corpsStyle }}>
            {corps ? corps : "Aucune contenu"}
          </DialogContent>
        </Dialog>
  )
}

export default Modal
