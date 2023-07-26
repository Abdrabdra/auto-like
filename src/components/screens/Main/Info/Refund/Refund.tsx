import { Container, Stack, Typography } from "@mui/material"
import React from "react"
import Footer from "../../Home/MainHome/Footer"

const Refund = () => {
	return (
		<Stack
			justifyContent={"space-between"}
			sx={{ minHeight: "calc(100vh - 210px)" }}
		>
			<Container>
				<Stack spacing={2}>
					<Typography variant="h5">Политика возврата</Typography>

					<Stack>
						<Typography>
							В случае досрочного прекращения показа Объявления в связи с его
							удалением Пользователем, если Позиция была продана или
							Пользователь изменил тему Объявления таким образом, что
							указывается другая Позиция, а не изначально обозначенная, плата,
							взимаемая за размещение данного Объявления и связанных Платных
							услуг за неиспользованный период, не возвращается.
						</Typography>
					</Stack>
				</Stack>
			</Container>
			<Stack pt={5}>
				<Footer />
			</Stack>
		</Stack>
	)
}

export default Refund
