import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import TopDrawer from "../../../../ui/Drawer/TopDrawer";
import Announcement from "./Announcement";
import Banner from "./Banner";
import NavBox from "./NavBox/NavBox";

const MainHome: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("one/1");
  };

  return (
    <Box>
      <Container>
        <Stack spacing={1}>
          <Banner />
          <NavBox />
          <Announcement />
        </Stack>
      </Container>
    </Box>
  );
};

export default MainHome;
