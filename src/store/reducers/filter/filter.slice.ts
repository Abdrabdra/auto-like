import { createSlice } from "@reduxjs/toolkit"

interface IInitState {
	// состояние: нет в бэке
	// marks: number[] | null
	// models: number[] | null

	// cities: number[] | null
	values: {
		yearTo: string
		yearFrom: string
		orderByPriceASC: string
		orderByPriceDESC: string
		priceTo: string
		priceFrom: string
	}
}

const initialState: IInitState = {
	// состояние: нет в бэке
	// models: null,
	// marks: null,
	// cities: null,

	values: {
		yearFrom: "",
		yearTo: "",
		orderByPriceASC: "",
		orderByPriceDESC: "",
		priceFrom: "",
		priceTo: ""
	}
}

const filterReducer = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.values = payload
		},
		setFilterReset: () => initialState
	}
})

export const { setFilter, setFilterReset } = filterReducer.actions

export default filterReducer.reducer
