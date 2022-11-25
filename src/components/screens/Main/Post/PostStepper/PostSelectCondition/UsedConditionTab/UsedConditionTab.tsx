import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { conditionData } from "./UsedConditionTab.constants";

const UsedConditionTab = () => {
  return (
    <Stack spacing={1.25}>
      <Stack
        spacing={1}
        sx={{
          backgroundColor: "common.white",
          borderRadius: "10px",
          padding: "14px 15px 14px 20px",
        }}
      >
        <Typography>Пробег</Typography>
        <OutlinedInput
          placeholder="Поиск"
          endAdornment={
            <InputAdornment position="end">
              <Box p={2} sx={{ color: "common.black" }}>
                km
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
      {conditionData.map((row, index) => (
        <Box
          sx={{
            padding: "14px 15px 14px 20px",
            borderRadius: "10px",
            backgroundColor: "common.white",
          }}
        >
          <FormGroup key={index}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={row.value}
            />
          </FormGroup>
        </Box>
      ))}
    </Stack>
  );
};

export default UsedConditionTab;
