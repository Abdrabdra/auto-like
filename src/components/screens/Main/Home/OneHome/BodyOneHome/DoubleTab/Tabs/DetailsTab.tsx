import { Box, Divider, Stack, Typography } from "@mui/material"
import numberWithSpaces from "@utils/numberWithSpaces"
import { StatementEnum, WheelEnum } from "types/enums"

const DetailsTab = ({ details }: any) => {
	const stateData = [
		{ title: "Город", value: details.city },
		{ title: "Поколение", value: details.generation },
		{ title: "Кузов", value: details.body },
		{ title: "Объем двигателя", value: details.volume },
		{ title: "Пробег", value: details.mileage },
		{ title: "Коробка передач", value: details.transmission },
		{ title: "Привод", value: details.driveUnit },
		{ title: "Руль", value: details.steeringWheel },
		{ title: "Цвет", value: details.color },
		{ title: "Растаможен в КЗ", value: details.customsClearance },
		{ title: "Состояние", value: details.state }
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
								{index === 3
									? `${row.value}л`
									: index === 4
									? `${numberWithSpaces(row.value)}км`
									: index === 7
									? row.value === WheelEnum.LEFT
										? "Слева"
										: "Справа"
									: index === 9
									? row.value
										? "Да"
										: "Нет"
									: index === 10
									? row.value === StatementEnum.EMERGENCY
										? "Аварийная"
										: row.value === StatementEnum.NEW
										? "Новое"
										: "Б/У"
									: row.value}
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
