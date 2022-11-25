import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { OneHome } from "@components/screens/Main/Home";
import AbsoluteBox from "@components/modules/AbsoluteBox";
import SubmitButton from "@components/ui/Button/SubmitButton";
import {
  incrementStep,
  setDefaultState,
} from "@store/reducers/stepper/stepper.slice";
import { RootState, useTypedSelector } from "@store/index";

const PostPreview = () => {
  const dispatch = useDispatch();

  const stateBrand = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedBrand
  );

  const handleClick = () => {
    dispatch(incrementStep());
    // dispatch(setDefaultState());
  };

  return (
    <Box>
      <OneHome />
      <Box>
        <AbsoluteBox>
          <SubmitButton onClick={handleClick} />
        </AbsoluteBox>
      </Box>
    </Box>
  );
};

export default PostPreview;
