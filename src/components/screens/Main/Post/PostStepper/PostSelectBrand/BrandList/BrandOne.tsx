import { FC } from "react"
import { Button, Stack, Typography } from "@mui/material"

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { IMarka } from "types/Marka/Marka"

interface Props {
	data: IMarka
	handleSelect: (id: number) => void
	selectedBrand?: number | string
}

const BrandOne: FC<Props> = ({ data, handleSelect, selectedBrand }) => {
	const { id, title } = data

	return (
		<Button
			onClick={() => handleSelect(id)}
			fullWidth
			variant="contained"
			sx={{
				borderRadius: "10px",
				padding: "14px 15px 14px 20px",
				backgroundColor: selectedBrand === id ? "primary.main" : "common.white"
			}}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
				sx={{
					flex: "1"
				}}
			>
				<Typography
					sx={{
						color: "common.black",
						fontSize: "18px",
						fontWeight: 600
					}}
				>
					{title}
				</Typography>
				<KeyboardArrowRightIcon sx={{ color: "common.black" }} />
			</Stack>
		</Button>
	)
}

export default BrandOne
