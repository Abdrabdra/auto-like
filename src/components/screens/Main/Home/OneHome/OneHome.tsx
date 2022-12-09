import { Box, Container, Stack } from "@mui/material"
import {
	Description,
	DoubleTab,
	ImageBox,
	TagBox,
	TitleBox
} from "./BodyOneHome"

const OneHome = () => {
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
