import { Checkbox, FormControlLabel, Stack } from "@mui/material"
import { useTypedSelector } from "@store/index"

import { useGetMarkaQuery, useGetModelQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"
import React, { FC, useEffect, useState } from "react"
import ModelOne from "./ModelOne"
import MarkOne from "./ModelOne"

interface Props {
	handleChangeQuery: (value: any) => void
	chosenValues: number[]
}

const ModelList: FC<Props> = ({ handleChangeQuery, chosenValues }) => {
	const { data, isLoading, isSuccess } = useGetModelQuery({})

	const [marks, setMarks] = useState<number[]>(chosenValues)

	const handleSetMark = (id: number) => {
		setMarks((prev) => [...prev, id])
	}
	const handleRemoveMark = (id: number) => {
		setMarks((prev) => [...prev.filter((row) => row !== id)])
	}

	useEffect(() => {
		handleChangeQuery({ models: marks })
	}, [marks])

	return (
		<Stack
			sx={{
				minWidth: "300px",
				backgroundColor: "common.white",
				borderRadius: "12px",
				padding: "20px"
			}}
		>
			{isLoading
				? "Загрузка..."
				: isSuccess
				? data.data.map((row) => (
						<ModelOne
							key={row.id}
							id={row.id}
							title={row.title}
							marks={marks}
							handleSetMark={handleSetMark}
							handleRemoveMark={handleRemoveMark}
						/>
				  ))
				: "Ошибка при загрузки"}
		</Stack>
	)
}

export default ModelList
