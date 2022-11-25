import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import MainPage from "./pages/MainPage";
import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { MainContext } from "./context";
import { defaultState } from "./context/MainContext";
import { refresh } from "./store/reducers/auth/auth.action";
import { store, useTypedSelector } from "./store";
import Auth from "./pages/AuthPage";
import Error from "./pages/ErrorPage";

function App() {
  const { isAuth } = useTypedSelector((state) => state.auth);

  // React.useEffect(() => {
  //   if (localStorage.getItem("access_token")) {
  //     store.dispatch(refresh());
  //   }
  // }, []);

  return (
    <>
      <Routes>
        <Route index element={<Navigate to="app" />} />
        <Route
          path="/app/*"
          element={isAuth ? <MainPage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth/*"
          element={isAuth ? <Navigate to="/app" /> : <Auth />}
        />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Navigate to={"/error"} />} />
      </Routes>
    </>
  );
}

export default App;
