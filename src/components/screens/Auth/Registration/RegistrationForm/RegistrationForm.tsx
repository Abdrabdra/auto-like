import { useFormik } from "formik"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
	Box,
	Button,
	CircularProgress,
	Container,
	FormControlLabel,
	FormGroup,
	Stack,
	Step,
	StepLabel,
	Typography
} from "@mui/material"

import { ActionsEnum } from "@store/enum"
import { AppDispatch, RootState, useTypedSelector } from "@store/index"
import { login, registration } from "@store/reducers/auth/auth.action"

import { MainButton } from "@components/ui/Button"
import { StyledMainInput, StyledNewInput } from "@components/ui/Input"
import { RegistrationSchema } from "@utils/schema/validation"
import { ILogin } from "types/ILogin"
import { IRegistration } from "types/IRegistration"
import { Stepper } from "@mui/material"
import React from "react"
import Verification from "./Verification"
import { Checkbox } from "@mui/material"

const steps = ["Select campaign settings", "Create an ad group", "Create an ad"]

const RegistrationForm = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/auth/login`)
	}

	const dispatch = useDispatch<AppDispatch>()
	const { status, error } = useTypedSelector((state) => state.auth)

	const formik = useFormik({
		initialValues: {
			regName: "",
			regPhone: "",
			regPassword: ""
		},
		onSubmit: async (values) => {
			handleNext()
		},
		validationSchema: RegistrationSchema
	})

	const { values, errors, handleChange, handleSubmit, setFieldValue } = formik
	const { regName, regPhone, regPassword } = values

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus()
	}, [])

	// Stepper
	const [activeStep, setActiveStep] = React.useState(0)

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	//checkbox
	const [checked, setChecked] = React.useState(true)

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}

	return (
		<Stack alignItems={"center"}>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</React.Fragment>
			) : activeStep === 0 ? (
				<>
					<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<form
							onSubmit={handleSubmit}
							style={{ display: "flex", justifyContent: "center" }}
						>
							<Stack spacing={3} sx={{ width: "500px" }}>
								<Stack spacing={2}>
									<Stack>
										<StyledMainInput
											label="Имя пользователя"
											bgcolor="secondary.600"
											ref={inputRef}
											name="regName"
											value={regName}
											onChange={handleChange}
											placeholder="Имя пользователя"
										/>
										{errors.regName && (
											<Typography color="error">{errors.regName}</Typography>
										)}
									</Stack>
									<Stack>
										<StyledMainInput
											label="Номер телефона"
											bgcolor="secondary.600"
											name="regPhone"
											value={regPhone}
											onChange={handleChange}
											placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
										/>
										{errors.regPhone && (
											<Typography color="error">{errors.regPhone}</Typography>
										)}
									</Stack>
									<Stack>
										<StyledMainInput
											label="Пароль"
											bgcolor="secondary.600"
											id="my-input"
											aria-describedby="my-helper-text"
											name="regPassword"
											type="password"
											value={regPassword}
											onChange={handleChange}
											placeholder="Введите пароль"
										/>
										{errors.regPassword && (
											<Typography color="error">
												{errors.regPassword}
											</Typography>
										)}
									</Stack>

									<Stack>
										<FormGroup>
											<Stack direction={"row"}>
												<FormControlLabel
													control={
														<Checkbox
															required
															checked={checked}
															onChange={handleCheckboxChange}
															defaultChecked
														/>
													}
													label="Принимаю"
												/>
												<Typography
													onClick={() => navigate("/app/info/agreement")}
													variant="caption"
													sx={{
														fontSize: "14px",
														alignSelf: "center",
														cursor: "pointer",
														textDecoration: "underline",
														"&:hover": {
															color: "primary.main"
														}
													}}
												>
													Пользовательское соглашение
												</Typography>
											</Stack>
										</FormGroup>
									</Stack>
								</Stack>

								<Stack spacing={1}>
									{error && status !== ActionsEnum.SUCCESS && (
										<Typography color="error">{error}</Typography>
									)}

									{status === ActionsEnum.SUCCESS && (
										<Typography color="primary">
											Регистрация прошла успешно!
										</Typography>
									)}

									<MainButton disabled={!checked} type="submit">
										Регистрироваться
									</MainButton>

									<Stack>
										<Typography>У вас уже есть аккаунт? </Typography>
										<MainButton onClick={() => handleClick()}>Войти</MainButton>
									</Stack>
								</Stack>
							</Stack>
						</form>
					</Box>
				</>
			) : activeStep === 1 ? (
				<Verification
					regValues={{
						name: values.regName,
						phone: values.regPhone,
						password: values.regPassword
					}}
					handleBack={handleBack}
				/>
			) : null}
		</Stack>
	)
}

export default RegistrationForm
