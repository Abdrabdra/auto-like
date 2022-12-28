import {
	Box,
	InputAdornment,
	OutlinedInput,
	Stack,
	Typography
} from "@mui/material"
import { useTypedSelector } from "@store/index"
import { setFormSelectedMileage } from "@store/reducers/stepper/stepper.slice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import ConditionBoxes from "./ConditionBoxes"

const UsedConditionTab = () => {
	const dispatch = useDispatch()
	const selectedMileage = useTypedSelector(
		(state) => state.stepper.form.selectedMileage
	)

	const [mileage, setMileage] = useState(selectedMileage)
	const handleMileageChange = (e: any) => {
		setMileage(e.target.value)
		dispatch(setFormSelectedMileage(e.target.value))
	}

	return (
		<Stack spacing={1.25}>
			<Stack
				spacing={1}
				sx={{
					backgroundColor: "common.white",
					borderRadius: "10px",
					padding: "14px 15px 14px 20px"
				}}
			>
				<Typography>Пробег</Typography>
				<OutlinedInput
					placeholder="Поиск"
					value={mileage}
					onChange={(e) => handleMileageChange(e)}
					endAdornment={
						<InputAdornment position="end">
							<Box p={2} sx={{ color: "common.black" }}>
								km
							</Box>
						</InputAdornment>
					}
					sx={{
						flex: 1,
						paddingLeft: "18px",
						backgroundColor: "common.white",
						borderRadius: "10px",
						input: {
							paddingLeft: "0"
						}
					}}
				/>
			</Stack>

			<ConditionBoxes />
		</Stack>
	)
}

export default UsedConditionTab
