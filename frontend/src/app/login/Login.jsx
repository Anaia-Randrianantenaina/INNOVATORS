import { BsPencilSquare } from "react-icons/bs"; 
import { BsFillKeyFill } from "react-icons/bs"; 
import { HiOutlineMailOpen } from "react-icons/hi"; 
import React from 'react';
import { Box, Button, InputAdornment, TextField } from "@mui/material"
import Bouton from "../composant/bouton/Bouton"

const Login = () => {
  return (
    <Box className="flex justify-center items-center h-screen bg-gray-100">
        <Box className="w-[50%] flex">
            {/* --------------------Contenu qui ACCESS BANQUE/Créer compte---------------------------- */}
            <Box className="bg-manga w-[25%] h-[25rem] mt-10 absolute rounded-lg">
                <Box className="flex justify-center items-center mt-24">
                    <Box className="w-[60%]">
                        {/* --------------------phrase ACCESS BANQUE-------------------- */}
                        <p className="text-3xl font-bold text-white">ACCESS </p>
                        <p className="text-3xl font-bold text-white float-right mt-10">
                            <img src="./logo.jpg" alt="logo" className="w-[50px] rounded-full" /><br /> 
                            <span>BANQUE</span>
                        </p>
                    </Box>
                </Box>
                {/* ----------------------------------------créer compte-------------------- */}
                <Box>
                    <p className="text-white float-right mt-16 me-2 flex cursor-pointer">
                        <BsPencilSquare className="mt-1 me-3" />Créer compte
                    </p>
                </Box>
            </Box>
            {/* ----------------------------------------Contenu d'authentificatio-------------------- */}
            <Box className="bg-white w-[55%] h-[480px] ml-auto shadow-lg">
                <Box className="flex justify-center items-center">
                    <Box className="grid grid-cols-1 gap-10 mt-10 w-[300px]">
                        <Box className="grid grid-cols-1 gap-2">
                            <h1 className="text-xl font-bold text-center">Authentification</h1>
                            <p className="text-xs text-center">Se connecter avec</p>
                            {/* ---------------------------Bouton logo google-------------------- */}
                            <Button sx={{ margin: "0 auto", textTransform: "none", color: "black", background: "#f0f5f5", width: "60%" }}>
                                <img src="google.jpg" alt="google" className="w-[25px]" />Compte Google
                            </Button>
                        </Box>
                        <Box>
                            <p className="text-center">ou</p>
                        </Box>
                        {/* -----------------------------formulaire de connexion-------------------- */}
                        <form>
                            <Box className="grid grid-cols-1 gap-2">
                                <Box>
                                    {/* --------------------champ email-------------------- */}
                                    <TextField label="Email" variant="outlined" sx={{ width: "100%" }} InputProps={{
                                        endAdornment:(<InputAdornment position='end'><HiOutlineMailOpen /></InputAdornment>)
                                    }} required/>
                                </Box>
                                <Box>
                                    {/* --------------------champ mot de passe-------------------- */}
                                    <TextField type="password" label="Mot de passe" variant="outlined" sx={{ width: "100%" }} InputProps={{
                                            endAdornment:(<InputAdornment position='end'><BsFillKeyFill /></InputAdornment>)
                                        }} required/>
                                </Box>
                            </Box>
                            <Box>
                                {/* --------------------Mot de passe oublié-------------------- */}
                                <p className="text-xs absolute mt-10 cursor-pointer">Mot de passe oublié ?</p>
                                {/* --------------------bouton se connecter-------------------- */}
                                <Bouton label="Se connecter" type={"submit"} boutonStyle={{ float: "right", mt: 3 }} />
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  );
};

export default Login;
