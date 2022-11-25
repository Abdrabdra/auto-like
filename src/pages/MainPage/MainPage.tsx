import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "../../components/layouts";

// import Layout from "../../components/layouts";
import ChatPage from "./ChatPage";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import ProfilePage from "./ProfilePage";
import LikePage from "./LikePage";

const MainPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home/*" element={<HomePage />} />
          <Route path="like/*" element={<LikePage />} />
          <Route path="post/*" element={<PostPage />} />
          <Route path="chat/*" element={<ChatPage />} />
          <Route path="profile/*" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainPage;
