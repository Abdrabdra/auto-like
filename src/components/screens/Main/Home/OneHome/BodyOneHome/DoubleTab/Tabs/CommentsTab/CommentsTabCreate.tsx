import { Formik } from "formik"
import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"

import { TypeofEntityEnum } from "types/enums"
import { ICreateCommentRequest } from "types/Comment/Comment"

import { useCreateCommentMutation } from "@store/rtk-api/comments-rtk/commentEndpoints"

const CommentsTabCreate = () => {
	const { announceId } = useParams()
	const [create] = useCreateCommentMutation()

	const body = announceId && {
		announcementId: Number(announceId),
		text: "",
		kind: TypeofEntityEnum.ANNOUNCEMENT
	}

	return (
		<Stack
			sx={{
				padding: "16px",
				borderRadius: "12px",
				backgroundColor: "common.white"
			}}
		>
			<Stack
				sx={{
					backgroundColor: "grey.200",
					borderRadius: "12px",
					padding: "12px",
					minHeight: "55px"
				}}
			>
				<Formik
					initialValues={{ text: "" }}
					onSubmit={(values, actions) => {
						body && create({ ...body, ...values })
					}}
				>
					{({ handleSubmit, handleChange, errors, values }) => (
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								onChange={handleChange}
								value={values.text}
								name="text"
							/>
							{errors.text && <div id="feedback">{errors.text}</div>}
							<button type="submit">Submit</button>
						</form>
					)}
				</Formik>
			</Stack>
		</Stack>
	)
}

export default CommentsTabCreate
