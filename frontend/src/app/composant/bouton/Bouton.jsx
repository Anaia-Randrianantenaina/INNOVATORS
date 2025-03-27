import { Button } from "@mui/material";
import React from "react";

const Bouton = ({label, boutonStyle, iconStart, iconEnd, click, type}) => {
  return (
    <div>
      <Button
        sx={{
          background: "#0076A8",
          color: "white",
          textTransform: "none",
          ...boutonStyle
        }}
        onClick={click}
        type={type}
        startIcon={iconStart}
        endIcon={iconEnd}
      >
        {label}
      </Button>
    </div>
  );
};

export default Bouton;
