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
  setFormSelectedPrice,
} from "@store/reducers/stepper/stepper.slice";

import { Form, Formik } from "formik";
import AbsoluteBox from "@components/modules/AbsoluteBox";
import SubmitButton from "@components/ui/Button/SubmitButton";

const PostSelectPrice = () => {
  const dispatch = useDispatch();

  const selectedPrice = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedPrice
  );

  return (
    <Formik
      initialValues={{
        selectedPrice: selectedPrice,
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          dispatch(setFormSelectedPrice(values.selectedPrice));
          console.log(values.selectedPrice);
          dispatch(incrementStep());
        }, 250);
      }}
    >
      {({ values, setFieldValue, isValid, handleChange }) => (
        <Form>
          <Stack
            spacing={1}
            sx={{
              backgroundColor: "common.white",
              borderRadius: "10px",
              padding: "14px 15px 14px 20px",
            }}
          >
            <Typography>Цена</Typography>
            <OutlinedInput
              name={"selectedPrice"}
              value={values.selectedPrice}
              onChange={handleChange}
              placeholder="Поиск"
              endAdornment={
                <InputAdornment position="end">
                  <Box p={2} sx={{ color: "common.black" }}>
                    KZT
                  </Box>
                </InputAdornment>
              }
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

export default PostSelectPrice;
