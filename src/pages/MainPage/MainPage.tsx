import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { MainLayout } from "../../components/layouts"

const ChatPage = React.lazy(() => import("./ChatPage"))
const HomePage = React.lazy(() => import("./HomePage"))
const PostPage = React.lazy(() => import("./PostPage"))
const ProfilePage = React.lazy(() => import("./ProfilePage"))
const LikePage = React.lazy(() => import("./LikePage"))

const MainPage = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Navigate to="home" />} />
				<Route
					path="home/*"
					element={
						<React.Suspense fallback={<div>Загрузка...</div>}>
							<HomePage />
						</React.Suspense>
					}
				/>
				<Route
					path="like/*"
					element={
						<React.Suspense fallback={<div>Загрузка...</div>}>
							<LikePage />
						</React.Suspense>
					}
				/>
				<Route
					path="post/*"
					element={
						<React.Suspense fallback={<div>Загрузка...</div>}>
							<PostPage />
						</React.Suspense>
					}
				/>
				<Route
					path="chat/*"
					element={
						<React.Suspense fallback={<div>Загрузка...</div>}>
							<ChatPage />
						</React.Suspense>
					}
				/>
				<Route
					path="profile/*"
					element={
						<React.Suspense fallback={<div>Загрузка...</div>}>
							<ProfilePage />
						</React.Suspense>
					}
				/>
			</Route>
		</Routes>
	)
}

export default MainPage
