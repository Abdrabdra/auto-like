import { Box, Stack, Typography } from "@mui/material";
import {
  resetStep,
  setDefaultState,
} from "@store/reducers/stepper/stepper.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AbsoluteBox from "@components/modules/AbsoluteBox";
import SubmitButton from "@components/ui/Button/SubmitButton";

const PostVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    // dispatch(incrementStep());
    dispatch(setDefaultState());
    navigate("/app/home");
    dispatch(resetStep());
  };

  return (
    <Stack justifyContent={"center"} sx={{ height: "calc(100vh - 250px)" }}>
      <Stack justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          Объявление на проверке
        </Typography>
        <Typography
          sx={{ fontSize: "12px", fontWeight: 500, color: "grey.800" }}
        >
          Объявление на проверке
        </Typography>
        <Box>
          <AbsoluteBox>
            <SubmitButton onClick={handleClick} />
          </AbsoluteBox>
        </Box>
      </Stack>
    </Stack>
  );
};

export default PostVerification;
