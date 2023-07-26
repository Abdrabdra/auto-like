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
				alignContent: "flex-end",
				backgroundColor: "secondary.200",
				padding: "20px",
				marginBottom: "-85px",
				paddingBottom: "85px"
			}}
		>
			<Container>
				<Stack>
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

					<Typography
						onClick={() => navigate("/app/info/agreement")}
						variant="caption"
						sx={{
							color: "common.white",
							cursor: "pointer",
							"&:hover": {
								color: "primary.main"
							}
						}}
					>
						Пользовательское соглашение
					</Typography>

					<Typography
						onClick={() => navigate("/app/info/refund")}
						variant="caption"
						sx={{
							color: "common.white",
							cursor: "pointer",
							"&:hover": {
								color: "primary.main"
							}
						}}
					>
						Политика возврата
					</Typography>

					<Typography
						onClick={() => navigate("/app/info/requisites")}
						variant="caption"
						sx={{
							color: "common.white",
							cursor: "pointer",
							"&:hover": {
								color: "primary.main"
							}
						}}
					>
						Реквизиты
					</Typography>
				</Stack>
			</Container>
		</Stack>
	)
}

export default Footer
