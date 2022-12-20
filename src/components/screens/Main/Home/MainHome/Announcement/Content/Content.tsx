import { Box, Stack, Typography } from "@mui/material"

import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import InfoStats from "@components/modules/InfoStat/InfoStat"
import Main from "./Main/Main"
import ContentSkeleton from "./ContentSkeleton"

const Content = () => {
	const { data, isLoading, isSuccess } = useGetAnnouncementsQuery("")

	return (
		<Box>
			<Typography variant="h4" my={1}>
				Объявления
			</Typography>
			<Stack spacing={1.5}>
				{isLoading ? (
					<ContentSkeleton />
				) : isSuccess ? (
					data?.data.map((car) => (
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
		</Box>
	)
}

export default Content
