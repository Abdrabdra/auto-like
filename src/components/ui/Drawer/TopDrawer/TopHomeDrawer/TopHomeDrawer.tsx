import { Box, Button, Icon, Input, Stack } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import PostSelectModification from "@components/screens/Main/Post/PostStepper/PostSelectModification";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TopHomeDrawer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app/home/filter");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Input placeholder="Поиск" disableUnderline sx={{ flex: 1 }} />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          minWidth: "50px",
          width: "50px",
          height: "50px",
          borderRadius: "12px",
        }}
      >
        <Icon component={TuneOutlinedIcon} />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Фильтры
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Сбросить
            </Button>
          </Toolbar>
        </AppBar>
        <Stack>
          <PostSelectModification forFilter={true} />
        </Stack>
      </Dialog>
    </>
  );
};

export default TopHomeDrawer;
