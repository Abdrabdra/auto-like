import { IAnnouncements, ILikeAnnouncement } from './announcement.type'
import announcementApi from './announcementApi'

export const announcementEndpoints = announcementApi.injectEndpoints({
	endpoints: (builder) => ({
		getAnnouncements: builder.query<IAnnouncements, string>({
			query: () => ({
				url: `/announcement`
			}),
			providesTags: ['announcements']
		}),
		likeAnnouncement: builder.mutation<string, ILikeAnnouncement>({
			query: (body) => ({
				url: `/like`,
				method: 'POST',
				body
			}),
			invalidatesTags: ['announcements']
		})
	})
})

export const { useGetAnnouncementsQuery, useLikeAnnouncementMutation } = announcementEndpoints
