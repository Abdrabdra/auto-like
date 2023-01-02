import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material"
import { useTypedSelector } from "@store/index"
import {
	deleteFromFormTag,
	setFormSelectedTags
} from "@store/reducers/stepper/stepper.slice"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { IDescriptionTag } from "types/Marka/Marka"

interface Props {
	data: IDescriptionTag
}

const StepperTagsOne: FC<Props> = ({ data }) => {
	const dispatch = useDispatch()
	const [checked, setChecked] = useState(false)

	const tags = useTypedSelector((state) => state.stepper.form.selectedTags)

	console.log("Tags from Selector: ", tags)

	const handleChange = (e: any) => {
		const { checked } = e.target

		console.log("CHECKED: ", checked)

		if (checked === true) {
			console.log("push")

			setChecked(checked)
			dispatch(setFormSelectedTags(data.id))
		} else {
			console.log("delete ")

			setChecked(checked)
			dispatch(deleteFromFormTag(data.id))
		}
	}

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Checkbox checked={checked} onChange={(e) => handleChange(e)} />
				}
				label={data.title}
			/>
		</FormGroup>
	)
}

export default StepperTagsOne
