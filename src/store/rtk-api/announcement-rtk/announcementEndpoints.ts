import announcementApi from "./announcementApi"
import {
	IAnnouncementsResponse,
	ILikeAnnouncement
} from "types/Announcement/Announcement.type"
import { IOneAnnouncementResponse } from "types/Announcement/OneAnnouncement.type"

export const announcementEndpoints = announcementApi.injectEndpoints({
	endpoints: (builder) => ({
		getAnnouncements: builder.query<IAnnouncementsResponse, object>({
			query: (arg) => {
				return {
					url: `/announcement`,
					params: { ...arg }
				}
			},
			providesTags: ["announcements"]
		}),
		likeAnnouncement: builder.mutation<string, ILikeAnnouncement>({
			query: (body) => ({
				url: `/like`,
				method: "POST",
				body
			}),
			invalidatesTags: ["announcements"]
		}),
		getOneAnnouncement: builder.query<IOneAnnouncementResponse, string>({
			query: (id) => ({
				url: `/announcement/${id}`
			}),
			providesTags: ["announcements"]
		})
	})
})

export const {
	useGetAnnouncementsQuery,
	useLikeAnnouncementMutation,
	useGetOneAnnouncementQuery
} = announcementEndpoints
