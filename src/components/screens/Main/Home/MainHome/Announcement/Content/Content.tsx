import { Box, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAnnouncementsQuery } from '@store/rtk-api/announcement-rtk/announcementEndpoints'
import InfoStats from '@components/modules/InfoStat/InfoStat'
import Main from './Main/Main'
import { IAnnouncement } from '@store/rtk-api/announcement-rtk/announcement.type'

const Content = () => {
	const { data, isLoading, isError } = useGetAnnouncementsQuery('')

	return (
		<Box>
			<Typography variant='h4' my={1}>
				Объявления
			</Typography>
			<Stack spacing={1.5}>
				{data && data.data.map((car) => (
					<Box
						key={car.id}
						sx={{
							height: '146px',
							backgroundColor: 'common.white',
							borderRadius: '10px'
						}}
					>
						<Main car={car as IAnnouncement} />
						<InfoStats views={car.views} publishDate={car.createdAt} />
					</Box>
				))}
			</Stack>
		</Box>
	)
}

export default Content
