import { Box, Container, Skeleton, Stack, Typography } from "@mui/material"
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

const OneHome = () => {
	const { announceId } = useParams()

	const { data, isLoading } = useGetOneAnnouncementQuery(
		announceId ? announceId : ""
	)

	return (
		<Box>
			<Container>
				{isLoading ? (
					<Stack spacing={1}>
						<Skeleton
							animation={"wave"}
							variant={"rectangular"}
							width={"100%"}
							height={200}
							sx={{
								borderRadius: "20px"
							}}
						/>
						<Skeleton />
						<Stack>
							<Skeleton animation={"wave"} width="50%" sx={{ pt: 1 }} />
							<Skeleton animation={"wave"} width="35%" sx={{ pt: 1 }} />
						</Stack>
						<Skeleton animation={"wave"} height={287} />
						<Skeleton animation={"wave"} height={137} />
					</Stack>
				) : data ? (
					<Stack spacing={1}>
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
