import { FC } from "react"
import { Button, Stack, Typography } from "@mui/material"

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { IGeneration, IMarka } from "types/Marka/Marka"

interface Props {
	data: {
		id: number
		title: string
		createdFrom?: number | null
		createdTo?: number | null
	}
	handleSelect: (
		id: number,
		title: string,
		from?: null | number,
		to?: null | number
	) => void
	selectedBrand?: { id?: number; title?: string }
	generationData?: IGeneration
}

const BrandOne: FC<Props> = ({
	data,
	handleSelect,
	selectedBrand,
	generationData
}) => {
	const { id, title } = data

	return (
		<Button
			onClick={() =>
				handleSelect(id, title, data?.createdFrom, data?.createdTo)
			}
			fullWidth
			variant="contained"
			sx={{
				borderRadius: "10px",
				padding: "14px 15px 14px 20px",
				backgroundColor:
					selectedBrand?.id === id ? "primary.main" : "common.white"
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
					{generationData
						? `${generationData.createdFrom}-${generationData.createdTo} поколение (${generationData.title})`
						: title}
				</Typography>
				<KeyboardArrowRightIcon sx={{ color: "common.black" }} />
			</Stack>
		</Button>
	)
}

export default BrandOne
