import { Box, Button, Icon, Stack, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HandymanIcon from "@mui/icons-material/Handyman";
import AddIcon from "@mui/icons-material/Add";

const boxes = [
  { title: "Автомобили", icon: DirectionsCarIcon },
  { title: "Запчасти", icon: HandymanIcon },
  { title: "Подать", icon: AddIcon },
];

const NavBox = () => {
  return (
    <Stack direction="row" justifyContent="space-evenly" spacing={1}>
      {boxes.map((box, index) => (
        <Box
          key={index}
          sx={{
            padding: "12px",
            backgroundColor: "common.white",
            borderRadius: "10px",
            flex: "0 1 110px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "secondary.300",
              borderRadius: "5px",
              marginBottom: "12px",
            }}
          >
            <Icon component={box.icon} />
          </Button>
          <Typography
            align="center"
            sx={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            {box.title}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default NavBox;
