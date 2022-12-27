import { Button, Stack, Typography } from "@mui/material"

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { useDispatch } from "react-redux"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedCase
} from "@store/reducers/stepper/stepper.slice"
import CaseList from "./CaseList"

const PostSelectCase = () => {
	const dispatch = useDispatch()
	const selectedCase = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedCase
	)

	const handleClick = (value: string) => {
		setTimeout(() => {
			dispatch(setFormSelectedCase(value))
			console.log(value)
			dispatch(incrementStep())
		}, 250)
	}

	return (
		<Stack spacing={1.8}>
			<CaseList />
		</Stack>
	)
}

export default PostSelectCase
