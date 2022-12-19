import { Box, Divider, Stack, Typography } from "@mui/material"

const DetailsTab = () => {
	const stateData = [
		{ title: "Город" },
		{ title: "Поколение" },
		{ title: "Кузов" },
		{ title: "Объем двигателя" },
		{ title: "Пробег" },
		{ title: "Коробка передач" },
		{ title: "Привод" },
		{ title: "Руль" },
		{ title: "Цвет" },
		{ title: "Растаможен в КЗ" },
		{ title: "Состояние" }
	]

	return (
		<Box
			sx={{
				backgroundColor: "common.white",
				borderRadius: "12px",
				padding: "16px"
			}}
		>
			<Stack>
				{stateData.map((row, index) => (
					<Stack spacing={1} sx={{ paddingTop: "0.5rem" }}>
						<Box sx={{ display: "flex" }} key={index}>
							<Typography
								sx={{
									flex: "1",
									color: "secondary.900",
									display: "flex",
									alignItems: "center"
								}}
							>
								{row.title}
							</Typography>
							<Typography
								sx={{
									flex: "1",
									display: "display",
									alignItems: "center",
									fontWeight: 500
								}}
							>
								фыв
							</Typography>
						</Box>
						{stateData.length !== index + 1 && <Divider />}
					</Stack>
				))}
			</Stack>
		</Box>
	)
}

export default DetailsTab
