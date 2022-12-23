import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const MainHome = React.lazy(
	() => import("@components/screens/Main/Home/MainHome")
)

const OneHome = React.lazy(
	() => import("@components/screens/Main/Home/OneHome")
)

const HomePage = () => {
	return (
		<Routes>
			<Route>
				<Route index element={<MainHome />} />
				<Route path="one" element={<Navigate to="/" />} />
				<Route path="one/:announceId" element={<OneHome />} />
				{/* <Route path="filter" element={<Filter />} /> */}

				<Route path="*" element={<MainHome />} />
			</Route>
		</Routes>
	)
}

export default HomePage
