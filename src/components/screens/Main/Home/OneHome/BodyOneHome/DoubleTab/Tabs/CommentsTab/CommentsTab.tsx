import { FC } from "react"
import {
	Box,
	Button,
	IconButton,
	Skeleton,
	Stack,
	Typography
} from "@mui/material"
import { useParams } from "react-router-dom"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useGetCommentsQuery } from "@store/rtk-api/comments-rtk/commentEndpoints"

import CommentsTabSkeleton from "./CommentsTabSkeleton"

interface Props {
	commentsCount: number
}

const CommentsTab: FC<Props> = ({ commentsCount }) => {
	const { announceId } = useParams()

	const queryParams = {
		carId: announceId
	}

	const { data, isLoading, isSuccess } = useGetCommentsQuery(queryParams)

	return (
		<Stack spacing={2}>
			{commentsCount === 0 ? (
				<Stack
					justifyContent="center"
					alignItems="center"
					sx={{
						height: "122px",
						padding: "16px",
						borderRadius: "12px",
						backgroundColor: "common.white"
					}}
				>
					Нет Комментарий
				</Stack>
			) : isLoading ? (
				<>
					<CommentsTabSkeleton />
				</>
			) : isSuccess ? (
				data.data.map((row) => (
					<Stack
						key={row.id}
						spacing={1}
						sx={{
							height: "122px",
							padding: "16px",
							borderRadius: "12px",
							backgroundColor: "common.white"
						}}
					>
						<Stack
							direction="row"
							justifyContent={"space-between"}
							alignContent={"end"}
						>
							<Typography
								alignSelf={"center"}
								sx={{ fontSize: 16, fontWeight: 600 }}
							>
								Пользователь
								{/* {row.name} */}
							</Typography>
							<IconButton color="primary" sx={{ padding: 0 }}>
								<FavoriteBorderIcon />
							</IconButton>
						</Stack>
						<Typography sx={{ color: "secondary.900" }}>{row.text}</Typography>
						<Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
							<Button
								sx={{
									width: "60px",
									height: "20px",
									fontSize: "14px",
									fontWeight: 500,
									textDecoration: "underline"
								}}
							>
								Ответить
							</Button>
						</Box>
					</Stack>
				))
			) : (
				<Stack>Error</Stack>
			)}
		</Stack>
	)
}

export default CommentsTab
