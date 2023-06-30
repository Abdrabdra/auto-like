import { MainButton } from "@components/ui/Button"
import { StyledMainInput } from "@components/ui/Input"
import { Button, CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { Stack } from "@mui/material"
import { ActionsEnum } from "@store/enum"
import { AppDispatch, useTypedSelector } from "@store/index"
import { registration } from "@store/reducers/auth/auth.action"
import {
	useCheckSmsMutation,
	useSendSmsMutation
} from "@store/rtk-api/user-rtk/userEndpoints"
import { useFormik } from "formik"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { IRegistration } from "types/IRegistration"
import { ISmsCheck } from "types/ISms"

interface customI {
	data: ISmsCheck
}

const Verification: React.FC<{
	regValues: { name: string; phone: string; password: string }
	handleBack: () => void
}> = ({ regValues, handleBack }) => {
	const { status, error } = useTypedSelector((state) => state.auth)
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const [sendSms] = useSendSmsMutation()
	const [checkSms] = useCheckSmsMutation()

	useEffect(() => {
		sendSms({ phone: regValues.phone })
	}, [])

	const handleRegistration = async () => {
		try {
			await dispatch(
				registration({
					name: regValues.name,
					phone: regValues.phone,
					password: regValues.password
				} as IRegistration)
			)
			setTimeout(() => {
				navigate("/auth/login")
			}, 2000)
		} catch (e) {}
	}

	const formik = useFormik({
		initialValues: { code: "" },
		onSubmit: async (values, formikHelpers) => {
			await checkSms({
				code: Number(values.code),
				phone: regValues.phone
			}).then((data: any) => {
				if (data.data.message === "error") {
					console.log("error SMS")
				} else {
					handleRegistration()
				}
			})

			// if (data?.message === "error") {
			// 	console.log("hello")
			// } else {
			// 	handleRegistration()
			// }
		}
	})

	const { values, handleSubmit, handleChange } = formik

	return (
		<form onSubmit={handleSubmit}>
			<Stack spacing={1}>
				<Typography component={"div"} variant={"h4"}>
					Код подтверждение
				</Typography>
				<Typography component={"div"} variant="h6" sx={{ color: "grey.100" }}>
					На ваш номер телефона отправлено письмо
				</Typography>

				<Box
					sx={{
						width: "max-content",
						backgroundColor: "grey.100",
						borderRadius: "8px",
						padding: "10px"
					}}
				>
					<Typography sx={{ color: "grey.200" }}>Номер телефона:</Typography>
					<Typography>{regValues.phone}</Typography>
				</Box>

				<StyledMainInput
					label="Код"
					bgcolor="secondary.600"
					id="my-input"
					aria-describedby="my-helper-text"
					name="code"
					onChange={handleChange}
					placeholder="Введите код"
				/>

				<MainButton type="submit">Подтвердить</MainButton>

				<Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
					Назад
				</Button>
			</Stack>
		</form>
	)
}

export default Verification
