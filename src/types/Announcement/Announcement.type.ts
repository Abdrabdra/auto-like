import { StatementEnum, WheelEnum } from "./../enums"
import { TypeofEntityEnum } from "types/enums"

export interface IAnnouncementsResponse {
	data: IAnnouncement[]
	count: number
}

export interface IAnnouncement {
	id: number
	price: number
	createdAt: Date
	views: number
	model: string
	transmission: string
	avatar: null | string
	year: number
	mileage: number
	steeringWheel: WheelEnum
	volume: number
	state: StatementEnum
	marka: string
	city: string
	body: string
	like: string
	countImages: string
	profilelike: string
}

export interface ILikeAnnouncement {
	announcementId: number
	kind: TypeofEntityEnum
}
