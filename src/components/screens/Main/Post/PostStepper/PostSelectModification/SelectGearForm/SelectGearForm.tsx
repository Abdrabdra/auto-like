import SubmitButton from "@components/ui/Button/SubmitButton";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  RadioGroup,
  Stack,
  FormLabel,
} from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { RootState, useTypedSelector } from "@store/index";

import {
  incrementStep,
  setFormSelectedEngine,
  setFormSelectedGear,
  setFormSelectedTransport,
} from "@store/reducers/stepper/stepper.slice";
import { SelectFormProps } from "../PostSelectModification.types";

import AbsoluteBox from "@components/modules/AbsoluteBox";

enum Options {
  Option1 = "Передний",
  Option2 = "Задний",
}
const name = "selectedGear";

const SelectGearForm: FC<SelectFormProps> = ({ expanded }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        selectedGear: Options.Option1.toString(),
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          dispatch(setFormSelectedGear(values.selectedGear));
          console.log(values.selectedGear);
          dispatch(incrementStep());
        }, 250);
      }}
    >
      {({ values, setFieldValue, isValid }) => (
        <Form>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <RadioGroup
              name={name}
              value={values.selectedGear.toString()}
              onChange={(event) => {
                setFieldValue(name, event.currentTarget.value);
              }}
            >
              <FormControlLabel
                value={Options.Option1}
                control={<Radio required />}
                label={Options.Option1}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
              <Divider sx={{ width: "250px", marginLeft: "16px" }} />
              <FormControlLabel
                value={Options.Option2}
                control={<Radio required />}
                label={Options.Option2}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: expanded === "panel2" ? "initial" : "none" }}>
            <AbsoluteBox>
              <SubmitButton type="submit" />
            </AbsoluteBox>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SelectGearForm;
