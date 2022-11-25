import { Container, Stack } from "@mui/material";
import ProfileInfo from "./ProfileInfo";
import ProfileMyAnnounce from "./ProfileMyAnnounce";
import ProfileSettings from "./ProfileSettings";
import ProfileStatistics from "./ProfileStatistics";

const Profile = () => {
  return (
    <Stack>
      <Container>
        <Stack spacing={2.5}>
          <ProfileInfo />
          <Stack direction="row" spacing={2.5}>
            <ProfileStatistics />
            <ProfileSettings />
          </Stack>
          <ProfileMyAnnounce />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Profile;
