import { Button } from "@mui/material";
import React from "react";

const Bouton = ({label}) => {
  return (
    <div>
      <Button
        sx={{
          background: "#0076A8",
          width: "13%",
          color: "white",
          textTransform: "none",
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default Bouton;
