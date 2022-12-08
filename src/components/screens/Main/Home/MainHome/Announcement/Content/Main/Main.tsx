import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import numberWithSpaces from '@utils/numberWithSpaces'

import LikeButton from './LikeButton'
import Tags from './Tags'
import { IAnnouncement } from '@store/rtk-api/announcement-rtk/announcement.type'

interface Props {
	car: IAnnouncement
}

const Main: FC<Props> = ({ car }) => {
	const {
		id,
		price,
		createdAt,
		views,
		model,
		transmission,
		avatar,
		year,
		mileage,
		steeringWheel,
		volume,
		state,
		marka,
		city,
		body,
		like,
		countImages,
		profilelike
	} = car
	const navigate = useNavigate()

	const tags = {
		year: year,
		state: state,
		mileage: mileage,
		body: body,
		volume: volume
	}


	const handleNavigate = () => {
		navigate(`/app/home/one/${id}`)
	}

	return (
		<Stack direction='row' spacing={1} sx={{ padding: '4px 8px 8px 4px' }}>
			<Box
				sx={{
					backgroundColor: 'secondary.200',
					borderRadius: '10px',
					width: '120px',
					height: '110px'
				}}
			>
				{/* <<img alt="car image" />> */}
			</Box>
			<Stack justifyContent='center' sx={{ flex: '1' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'start'
					}}
				>
					<Stack>
						<Typography onClick={handleNavigate} variant='h6'>{marka} {model}</Typography>
						<Typography variant='h6' color='primary'>
							{numberWithSpaces(price)}KZT
						</Typography>
						<Typography variant='h6'
												sx={{ fontWeight: 500, fontSize: '12px', color: 'secondary.500' }}>
							г. {city}
						</Typography>
					</Stack>
					<LikeButton />
				</Box>
				<Tags tags={tags} />
			</Stack>
		</Stack>
	)
}

export default Main
