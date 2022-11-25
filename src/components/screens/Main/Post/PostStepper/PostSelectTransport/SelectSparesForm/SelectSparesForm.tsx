import AbsoluteBox from "@components/modules/AbsoluteBox";
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
  Hidden,
} from "@mui/material";
import { RootState, useTypedSelector } from "@store/index";
import {
  incrementStep,
  setFormSelectedTransport,
} from "@store/reducers/stepper/stepper.slice";
import { Form, Formik, useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SelectFormProps } from "../SelectedForm.types";

enum Options {
  Option1 = "Автомобиль",
  Option2 = "Мотоциклы",
  Option3 = "Водный транспорт",
}

const SelectSparesForm: FC<SelectFormProps> = ({ expanded }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const name = "selectedTransport";

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
      {({ values, setFieldValue }) => (
        <Form>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <RadioGroup
              name={name}
              value={values.selectedTransport.toString()}
              onChange={(event) => {
                setFieldValue(name, event.currentTarget.value);
                setDisabled(false);
              }}
            >
              <FormControlLabel
                value={"Запчасти"}
                control={<Radio required />}
                label={"Запчасти"}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
              <Divider sx={{ width: "250px", marginLeft: "16px" }} />
              <FormControlLabel
                value={"Моторы"}
                control={<Radio required />}
                label={"Моторы"}
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
          <Box sx={{ display: expanded === "panel2" ? "initial" : "none" }}>
            <AbsoluteBox>
              <SubmitButton type="submit" disabled={disabled} />
            </AbsoluteBox>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SelectSparesForm;
