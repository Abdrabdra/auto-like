import { Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const TopLogoDrawer = () => {
	const navigate = useNavigate()

	return (
		<Stack justifyContent={"center"} sx={{ width: "100%" }}>
			<Typography
				onClick={() => navigate("/")}
				textAlign={"center"}
				sx={{ fontWeight: 500, fontSize: "24px" }}
			>
				AVTO LIKE
			</Typography>
		</Stack>
	)
}

export default TopLogoDrawer
