import { Container, Stack, Typography } from "@mui/material"
import React from "react"

const Requisites = () => {
	return (
		<Container>
			<Stack>
				<Typography variant="h6">Реквизиты</Typography>
				<Typography component={"div"}>ТОО «AutoLike»</Typography>
				<Typography component={"div"}>
					Адрес: Республика Казахстан, 050060, город г. Алматы, Ауэзовский
					район, ул. Жандосова, д.42. 207 офис
				</Typography>
				<Typography component={"div"}>БИН/ИИН: 981141000668</Typography>
				<Typography component={"div"}>
					Номер счета: KZ738562203125279205
				</Typography>
				<Typography component={"div"}>Банк: АО «Банк Центр Кредит»</Typography>
				<Typography component={"div"}>БИК: KCJBKZKX</Typography>
				<Typography component={"div"}>Кбе: 17</Typography>
			</Stack>
		</Container>
	)
}

export default Requisites
