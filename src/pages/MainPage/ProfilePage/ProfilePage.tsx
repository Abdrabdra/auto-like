import { Profile } from "@components/screens/Main";
import { Route, Routes } from "react-router-dom";

const ProfilePage = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Profile />} />

        <Route path="*" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default ProfilePage;
