import { Formik } from "formik"
import {
	Box,
	InputAdornment,
	OutlinedInput,
	Stack,
	Typography
} from "@mui/material"
import * as Yup from "yup"
import { useState } from "react"

import { useTypedSelector } from "@store/index"
import { setFormSelectedMileage } from "@store/reducers/stepper/stepper.slice"
import { useDispatch } from "react-redux"
import ConditionBoxes from "./ConditionBoxes"
import numberWithSpaces from "@utils/numberWithSpaces"

const UsedConditionTab = () => {
	const dispatch = useDispatch()
	const selectedMileage = useTypedSelector(
		(state) => state.stepper.form.selectedMileage
	)

	const [mileage, setMileage] = useState<string | number | undefined>(
		selectedMileage
	)
	const handleMileageChange = (e: any) => {
		const { value } = e.target

		if (
			(mileage === 0 || mileage === undefined || mileage === "") &&
			Number(value) === 0
		) {
			setMileage("")
		} else if (value >= 0) {
			setMileage(value)
			dispatch(setFormSelectedMileage(value))
		}
	}

	return (
		<Stack spacing={1.25}>
			<Formik initialValues={{ mileage: 0 }} onSubmit={(values) => {}}>
				{(props) => (
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
							// type="number"
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
				)}
			</Formik>

			<ConditionBoxes />
		</Stack>
	)
}

export default UsedConditionTab
