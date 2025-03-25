import { IoMdNotificationsOutline } from "react-icons/io";
import React from 'react'
import { Avatar, Badge, Chip } from "@mui/material"

const Menu = () => {
  return (

    <div className="flex bg-white w-[14%] h-[45px] ml-auto mt-2 rounded-full mr-[0.5%]">
      {/* <div className='flex space-x-4 mt-2 ml-auto w-[400px] h-14  bg-white rounded-full'>

        <div className="ms-1 flex space-x-3 w-full">
          <div className="mt-2 border-2 border-black rounded-full w-[35px] h-[34px]">
            <p className="flex justify-center mt-1"><IoIosNotifications className=" text-2xl" /></p>
          </div>
          <div className="flex mt-2 space-x-1 w-full" >
            <Avatar />
            <p className="mt-2 flex justify-end">Noms prenoms</p>
          </div>
        </div>

      </div> */}
      <div className="flex mb-1">
        <span className="border mt-1 ml-3 rounded-full w-[50px]">
          <Badge badgeContent={1} color="error">
            <IoMdNotificationsOutline className="text-[25px] text-gray-500 mt-[6px] ml-[10px]" />
          </Badge>
        </span>

        <Chip
            className=" cursor-pointer mt-2 ml-2 bg-white"
            avatar={<Avatar></Avatar>}
            label="Administrateur"
          />
      </div>
    </div>

  )
}

export default Menu