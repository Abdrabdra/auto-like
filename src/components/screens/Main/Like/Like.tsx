import { Stack } from "@mui/material"

import LikeHeader from "./LikeHeader"
import LikeImages from "./LikeImages"
import LikeFooter from "./LikeFooter"
import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

const Like = () => {
	const queryParams = {
		favorites: true
	}

	const { data } = useGetAnnouncementsQuery(queryParams)

	return (
		<Stack spacing={3}>
			{data?.data.map((row) => (
				<Stack spacing={1} key={row.id}>
					<LikeHeader data={row} />
					<LikeImages data={row.avatar} />
					<LikeFooter data={row}  />
				</Stack>
			))}
		</Stack>
	)
}

export default Like
