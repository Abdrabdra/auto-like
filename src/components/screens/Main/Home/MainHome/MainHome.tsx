import { Box, Container, Stack } from "@mui/material"

import Announcement from "./Announcement"
import Banner from "./Banner"
import Footer from "./Footer"
import NavBox from "./NavBox/NavBox"

const MainHome: React.FC = () => {
	return (
		<Stack sx={{ gap: "50px" }}>
			<Container>
				<Stack spacing={1}>
					<Banner />
					<NavBox />
					<Announcement />
				</Stack>
			</Container>
			<Footer />
		</Stack>
	)
}

export default MainHome
