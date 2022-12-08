import { IAnnouncements } from './announcement.type'
import announcementApi from './announcementApi'

export const announcementEndpoints = announcementApi.injectEndpoints({
	endpoints: (builder) => ({
		getAnnouncements: builder.query<IAnnouncements, string>({
			query: () => ({
				url: `/announcement`
			}),
			providesTags: ['announcements']
		})
	})
})

export const { useGetAnnouncementsQuery } = announcementEndpoints
