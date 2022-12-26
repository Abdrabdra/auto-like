import { FC } from "react"
import { Box, Stack } from "@mui/material"

import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import Main from "./Main/Main"
import ContentSkeleton from "./ContentSkeleton"
import InfoStats from "@components/modules/InfoStat/InfoStat"

interface Props {
	forArchive?: boolean
	forMyAnnouncements?: boolean
}

const ContentList: FC<Props> = ({ forArchive, forMyAnnouncements }) => {
	const queryParams = {
		orderByLikesASC: forArchive ? true : undefined
	}

	const { data, isLoading, isSuccess } = useGetAnnouncementsQuery(queryParams)

	return (
		<Stack spacing={1.5}>
			{isLoading ? (
				<ContentSkeleton />
			) : isSuccess ? (
				data.data.map((car) => (
					<Box
						key={car.id}
						sx={{
							height: "146px",
							backgroundColor: "common.white",
							borderRadius: "10px"
						}}
					>
						<Main car={car} />
						<InfoStats views={car.views} publishDate={car.createdAt} />
					</Box>
				))
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default ContentList
