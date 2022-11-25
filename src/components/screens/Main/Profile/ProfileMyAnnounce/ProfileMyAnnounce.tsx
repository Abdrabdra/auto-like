import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const data = [
  {
    title: "Lexus LF LC 500",
    views: 200,
    messages: 12,
  },
  {
    title: "Lexus LF LC 500",
    views: 200,
    messages: 12,
  },
];

const ProfileMyAnnounce = () => (
  <Stack
    p={2.5}
    pt={2}
    spacing={3}
    sx={{ backgroundColor: "secondary.100", borderRadius: "20px" }}
  >
    <Stack direction={"row"} justifyContent="space-between" alignItems="center">
      <Typography
        sx={{ fontSize: "18px", fontWeight: 500, color: "common.white" }}
      >
        Мои объявления
      </Typography>
      <IconButton color="primary">
        <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
    <Stack spacing={1.5}>
      {data.map((row) => (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={"space-evenly"}
        >
          <Box
            sx={{
              flex: "0.5",
            }}
          >
            <Box
              sx={{
                backgroundColor: "grey.100",
                width: "50px",
                height: "50px",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Stack spacing={0.5} sx={{ flex: "1 10 100px" }} alignItems="center">
            <Box>
              <Box>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontSize: "16px",
                    color: "common.white",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {row.title}
                </Typography>
              </Box>
              <Stack direction="row" spacing={0.5}>
                <Box>
                  <Typography
                    sx={{
                      flex: "1",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "secondary.900",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    +{row.views} просмотров
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ backgroundColor: "secondary.900" }}
                />
                <Box>
                  <Typography
                    sx={{
                      flex: "1",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "secondary.900",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    +{row.messages} сообщений
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Box sx={{ flex: "0.5", display: "flex", justifyContent: "center" }}>
            <IconButton
              sx={{
                color: "secondary.900",
                backgroundColor: "info.200",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
            </IconButton>
          </Box>
        </Stack>
      ))}
    </Stack>
  </Stack>
);

export default ProfileMyAnnounce;
