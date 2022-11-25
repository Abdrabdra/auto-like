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
  setFormSelectedTransport,
} from "@store/reducers/stepper/stepper.slice";
import { SelectFormProps } from "../SelectedForm.types";

import AbsoluteBox from "@components/modules/AbsoluteBox";

enum Options {
  Option1 = "Автомобиль",
  Option2 = "Мотоциклы",
  Option3 = "Водный транспорт",
}
const name = "selectedTransport";

const SelectTransportForm: FC<SelectFormProps> = ({ expanded }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        selectedTransport: Options.Option1.toString(),
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          dispatch(setFormSelectedTransport(values.selectedTransport));
          console.log(values.selectedTransport);
          dispatch(incrementStep());
        }, 250);
      }}
    >
      {({ values, setFieldValue, isValid }) => (
        <Form>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <RadioGroup
              name={name}
              value={values.selectedTransport.toString()}
              onChange={(event) => {
                setFieldValue(name, event.currentTarget.value);
              }}
            >
              <FormControlLabel
                value={"Автомобиль"}
                control={<Radio required />}
                label={"Автомобиль"}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
              <Divider sx={{ width: "250px", marginLeft: "16px" }} />
              <FormControlLabel
                value={"Мотоциклы"}
                control={<Radio required />}
                label={"Мотоциклы"}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
              <Divider sx={{ width: "250px", marginLeft: "16px" }} />
              <FormControlLabel
                value={"Водный транспорт"}
                control={<Radio required />}
                label={"Водный транспорт"}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: expanded === "panel1" ? "initial" : "none" }}>
            <AbsoluteBox>
              <SubmitButton type="submit" />
            </AbsoluteBox>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SelectTransportForm;
