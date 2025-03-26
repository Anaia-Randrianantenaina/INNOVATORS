import { RiMessage2Fill } from "react-icons/ri"; 
import { IoIosNotifications } from "react-icons/io"; 
import React from 'react'
import {Avatar} from "@mui/material"

const Menu = () => {
  return (
    
      <div className="flex  bg-slate-500 opacity-30 w-[89.5%] h-[70px] ml-[200px]">
        <div className='flex space-x-4 mt-2 ml-auto w-[400px] h-14  bg-white rounded-full'>

            <div className="ms-1 flex space-x-3 w-full">
            <div className="mt-2 border-2 border-black rounded-full w-[35px] h-[34px]">
                <p className="flex justify-center mt-1"><IoIosNotifications className=" text-2xl"/></p>
            </div>
            <div className="flex mt-2 space-x-1 w-full" >
                <Avatar />
                <p className="mt-2 flex justify-end">Noms prenoms</p>
            </div>
            </div>

        </div>
      </div>
   
  )
}

export default Menu