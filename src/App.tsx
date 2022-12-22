import { Navigate, Route, Routes } from "react-router-dom"

import MainPage from "./pages/MainPage"
import React from "react"
import { useTypedSelector } from "./store"
import Auth from "./pages/AuthPage"
import Error from "./pages/ErrorPage"

function App() {
	const { isAuth } = useTypedSelector((state) => state.auth)

	// React.useEffect(() => {
	//   if (localStorage.getItem("access_token")) {
	//     store.dispatch(refresh());
	//   }
	// }, []);

	return (
		<>
			<Routes>
				<Route index element={<Navigate to="app" />} />
				<Route path="/app/*" element={<MainPage />} />
				<Route
					path="/auth/*"
					element={isAuth ? <Navigate to="/app" /> : <Auth />}
				/>
				<Route path="error" element={<Error />} />
				{/* <Route path="*" element={} /> */}
				{/* <Route path="*" element={<Navigate to={"/error"} />} /> */}
			</Routes>
		</>
	)
}

export default App
