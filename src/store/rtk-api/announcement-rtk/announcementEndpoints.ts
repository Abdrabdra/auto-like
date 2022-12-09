import announcementApi from "./announcementApi"
import {
	IAnnouncementsResponse,
	ILikeAnnouncement
} from "types/Announcement/Announcement.type"

export const announcementEndpoints = announcementApi.injectEndpoints({
	endpoints: (builder) => ({
		getAnnouncements: builder.query<IAnnouncementsResponse, string>({
			query: () => ({
				url: `/announcement`
			}),
			providesTags: ["announcements"]
		}),
		likeAnnouncement: builder.mutation<string, ILikeAnnouncement>({
			query: (body) => ({
				url: `/like`,
				method: "POST",
				body
			}),
			invalidatesTags: ["announcements"]
		})
	})
})

export const { useGetAnnouncementsQuery, useLikeAnnouncementMutation } =
	announcementEndpoints
