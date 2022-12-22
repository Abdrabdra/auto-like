import React from "react"
import { Route, Routes } from "react-router-dom"

const Profile = React.lazy(() => import("@components/screens/Main/Profile"))
const ProfileInfoEdit = React.lazy(
	() => import("@components/screens/Main/Profile/ProfileInfo/ProfileInfoEdit")
)
const ProfileSettingsPage = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileSettings/ProfileSettingsPage"
		)
)
const ProfileStatisticPage = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileStatistics/ProfileStatisticPage"
		)
)
const ProfileAnnouncementsPage = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileAnnouncements/ProfileAnnouncementsPage"
		)
)

const ProfilePage = () => {
	return (
		<Routes>
			<Route>
				<Route index element={<Profile />} />
				<Route path="edit" element={<ProfileInfoEdit />} />
				<Route path="settings" element={<ProfileSettingsPage />} />
				<Route path="stats" element={<ProfileStatisticPage />} />
				<Route path="announcements" element={<ProfileAnnouncementsPage />} />

				<Route path="*" element={<Profile />} />
			</Route>
		</Routes>
	)
}

export default ProfilePage
