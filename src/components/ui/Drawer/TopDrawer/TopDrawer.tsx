import { FC, useEffect, useState } from "react";
import { AppBar, Box, Container } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";

import TopOneHomeDrawer from "./TopOneHomeDrawer";
import TopLikeDrawer from "./TopLikeDrawer";
import TopHomeDrawer from "./TopHomeDrawer";
import useCheckPath from "../DrawerUtils/CheckPath";
import TopPostDrawer from "./TopPostDrawer";

const TopDrawer = () => {
  const location = useLocation();
  const [path, setPath] = useState<String | null>(null);

  const matchedPath: string | null | undefined = useCheckPath();
  useEffect(() => {
    matchedPath != null ? setPath(matchedPath) : setPath("/app/other");
  }, [location]);

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: 0,
        bottom: "auto",
        height: "125px",
        justifyContent: "flex-end",
        paddingBottom: "12px",
        backgroundColor: "secondary.200",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {path === "/app/home/one/:announceId" ||
          path === "/app/chat/one/:chatId" ? (
            <TopOneHomeDrawer path={path} />
          ) : path === "/app/home" ? (
            <TopHomeDrawer />
          ) : path === "/app/post" ? (
            <TopPostDrawer />
          ) : (
            <TopLikeDrawer />
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

export default TopDrawer;
