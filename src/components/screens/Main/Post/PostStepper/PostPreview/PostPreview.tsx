import { Box } from "@mui/material"
import { useDispatch } from "react-redux"

import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import OneHomePreview from "@components/screens/Main/Home/OneHome/OneHomePreview"

import { useTypedSelector } from "@store/index"
import { incrementStep } from "@store/reducers/stepper/stepper.slice"
import { useCreateAnnouncementMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import { ICreateAnnouncement } from "types/Announcement/Announcement.type"
import { WheelEnum } from "types/enums"

const PostPreview = () => {
	const dispatch = useDispatch()
	const [create] = useCreateAnnouncementMutation()

	const stepper = useTypedSelector((state) => state.stepper.form)

	const data = {
		model: stepper.selectedMark,
		marka: stepper.selectedBrand,
		price: stepper.selectedPrice,
		description: "Описание",

		details: {
			city: stepper.selectedCity,
			generation: stepper.selectedGeneration,
			body: stepper.selectedCase,
			volume: stepper.selectedEngine,
			mileage: stepper.selectedMileage,
			transmission: 1, // тут из за бэка не могу взять трансмишшн
			driveUnit: stepper.selectedGear,
			steeringWheel: stepper.steeringWheel,
			color: "Цвет",
			customsClearance: stepper.selectedCustomsClearance,
			state: stepper.selectedCondition
		}
	}

	const formData = new FormData()

	formData.append("bodyTypeId", String(stepper.selectedCase))
	formData.append("cityId", String(stepper.selectedCity))
	formData.append("customsClearance", String(stepper.selectedCustomsClearance))
	formData.append("description", "Описание не задано")
	formData.append("driveUnit", String(stepper.selectedGear))
	formData.append("generationId", String(stepper.selectedGeneration))
	formData.append("markaId", String(stepper.selectedBrand))
	formData.append("mileage", String(stepper.selectedMileage).replace(/\s/g, ""))
	formData.append("modelId", String(stepper.selectedMark))
	formData.append("price", String(stepper.selectedPrice).replace(/\s/g, ""))
	formData.append("state", String(stepper.selectedCondition))
	formData.append(
		"steeringWheel",
		String(stepper?.steeringWheel ? stepper.steeringWheel : WheelEnum.LEFT)
	)
	formData.append("tags", String(stepper.selectedTags.join()))
	formData.append("transmissionId", String(1))
	formData.append("volume", String(3.5))
	formData.append("year", String(stepper.selectedManufacture))

	// @ts-ignore
	formData.append("file", stepper.selectedPicture)

	const handleClick = () => {
		create(formData)
		dispatch(incrementStep())
	}

	return (
		<Box>
			<OneHomePreview data={data} />
			<Box>
				<AbsoluteBox>
					<SubmitButton onClick={handleClick} />
				</AbsoluteBox>
			</Box>
		</Box>
	)
}

export default PostPreview
