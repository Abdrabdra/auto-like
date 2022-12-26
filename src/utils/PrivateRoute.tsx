import { FC } from "react"
import { Outlet, RouteProps } from "react-router-dom"

import NeedAuthBox from "@components/modules/NeedAuthBox"

import { useTypedSelector } from "@store/index"

const PrivateRoutes = () => {
	const isAuth = useTypedSelector((state) => state.auth.isAuth)

	return isAuth ? <Outlet /> : <NeedAuthBox />
}

export default PrivateRoutes
