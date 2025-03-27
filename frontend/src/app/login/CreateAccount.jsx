import { MdNavigateNext } from "react-icons/md"; 
import React, { useState } from 'react';
import { Box, Button, InputAdornment, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField } from "@mui/material";
import { BsFillTelephoneFill } from "react-icons/bs"; 
import { AiTwotoneMail } from "react-icons/ai"; 
import { FaUserAlt } from "react-icons/fa"; 
import { RiLockPasswordFill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import Bouton from '../composant/bouton/Bouton';

const CreateAccount = () => {
  const [step, setStep] = useState(0); 

  // Fonction pour passer à l'étape suivante
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Box className="flex justify-center items-center h-screen bg-gray-100">
      <Box className="w-[30%]">
        <Box className="bg-white p-6 shadow-lg">
          <h1 className="text-xl font-bold text-center mb-4">Inscription</h1>
          
          {/* --------------------------------Stepper-------------------------------- */}
          <Stepper activeStep={step} alternativeLabel>
            <Step><StepLabel>Informations personnelles</StepLabel></Step>
            <Step><StepLabel>Mot de passe</StepLabel></Step>
          </Stepper>

          {/* --------------------------------Formulaire-------------------------------- */}
          <Box className="mt-5">
            <form>
              {step === 0 && (
                <Box className="grid grid-cols-1 gap-4">
                  {/* --------------------------------Nom d'utilisateur-------------------------------- */}
                  <TextField type="text" label="Nom d'utilisateur" variant="outlined" fullWidth
                    InputProps={{ endAdornment: <InputAdornment position="end"><FaUserAlt /></InputAdornment> }}
                    required/>
                  {/* --------------------------------Email-------------------------------- */}
                  <TextField type="email" label="Email" variant="outlined" fullWidth
                    InputProps={{ endAdornment: <InputAdornment position="end"><AiTwotoneMail /></InputAdornment> }}
                    required/>
                  {/* --------------------------------Téléphone-------------------------------- */}
                  <TextField type="tel" label="Téléphone" variant="outlined" fullWidth
                    InputProps={{ endAdornment: <InputAdornment position="end"><BsFillTelephoneFill /></InputAdornment> }}
                    required/>
                  {/* --------------------------------Rôle-------------------------------- */}
                  <Box>
                    <InputLabel id="role-label">Rôle</InputLabel>
                    <Select labelId="role-label"  fullWidth required >
                      <MenuItem value="demandeur">Demandeur</MenuItem>
                      <MenuItem value="logistique">Logistique</MenuItem>
                      <MenuItem value="responsable">Responsable</MenuItem>
                    </Select>
                  </Box>
                  <Box>
                    {/* --------------------------------Bouton "Suivant"-------------------------------- */}
                    <Bouton label="Suivant" click={handleNext} iconEnd={<MdNavigateNext />} boutonStyle={{ float: "right" }} />
                  </Box>
                </Box>
              )}

              {step === 1 && (
                <Box className="grid grid-cols-1 gap-4">
                  {/* --------------------------------Mot de passe-------------------------------- */}
                  <TextField type="password" label="Mot de passe" variant="outlined" fullWidth
                    InputProps={{ endAdornment: <InputAdornment position="end"><RiLockPasswordFill /></InputAdornment> }}
                    required/>

                  {/* --------------------------------Confirmer mot de passe-------------------------------- */}
                  <TextField type="password" label="Confirmer mot de passe" variant="outlined" fullWidth
                    InputProps={{ endAdornment: <InputAdornment position="end"><MdLockOutline /></InputAdornment> }}
                    required
                  />

                  {/* --------------------------------Boutons "Retour" et "Créer un compte"-------------------------------- */}
                  <Box className="flex justify-between">
                    <Button variant="outlined" onClick={handleBack}>Retour</Button>
                    <Bouton label="Créer une compte" />
                  </Box>
                </Box>
              )}
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAccount;
