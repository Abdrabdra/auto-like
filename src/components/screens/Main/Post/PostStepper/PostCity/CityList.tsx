import { FC } from "react"
import { Stack } from "@mui/material"
import { useGetMarkaQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"

import { useTypedSelector } from "@store/index"
import { useDispatch } from "react-redux"
import {
	incrementStep,
	setFormSelectedCity
} from "@store/reducers/stepper/stepper.slice"
import BrandSkeleton from "../PostSelectBrand/BrandList/BrandSkeleton"
import BrandOne from "../PostSelectBrand/BrandList/BrandOne"

interface Props {
	searchValue?: string
}

const CityList: FC<Props> = ({ searchValue }) => {
	const dispatch = useDispatch()
	const selectedCity = useTypedSelector(
		(state) => state.stepper.form.selectedCity
	)

	const queryParams = {
		title: searchValue ? searchValue : undefined
	}

	const { data, isLoading, isSuccess } = useGetMarkaQuery(queryParams)

	const handleSelect = (id: number) => {
		setTimeout(() => {
			dispatch(setFormSelectedCity(id))
			dispatch(incrementStep())
		}, 250)
	}

	return (
		<Stack spacing={1.25}>
			{isLoading ? (
				<BrandSkeleton />
			) : isSuccess ? (
				data.data.map((row) => (
					<BrandOne
						key={row.id}
						data={row}
						handleSelect={handleSelect}
						selectedBrand={selectedCity ? selectedCity : undefined}
					/>
				))
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default CityList
