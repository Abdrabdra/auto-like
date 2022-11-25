// library
import { Box, Container, Drawer, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MainDrawer } from "../../ui/Drawer";
import TopDrawer from "../../ui/Drawer/TopDrawer";

const MainLayout = () => {
  return (
    <>
      <TopDrawer />
      <Box sx={{ paddingTop: "145px", paddingBottom: "85px" }}>
        <Outlet />
      </Box>
      <MainDrawer />
    </>
  );
};

export default MainLayout;
