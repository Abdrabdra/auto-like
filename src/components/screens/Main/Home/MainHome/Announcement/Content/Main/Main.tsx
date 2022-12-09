import { Box, Icon, Stack, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

import numberWithSpaces from "@utils/numberWithSpaces"
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"

import LikeButton from "./LikeButton"
import Tags from "./Tags"

import { IAnnouncement } from "types/Announcement/Announcement.type"

interface Props {
	car: IAnnouncement
}

const Main: FC<Props> = ({ car }) => {
	const {
		id,
		price,
		model,
		avatar,
		year,
		mileage,
		volume,
		state,
		marka,
		city,
		body,
		countImages,
		profilelike
	} = car
	const navigate = useNavigate()

	const tags = {
		year: year,
		state: state,
		mileage: mileage,
		body: body,
		volume: volume
	}

	const handleNavigate = () => {
		navigate(`/app/home/one/${id}`)
	}

	return (
		<Stack direction="row" spacing={1} sx={{ padding: "4px 8px 8px 4px" }}>
			<Box
				sx={{
					backgroundColor: "secondary.200",
					borderRadius: "10px",
					width: "120px",
					height: "110px",
					position: "relative"
				}}
			>
				<Stack
					spacing={1}
					direction={"row"}
					alignItems={"center"}
					sx={{
						color: "grey.100",
						position: "absolute",
						top: "4px",
						left: "4px",
						padding: "4px 8px",
						backgroundColor: "secondary.300",
						borderRadius: "8px"
					}}
				>
					<Icon component={PhotoCameraIcon} sx={{ fontSize: 15 }} />
					<Typography
						sx={{ fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}
					>
						{countImages}
					</Typography>
				</Stack>
				{avatar && <img src={avatar} alt="Car avatar" />}
			</Box>
			<Stack justifyContent="center" sx={{ flex: "1" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "start"
					}}
				>
					<Stack>
						<Typography onClick={handleNavigate} variant="h6">
							{marka} {model}
						</Typography>
						<Typography variant="h6" color="primary">
							{numberWithSpaces(price)}KZT
						</Typography>
						<Typography
							variant="h6"
							sx={{ fontWeight: 500, fontSize: "12px", color: "secondary.500" }}
						>
							г. {city}
						</Typography>
					</Stack>
					<LikeButton profilelike={profilelike} id={id} />
				</Box>
				<Tags tags={tags} />
			</Stack>
		</Stack>
	)
}

export default Main
