import { Container, Stack, Typography } from "@mui/material"
import React from "react"
import Footer from "../../Home/MainHome/Footer"

const Requisites = () => {
	return (
		<Stack
			justifyContent={"space-between"}
			sx={{ minHeight: "calc(100vh - 210px)" }}
		>
			<Container>
				<Stack>
					<Typography variant="h6">Реквизиты</Typography>
					<Typography component={"div"}>ТОО «AutoLike»</Typography>
					<Typography component={"div"}>
						Адрес: Республика Казахстан, 050060, город г. Алматы, Ауэзовский
						район, ул. Жандосова, д.42. 207 офис
					</Typography>
					<Typography component={"div"}>БИН/ИИН: 220940020359</Typography>
					<Typography component={"div"}>
						Номер счета: KZ738562203125279205
					</Typography>
					<Typography component={"div"}>
						Банк: АО «Банк Центр Кредит»
					</Typography>
					<Typography component={"div"}>БИК: KCJBKZKX</Typography>
					<Typography component={"div"}>Кбе: 17</Typography>
				</Stack>
			</Container>
			<Stack pt={5}>
				<Footer />
			</Stack>
		</Stack>
	)
}

export default Requisites
