import { FC, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import Main from "./Main/Main"
import ContentSkeleton from "./ContentSkeleton"
import InfoStats from "@components/modules/InfoStat/InfoStat"
import { useTypedSelector } from "@store/index"

interface Props {
	forArchive?: boolean
	forMyAnnouncements?: boolean
	getCounts?: (value: number) => void
}

const ContentList: FC<Props> = ({
	forArchive,
	forMyAnnouncements,
	getCounts
}) => {
	const filterValues = useTypedSelector((state) => state.filter.values)

	const queryParams = {
		orderByLikesASC: forArchive ? true : undefined
	}

	const queryWithFilterParams = {
		...filterValues
	}

	const { data, isLoading, isSuccess } = useGetAnnouncementsQuery(
		forArchive ? queryParams : queryWithFilterParams,
		{
			refetchOnMountOrArgChange: true
		}
	)

	useEffect(() => {
		if (isSuccess) {
			getCounts && getCounts(data.count)
		}
	}, [isSuccess])

	return (
		<Stack spacing={1.5}>
			{isLoading ? (
				<ContentSkeleton />
			) : isSuccess ? (
				data.count === 0 ? (
					<Typography>Нет Объявлений</Typography>
				) : (
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
				)
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default ContentList
