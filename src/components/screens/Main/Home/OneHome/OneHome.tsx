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
import OptionBox from "./BodyOneHome/OptionBox"
import SimilarBox from "./BodyOneHome/SimilarBox"
import OneHomeSkeleton from "./OneHomeSkeleton"

const OneHome = () => {
	const { announceId } = useParams()

	const { data, isLoading } = useGetOneAnnouncementQuery(
		announceId ? announceId : ""
	)

	return (
		<Box>
			<Container>
				{isLoading ? (
					<OneHomeSkeleton />
				) : data ? (
					<Stack spacing={2}>
						<ImageBox />
						<TagBox />
						<TitleBox
							title={`${data.a.marka.title} ${data.a.model.title}`}
							price={data.a.price}
						/>
						<DoubleTab />
						<Description />
						<OptionBox />
						<SimilarBox />
					</Stack>
				) : null}
			</Container>
		</Box>
	)
}

export default OneHome
