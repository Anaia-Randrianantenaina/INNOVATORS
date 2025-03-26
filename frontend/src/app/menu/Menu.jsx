import { IoMdNotificationsOutline } from "react-icons/io";
import React from 'react';
import { Avatar, Badge, Chip } from "@mui/material";

const Menu = () => {
  return (
    <div className="fixed top-0 right-0 bg-white w-[200px] h-[45px] mt-2 mr-4 rounded-full flex justify-end items-center px-4 shadow-sm">
      <span className="border rounded-full w-[50px] flex justify-center items-center">
        <Badge badgeContent={1} color="error">
          <IoMdNotificationsOutline className="text-[25px] text-gray-500" />
        </Badge>
      </span>
      <Chip
        className="cursor-pointer ml-2 bg-white"
        avatar={<Avatar />}
        label="Administrateur"
      />
    </div>
  );
};

export default Menu;
