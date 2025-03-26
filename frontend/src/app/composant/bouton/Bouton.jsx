import { Button } from "@mui/material";
import React from "react";

const Bouton = ({label, boutonStyle, click, type}) => {
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
      >
        {label}
      </Button>
    </div>
  );
};

export default Bouton;
