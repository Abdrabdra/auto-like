import { useSocket } from "@hooks/useSocket"
import { Box } from "@mui/material"
import {
	useCreateChatRoomMutation,
	useGetOneChatMessagesQuery
} from "@store/rtk-api/user-rtk/userEndpoints"
import {
	DetailedHTMLProps,
	HTMLAttributes,
	useEffect,
	useRef,
	useState
} from "react"
import { useParams } from "react-router-dom"
import { IChatMessages } from "types/IUser"
import ChatOne from "../ChatOne"

const ChatOneWrapper = () => {
	const { chatId } = useParams()

	const [create, { data: chatData }] = useCreateChatRoomMutation()
	const { data: messages, isSuccess } = useGetOneChatMessagesQuery(
		{ roomId: chatData?.id },
		{ skip: !chatData?.id ? true : false }
	)

	const [newMessages, setNewMessages] = useState(messages)
	const handleSetNewMessages = (value: IChatMessages) => {
		setNewMessages((prev) => prev && [value, ...prev])
	}
	useEffect(() => {
		setNewMessages(messages)
	}, [isSuccess])

	useEffect(() => {
		if (chatId) {
			create({ profileId: chatId })
		}
	}, [])

	const scrollToBottom = () => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [newMessages])

	const bottomRef = useRef<HTMLDivElement | null>()

	return (
		<Box pb={2}>
			{newMessages && chatData && isSuccess && (
				<ChatOne
					messages={newMessages}
					handleSetNewMessages={handleSetNewMessages}
					chatId={chatData.id}
				/>
			)}
			{/* @ts-ignore */}
			<div ref={bottomRef} style={{ height: "20px" }} />
		</Box>
	)
}

export default ChatOneWrapper
