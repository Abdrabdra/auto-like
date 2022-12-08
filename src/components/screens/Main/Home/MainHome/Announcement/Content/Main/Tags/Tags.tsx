import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/bundle'
import OneTag from './OneTag'
import numberWithSpaces from '@utils/numberWithSpaces'

interface Props {
	tags: { year: number; state: string; mileage: number; body: string; volume: number };
}

const Tags: FC<Props> = ({ tags }) => {
	const { year, state, mileage, body, volume } = tags

	return (
		<Stack direction='row' spacing={1}>
			<OneTag tags>{year}</OneTag>
			<OneTag tags>{state}</OneTag>
			<OneTag tags>{numberWithSpaces(mileage)}км</OneTag>
			<OneTag tags>{body}</OneTag>
			<OneTag tags>{volume}л</OneTag>
		</Stack>
	)
}

export default Tags
