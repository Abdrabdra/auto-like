import { Stack } from "@mui/material"

import ProfileAnnouncements from "./ProfileAnnouncements"
import ProfileInfo from "./ProfileInfo"
import ProfileSettings from "./ProfileSettings"
import ProfileStatistics from "./ProfileStatistics"

const ProfileContent = () => {
	return (
		<Stack spacing={2.5}>
			<ProfileInfo />

			<Stack direction="row" spacing={2.5}>
				<ProfileStatistics />
				<ProfileSettings />
			</Stack>

			<ProfileAnnouncements />
		</Stack>
	)
}

export default ProfileContent
