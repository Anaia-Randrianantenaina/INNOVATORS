import { Button } from "@mui/material";
import React from "react";

const Bouton = ({label, boutonStyle}) => {
  return (
    <div>
      <Button
        sx={{
          background: "#0076A8",
          color: "white",
          textTransform: "none",
          ...boutonStyle
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default Bouton;
