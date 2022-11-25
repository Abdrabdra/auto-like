import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
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
} from "@store/reducers/stepper/stepper.slice";

import { selectCase } from "./PostSelectCase.constants";

const PostSelectCase = () => {
  const dispatch = useDispatch();
  const selectedCase = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedCase
  );

  const handleClick = (value: string) => {
    setTimeout(() => {
      dispatch(setFormSelectedMark(value));
      console.log(value);
      dispatch(incrementStep());
    }, 250);
  };

  return (
    <Stack spacing={1.8}>
      <Box sx={{ display: "flex" }}>
        <Input
          placeholder="Поиск"
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
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
      </Box>
      <Stack spacing={1.25}>
        {selectCase.map((row, index) => (
          <Button
            key={index}
            onClick={() => handleClick(row.value)}
            fullWidth
            variant="contained"
            sx={{
              borderRadius: "10px",
              padding: "14px 15px 14px 20px",
              backgroundColor:
                selectedCase === row.value ? "primary.main" : "common.white",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                flex: "1",
              }}
            >
              <Typography
                sx={{
                  color: "common.black",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {row.value}
              </Typography>
              <KeyboardArrowRightIcon sx={{ color: "common.black" }} />
            </Stack>
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default PostSelectCase;
