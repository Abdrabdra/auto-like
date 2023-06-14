import { Container, Stack, Typography } from "@mui/material"
import React from "react"

const Footer = () => {
	return (
		<Stack
			sx={{
				backgroundColor: "secondary.200",
				padding: "20px",
				marginBottom: "-85px",
				paddingBottom: "85px"
			}}
		>
			<Container>
				<div>
					<a
						style={{ textDecoration: "none" }}
						target={"_blank"}
						href="https://docs.google.com/document/d/1MNV57Ls7nlvWIJdUwmKuPj-5Y8NaNgTb"
					>
						<Typography
							variant="caption"
							sx={{
								color: "common.white",
								cursor: "pointer",
								"&:hover": {
									color: "primary.main"
								}
							}}
						>
							Политика конфиденциальности
						</Typography>
					</a>
				</div>
			</Container>
		</Stack>
	)
}

export default Footer
