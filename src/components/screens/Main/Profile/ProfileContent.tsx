import { Button, Stack } from "@mui/material"
import { useDispatch } from "react-redux"

import { logout } from "@store/reducers/auth/auth.action"

import ProfileAnnouncements from "./ProfileAnnouncements"
import ProfileInfo from "./ProfileInfo"
import ProfileSettings from "./ProfileSettings"
import ProfileStatistics from "./ProfileStatistics"
import { AppDispatch } from "@store/index"

const ProfileContent = () => {
	const dispatch = useDispatch<AppDispatch>()

	const handleLogOut = () => {
		dispatch(logout())
	}

	return (
		<Stack spacing={2.5}>
			<ProfileInfo />

			<Stack direction="row" spacing={2.5}>
				<ProfileStatistics />
				<ProfileSettings />
			</Stack>

			<ProfileAnnouncements />

			<Button onClick={handleLogOut} variant="outlined" color="error">
				Выйти
			</Button>
		</Stack>
	)
}

export default ProfileContent
