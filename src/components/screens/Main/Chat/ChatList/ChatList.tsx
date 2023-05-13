import { Box, Container, Stack } from "@mui/material"
import { useGetChatRoomsQuery } from "@store/rtk-api/user-rtk/userEndpoints"
import ChatRow from "./ChatRow"

const ChatList = () => {
	const { data, isSuccess } = useGetChatRoomsQuery("")

	return (
		<Box>
			<Container>
				<Stack spacing={1}>
					{isSuccess &&
						data.map((row, index) => <ChatRow data={row} key={index} />)}
				</Stack>
			</Container>
		</Box>
	)
}

export default ChatList
