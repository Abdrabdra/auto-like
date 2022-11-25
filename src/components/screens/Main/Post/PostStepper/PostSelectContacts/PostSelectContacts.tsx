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
  setFormSelectedContactName,
  setFormSelectedContactNumber,
} from "@store/reducers/stepper/stepper.slice";

import { Form, Formik } from "formik";
import AbsoluteBox from "@components/modules/AbsoluteBox";
import SubmitButton from "@components/ui/Button/SubmitButton";
import { useEffect, useState } from "react";

const PostSelectContacts = () => {
  const dispatch = useDispatch();

  const selectedContactName = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedContactName
  );
  const selectedContactNumber = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedContactNumber
  );

  return (
    <Formik
      initialValues={{
        selectedContactName: selectedContactName,
        selectedContactNumber: selectedContactNumber,
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          dispatch(setFormSelectedContactName(values.selectedContactName));
          dispatch(setFormSelectedContactNumber(values.selectedContactNumber));
          dispatch(incrementStep());
        }, 250);
      }}
    >
      {({ values, setFieldValue, isValid, handleChange }) => (
        <Form>
          <Stack spacing={1}>
            <Stack
              spacing={1}
              sx={{
                backgroundColor: "common.white",
                borderRadius: "10px",
                padding: "14px 15px 14px 20px",
              }}
            >
              <Typography>Имя</Typography>
              <OutlinedInput
                name={"selectedContactName"}
                value={values.selectedContactName}
                onChange={handleChange}
                placeholder="Имя"
                sx={{
                  flex: 1,
                  paddingLeft: "18px",
                  backgroundColor: "common.white",
                  borderRadius: "10px",
                  input: {
                    paddingLeft: "0",
                  },
                }}
              />
            </Stack>
            <Stack
              spacing={1}
              sx={{
                backgroundColor: "common.white",
                borderRadius: "10px",
                padding: "14px 15px 14px 20px",
              }}
            >
              <Typography>Телефон</Typography>
              <OutlinedInput
                name={"selectedContactNumber"}
                value={values.selectedContactNumber}
                onChange={handleChange}
                placeholder="Номер Телеофона"
                sx={{
                  flex: 1,
                  paddingLeft: "18px",
                  backgroundColor: "common.white",
                  borderRadius: "10px",
                  input: {
                    paddingLeft: "0",
                  },
                }}
              />
            </Stack>
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

export default PostSelectContacts;
