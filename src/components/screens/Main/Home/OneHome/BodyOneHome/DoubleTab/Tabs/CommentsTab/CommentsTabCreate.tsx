import { Formik } from "formik"
import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"

import { TypeofEntityEnum } from "types/enums"
import { ICreateCommentRequest } from "types/Comment/Comment"

import { useCreateCommentMutation } from "@store/rtk-api/comments-rtk/commentEndpoints"
import { StyledMainInput } from "@components/ui/Input"
import { MainButton } from "@components/ui/Button"

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
			<Formik
				initialValues={{ text: "" }}
				onSubmit={(values, actions) => {
					body && create({ ...body, ...values })
				}}
			>
				{({ handleSubmit, handleChange, errors, values }) => (
					<form onSubmit={handleSubmit}>
						<Stack spacing={1}>
							<StyledMainInput
								type="text"
								onChange={handleChange}
								value={values.text}
								name="text"
								label={"Напишите комментарий"}
							/>
							{/* {errors.text && <div id="feedback">{errors.text}</div>} */}
							<MainButton type="submit">Отправить</MainButton>
						</Stack>
					</form>
				)}
			</Formik>
		</Stack>
	)
}

export default CommentsTabCreate
