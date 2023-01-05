import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const MainHome = React.lazy(
	() => import("@components/screens/Main/Home/MainHome")
)

const OneHome = React.lazy(
	() => import("@components/screens/Main/Home/OneHome")
)

const HomeSearch = React.lazy(
	() => import("@components/screens/Main/Home/HomeSearch")
)

const HomePage = () => {
	return (
		<Routes>
			<Route>
				<Route index element={<MainHome />} />

				<Route path="one" element={<Navigate to="/" />} />
				<Route path="one/:announceId" element={<OneHome />} />

				<Route path="search" element={<HomeSearch />} />

				<Route path="*" element={<MainHome />} />
			</Route>
		</Routes>
	)
}

export default HomePage
