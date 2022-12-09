import { Box, Container, Stack } from "@mui/material"
import { useGetOneAnnouncementQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useParams } from "react-router-dom"

import {
	Description,
	DoubleTab,
	ImageBox,
	TagBox,
	TitleBox
} from "./BodyOneHome"

const OneHome = () => {
	const { announceId } = useParams()

	const { data, isLoading } = useGetOneAnnouncementQuery(
		announceId ? announceId : ""
	)

	return (
		<Box>
			<Container>
				<Stack spacing={1}>
					<ImageBox />
					<TagBox />
					<TitleBox title="Toyota Alphard" price={15000} />
					<DoubleTab />
					<Description />
					{/*<InfoStats views={770} publishDate={'7'} />*/}
				</Stack>
			</Container>
		</Box>
	)
}

export default OneHome
