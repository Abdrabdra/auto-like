import markaApi from "./markaApi"

export const markaEndpoints = markaApi.injectEndpoints({
	endpoints: (builder) => ({
		getMarka: builder.query<any, object>({
			query: (arg) => {
				return {
					url: `/marka`,
					params: { ...arg }
				}
			},
			providesTags: ["marka"]
		})
		// likeAnnouncement: builder.mutation<string, ILikeAnnouncement>({
		// 	query: (body) => ({
		// 		url: `/like`,
		// 		method: "POST",
		// 		body
		// 	}),
		// 	invalidatesTags: ["marka"]
		// }),
	})
})

export const { useGetMarkaQuery } = markaEndpoints
