// library
import React from "react"
import { Box, Container, Typography } from "@mui/material"

import LoginHeadBox from "../Login/LoginHeadBox"
import RegistrationForm from "./RegistrationForm"

const Registration: React.FC = () => {
	return (
		<Box>
			<LoginHeadBox />

			<Container>
				<Typography
					align="center"
					sx={{
						marginTop: "35px",
						lineHeight: "29.11px",
						fontSize: "24px",
						marginBottom: "24px",
						fontWeight: 500
					}}
				>
					Регистрация
				</Typography>

				<RegistrationForm />
			</Container>
		</Box>
	)
}

export default Registration
