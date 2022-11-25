import { FC, useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { useDispatch } from "react-redux";

import BeforeStep from "./BeforeStep";
import { RootState, useTypedSelector } from "@store/index";
import AfterStep from "./AfterStep";
import CurrentStep from "./CurrentStep";

const PostStepperHead = () => {
  const activeStep = useTypedSelector((state: RootState) => state.stepper.step);
  const stepTitle = useTypedSelector(
    (state: RootState) => state.stepper.stepTitle
  );

  return (
    <Stack direction={"row"} spacing={0.8}>
      <BeforeStep step={activeStep} />
      <CurrentStep />
      <AfterStep step={activeStep} />
    </Stack>
  );
};

export default PostStepperHead;
