import { Container, Stack } from "@mui/material"
import ProfileInfo from "./ProfileInfo"
import ProfileAnnouncements from "./ProfileAnnouncements"
import ProfileSettings from "./ProfileSettings"
import ProfileStatistics from "./ProfileStatistics"

const Profile = () => {
	return (
		<Stack>
			<Container>
				<Stack spacing={2.5}>
					<ProfileInfo />

					<Stack direction="row" spacing={2.5}>
						<ProfileStatistics />
						<ProfileSettings />
					</Stack>

					<ProfileAnnouncements />
				</Stack>
			</Container>
		</Stack>
	)
}

export default Profile
