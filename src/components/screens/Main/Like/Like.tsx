import { Stack } from "@mui/material";
import LikeFooter from "./LikeFooter";

import LikeHeader from "./LikeHeader";
import LikeImages from "./LikeImages";

const Like = () => {
  return (
    <Stack spacing={3}>
      {[1, 2, 3].map((index) => (
        <Stack spacing={1}>
          <LikeHeader />
          <LikeImages />
          <LikeFooter />
        </Stack>
      ))}
    </Stack>
  );
};

export default Like;
