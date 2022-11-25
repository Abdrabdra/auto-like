import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Stepper, Button, Typography, Stack } from "@mui/material";

import { RootState, useTypedSelector } from "@store/index";
import {
  decrementStep,
  incrementStep,
  resetStep,
  setStep,
  setStepTitle,
} from "@store/reducers/stepper/stepper.slice";

import { STEP_TITLES } from "./PostStepper.constants";

import PostStepperHead from "./PostStepperHead";
import PostSelectTransport from "./PostSelectTransport";
import PostSelectBrand from "./PostSelectBrand";
import PostSelectMark from "./PostSelectMark";
import PostSelectManufacture from "./PostSelectManufacture";
import PostSelectCase from "./PostSelectCase";
import PostSelectGeneration from "./PostSelectGeneration";
import PostSelectModification from "./PostSelectModification";
import PostSelectCondition from "./PostSelectCondition";
import PostSelectPrice from "./PostSelectPrice";
import PostSelectPicture from "./PostSelectPicture";
import PostSelectContacts from "./PostSelectContacts";
import { OneHome } from "../../Home";
import PostPreview from "./PostPreview";
import PostVerification from "./PostVerification";

const PostStepper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeStep = useTypedSelector((state: RootState) => state.stepper.step);

  const isStepOptional = (step: number) => {
    return step === 20;
  };
  const handleNavigateMainPage = () => {
    navigate("/app/home");
  };
  const handleNext = () => {
    dispatch(incrementStep());
  };
  const handleBack = () => {
    dispatch(decrementStep());
  };
  const handleReset = () => {
    dispatch(resetStep());
  };

  React.useEffect(() => {
    dispatch(setStepTitle(STEP_TITLES[activeStep]));
  }, [activeStep]);

  return (
    <Stack>
      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={activeStep}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <PostStepperHead />
        </Stepper>
        <Box sx={{ paddingTop: "10px" }}>
          <>
            {activeStep === 0 ? (
              <PostSelectTransport />
            ) : activeStep === 1 ? (
              <PostSelectBrand />
            ) : activeStep === 2 ? (
              <PostSelectMark />
            ) : activeStep === 3 ? (
              <PostSelectManufacture />
            ) : activeStep === 4 ? (
              <PostSelectCase />
            ) : activeStep === 5 ? (
              <PostSelectGeneration />
            ) : activeStep === 6 ? (
              <PostSelectModification />
            ) : activeStep === 7 ? (
              <PostSelectCondition />
            ) : activeStep === 8 ? (
              <PostSelectPrice />
            ) : activeStep === 9 ? (
              <PostSelectPicture />
            ) : activeStep === 10 ? (
              // NEED TO DELETE OR ADD ANOTHER NEW COMPONENT
              <PostSelectModification />
            ) : activeStep === 11 ? (
              // NEED TO DELETE OR ADD ANOTHER NEW COMPONENT
              <PostSelectModification />
            ) : activeStep === 12 ? (
              <PostSelectContacts />
            ) : activeStep === 13 ? (
              <PostPreview />
            ) : activeStep === 14 ? (
              <PostVerification />
            ) : activeStep === 15 ? (
              <Box>15</Box>
            ) : (
              <Box>Almas EVR</Box>
            )}
          </>
        </Box>
      </Box>
    </Stack>
  );
};

export default PostStepper;
