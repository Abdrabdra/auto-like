import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";

import { RootState, useTypedSelector } from "@store/index";
import {
  incrementStep,
  setFormSelectedMark,
  setFormSelectedPicture,
  setFormSelectedPrice,
} from "@store/reducers/stepper/stepper.slice";

import { Form, Formik } from "formik";
import AbsoluteBox from "@components/modules/AbsoluteBox";
import SubmitButton from "@components/ui/Button/SubmitButton";
import UploadFile from "./compone/UploadFile";

const PostSelectPicture = () => {
  const dispatch = useDispatch();

  const selectedPicture = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedPicture
  );

  return (
    <Formik
      initialValues={{
        selectedPicture: selectedPicture,
      }}
      onSubmit={(values) => {
        dispatch(setFormSelectedPicture(values.selectedPicture));
        console.log(values.selectedPicture);
        dispatch(incrementStep());
      }}
    >
      {({ values, setFieldValue, isValid, handleChange }) => (
        <Form>
          <Stack spacing={1}>
            <Stack
              p={2}
              sx={{ borderRadius: "10px", backgroundColor: "common.white" }}
            >
              <UploadFile
                onFileLoaded={(imageFile: any) => {
                  setFieldValue("selectedPicture", imageFile);
                }}
              />
            </Stack>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                borderRadius: "10px",
              }}
              alt="Transport Image"
              src={values.selectedPicture}
            />
          </Stack>
          <Box>
            <AbsoluteBox>
              <SubmitButton type="submit" />
            </AbsoluteBox>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PostSelectPicture;
