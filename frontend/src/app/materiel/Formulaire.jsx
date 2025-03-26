import React from 'react'
import { Form, Input } from 'antd'
import Bouton from '../bouton/Bouton'

const Formulaire = () => {

    // variable des éléments form
    const corps = (
     <Form>
         <Form.Item name="nom" rules={[{ required: true, message: "Veuillez remplir le nom !" }]}>
             <Input placeholder="Nom" className="bg-gris p-2" />
         </Form.Item>
         <Form.Item name="Description" rules={[{ required: true, message: "Veuillez remplir description !" }]}>
             <Input placeholder="Description" className="bg-gris p-2" />
         </Form.Item>
         <Form.Item name="Réferences" rules={[{ required: true, message: "Veuillez remplir réferences !" }]}>
             <Input placeholder="Réferences" className="bg-gris p-2" />
         </Form.Item>
         <Form.Item>
             <Bouton label="Ajouter" boutonStyle={{ float: "right" }}/>
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
