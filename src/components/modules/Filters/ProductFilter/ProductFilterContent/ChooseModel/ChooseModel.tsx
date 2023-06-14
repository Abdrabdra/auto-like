import { FC, useState } from "react"
import { Stack, Typography } from "@mui/material"

import { MainButton } from "@components/ui/Button"
import BaseModal from "@components/ui/Modal/BaseModal"

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import MarkList from "./ModelList"

interface Props {
	handleChangeQuery: (value: any) => void
	chosenValues: number[]
}

const ChooseModel: FC<Props> = ({ handleChangeQuery, chosenValues }) => {
	const [open, setOpen] = useState(false)
	const handleModalOpen = () => {
		setOpen(true)
	}
	const handleModalClose = () => {
		setOpen(false)
	}

	return (
		<Stack>
			<Typography>Выбор Моделя</Typography>

			<Stack>
				<MainButton
					onClick={handleModalOpen}
					bgcolor="grey.200"
					jc="space-between"
					endIcon={<KeyboardArrowRightIcon />}
					sx={{
						color: "secondary.300",

						"&:focus, &:hover": {
							color: "common.white"
						}
					}}
				>
					Выберите модель
				</MainButton>

				<BaseModal open={open} handleModalClose={handleModalClose}>
					<MarkList
						handleChangeQuery={(value) => handleChangeQuery(value)}
						chosenValues={chosenValues}
					/>
				</BaseModal>
			</Stack>
		</Stack>
	)
}

export default ChooseModel
