import React, { useEffect, useRef, useState } from "react"
import { Box, Button, Container } from "@mui/material"
import { useSocket } from "@hooks/useSocket"
import OneChatDrawer from "./OneChatDrawer"
import { useTypedSelector } from "@store/index"
import ChatOneMessages from "./ChatOneMessages"
import {
	useCreateChatRoomMutation,
	useGetOneChatMessagesQuery
} from "@store/rtk-api/user-rtk/userEndpoints"
import { useParams } from "react-router-dom"
import { IChatMessages } from "types/IUser"

type Props = {
	messages: IChatMessages[]
	chatId: number
	handleSetNewMessages: (value: IChatMessages) => void
}

const ChatOne: React.FC<Props> = ({
	messages,
	chatId,
	handleSetNewMessages
}) => {
	const userId = useTypedSelector((state) => state.auth.userId)
	const socket = useSocket()
	socket.connect()
	useEffect(() => {
		socket.emit("join-room", chatId)
	}, [])
	const handleSendMessage = (text: string) => {
		socket.emit("add-message", {
			text: text,
			userId: userId,
			roomId: chatId
		})
	}
	socket.once("messageAdded", (data: IChatMessages) => {
		handleSetNewMessages(data)
		console.log("data: ", data)
	})

	return (
		<Box>
			<Container>
				{messages && <ChatOneMessages messages={messages} />}
			</Container>
			<OneChatDrawer handleSendMessage={handleSendMessage} />
		</Box>
	)
}

export default ChatOne
