import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import SuspenseLoader from "@components/modules/SuspenseLoader"

const MainPage = React.lazy(() => import("./pages/MainPage"))
const Auth = React.lazy(() => import("./pages/AuthPage"))
const Error = React.lazy(() => import("./pages/ErrorPage"))

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Navigate to="app" />} />
				<Route
					path="/app/*"
					element={
						<React.Suspense fallback={<SuspenseLoader />}>
							<MainPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/auth/*"
					element={
						<React.Suspense fallback={<SuspenseLoader />}>
							<Auth />
						</React.Suspense>
					}
				/>
				<Route
					path="error"
					element={
						<React.Suspense fallback={<SuspenseLoader />}>
							<Error />
						</React.Suspense>
					}
				/>
				{/* <Route path="*" element={<Navigate to={"/error"} />} /> */}
			</Routes>
		</>
	)
}

export default App
