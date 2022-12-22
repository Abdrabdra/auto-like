import { Profile } from "@components/screens/Main";
import ProfileInfo from "@components/screens/Main/Profile/ProfileInfo";
import { Route, Routes } from "react-router-dom";

const ProfilePage = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Profile />} />
        <Route path="edit" element={<ProfileInfo />} />
        <Route path="settings" element={<Profile />} />
        <Route path="stats" element={<Profile />} />
        <Route path="announcements" element={<Profile />} />

        <Route path="*" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default ProfilePage;
