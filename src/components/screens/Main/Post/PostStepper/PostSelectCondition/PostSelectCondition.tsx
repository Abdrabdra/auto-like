import { Box, Stack, Tab, Tabs } from "@mui/material";

import { useDispatch } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";

import { selectMarks } from "./PostSelectCondition.constants";
import {
  incrementStep,
  setFormSelectedCondition,
} from "@store/reducers/stepper/stepper.slice";
import { RootState, useTypedSelector } from "@store/index";
import {
  a11yProps,
  TabPanel,
} from "@components/screens/Main/Home/OneHome/BodyOneHome/DoubleTab/TabConfig";
import React from "react";
import UsedConditionTab from "./UsedConditionTab";
import NewConditionTab from "./NewConditionTab";
import AbsoluteBox from "@components/modules/AbsoluteBox";
import SubmitButton from "@components/ui/Button/SubmitButton";

const PostSelectCondition = () => {
  const dispatch = useDispatch();
  const selectedMark = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedMark
  );

  const handleClick = (value: string) => {
    setTimeout(() => {
      dispatch(setFormSelectedCondition(value));
      console.log(value);
      dispatch(incrementStep());
    }, 250);
  };

  // Tab Functions
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="С пробегом" {...a11yProps(0)} sx={{ flex: "1" }} />
          <Tab label="Новая" {...a11yProps(1)} sx={{ flex: "1" }} />
        </Tabs>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <UsedConditionTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NewConditionTab />
        </TabPanel>
      </Box>

      <Box>
        <AbsoluteBox>
          <SubmitButton onClick={() => handleClick("Новая")} />
        </AbsoluteBox>
      </Box>
    </Stack>
  );
};

export default PostSelectCondition;
