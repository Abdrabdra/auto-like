import { Stack } from "@mui/material"

import { useDispatch } from "react-redux"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedPicture
} from "@store/reducers/stepper/stepper.slice"

import { Form, Formik } from "formik"
import UploadFile from "./UploadFile"

const PostSelectPicture = () => {
	const dispatch = useDispatch()

	const selectedPicture = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedPicture
	)

	return (
		<Formik
			initialValues={{
				selectedPicture: selectedPicture
			}}
			onSubmit={(values) => {}}
		>
			{({}) => (
				<Form>
					<Stack
						p={2}
						sx={{ borderRadius: "10px", backgroundColor: "common.white" }}
					>
						<UploadFile />
					</Stack>
				</Form>
			)}
		</Formik>
	)
}

export default PostSelectPicture
