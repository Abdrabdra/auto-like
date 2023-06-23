import Policy from "@components/screens/Main/Info/Policy"
import Requisites from "@components/screens/Main/Info/Requisites"
import React from "react"
import { Route, Routes } from "react-router-dom"

const InfoPage = () => {
	return (
		<Routes>
			<Route>
				<Route index element={<Policy />} />
				<Route path="requisites" element={<Requisites />} />

				<Route path="*" element={<Policy />} />
			</Route>
		</Routes>
	)
}

export default InfoPage
