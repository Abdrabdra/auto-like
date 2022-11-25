import { Box } from "@mui/material";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { RootState, useTypedSelector } from "store";

const CurrentStep = () => {
  return (
    <Box
      sx={{
        width: "17px",
        height: "3px",
        borderRadius: "1px",
        backgroundColor: "primary.main",
      }}
    />
  );
};

export default CurrentStep;
