import React from "react"
import { CircularProgress, Container, Stack } from "@mui/material"
import SuspenseLoader from "@components/modules/SuspenseLoader"

const PostStepper = React.lazy(() => import("./PostStepper"))

const Post = () => {
	return (
		<Stack>
			<Container>
				<PostStepper />
			</Container>
		</Stack>
	)
}

export default Post
