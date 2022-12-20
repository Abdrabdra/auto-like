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

import { useGetCommentsQuery } from "@store/rtk-api/comments-rtk/commentEndpoints"

import CommentsTabSkeleton from "./CommentsTabSkeleton"
import CommentsTabOne from "./CommentsTabOne"

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
		<Stack spacing={4}>
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
				<CommentsTabSkeleton />
			) : isSuccess ? (
				data.data.map((row) => <CommentsTabOne key={row.id} row={row} />)
			) : (
				<Stack>Error</Stack>
			)}
		</Stack>
	)
}

export default CommentsTab
