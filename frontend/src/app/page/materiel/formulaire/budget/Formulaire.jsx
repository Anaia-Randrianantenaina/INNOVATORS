import { BiCheck } from "react-icons/bi";  
import React from 'react'
import { Form, Input } from 'antd'
import Bouton from '../../../../composant/bouton/Bouton'
import { TextField } from '@mui/material'

const Formulaire = () => {

    // variable des éléments form
    const corps = (
     <Form>
        <div className="grid grid-cols-2 gap-0 mt-5">
         <Form.Item name="mois" rules={[{ required: true, message: "Veuillez remplir le mois !" }]}>
          <TextField className='mt-5' label="Mois" variant='outlined'/>
         </Form.Item>
         <Form.Item name="prix" rules={[{ required: true, message: "Veuillez remplir le prix !" }]}>
             <TextField className='mt-5' label="Prix" variant='outlined'/>
         </Form.Item>
        </div>
         <Form.Item>
            <Bouton label="Enregistrer" iconEnd={<BiCheck />}
             type={"submit"} boutonStyle={{ float: "right" }}/>
         </Form.Item>
     </Form>
    )

  return (
    <div>
      {corps}
    </div>
  )
}

export default Formulaire
