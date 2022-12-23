import { Stack } from "@mui/material"
import LikeFooter from "./LikeFooter"

import LikeHeader from "./LikeHeader"
import LikeImages from "./LikeImages"

const Like = () => {
	return (
		<Stack spacing={3}>
			{[1, 2, 3].map((row) => (
				<Stack spacing={1} key={row}>
					<LikeHeader />
					<LikeImages />
					<LikeFooter />
				</Stack>
			))}
		</Stack>
	)
}

export default Like
