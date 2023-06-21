import { Container, Stack, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

const Footer = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate("/app/info")
	}

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
				<Typography
					onClick={handleClick}
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
			</Container>
		</Stack>
	)
}

export default Footer
