import { FC } from "react"
import { Stack } from "@mui/material"

import StepperTagsOne from "./StepperTagsOne"

import { IDescriptionTag } from "types/Marka/Marka"

interface Props {
	data: IDescriptionTag[]
}

const StepperTagsList: FC<Props> = ({ data }) => {
	return (
		<Stack spacing={1}>
			{data.map((row) => (
				<StepperTagsOne data={row} />
			))}
		</Stack>
	)
}

export default StepperTagsList
