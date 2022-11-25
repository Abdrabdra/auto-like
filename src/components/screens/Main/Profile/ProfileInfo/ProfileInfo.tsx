import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import ImageIcon from "@mui/icons-material/Image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProfileInfo = () => {
  return (
    <Stack
      spacing={2}
      p={2.5}
      sx={{
        height: "190px",
        borderRadius: "20px",
        backgroundColor: "error.100",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ width: 64, height: 64, bgcolor: "common.black" }}>
          <PersonIcon />
        </Avatar>
        <Stack>
          <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
            Инсар Еркимбеков
          </Typography>
          <Typography sx={{ color: "secondary.900", fontWeight: 600 }}>
            + 7 707 188 18 34
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={0.8}>
        <Typography sx={{ color: "secondary.900", fontWeight: 600 }}>
          C Avto-Like с{" "}
        </Typography>
        <Typography sx={{ fontWeight: 600 }}>2022г. 24 ноября</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction={"row"} spacing={1}>
          <Stack
            direction="row"
            justifyContent={"center"}
            spacing={0.5}
            px={1}
            alignItems="center"
            sx={{
              backgroundColor: "common.white",
              borderRadius: "12px",
              height: "35px",
            }}
          >
            <IconButton color="primary" sx={{ padding: 0 }}>
              <ImageIcon />
            </IconButton>
            <Typography sx={{ fontWeight: 600 }}>16 постов</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"center"}
            spacing={0.5}
            px={1}
            alignItems="center"
            sx={{
              backgroundColor: "common.white",
              borderRadius: "12px",
              height: "35px",
            }}
          >
            <IconButton color="primary" sx={{ padding: 0 }}>
              <FavoriteIcon />
            </IconButton>
            <Typography sx={{ fontWeight: 600 }}>3 345 лайков</Typography>
          </Stack>
        </Stack>
        <IconButton color="primary" sx={{ backgroundColor: "secondary.300" }}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ProfileInfo;
