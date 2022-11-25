import { Stack } from "@mui/material";
import GoBackButton from "@components/ui/Button/GoBackButton";

const TopPostDrawer = () => (
  <Stack
    direction="row"
    alignItems={"center"}
    spacing={1.75}
    sx={{ width: "100%" }}
  >
    <GoBackButton forPost={true} />
  </Stack>
);

export default TopPostDrawer;
