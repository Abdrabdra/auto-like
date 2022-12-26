import markaApi from "./markaApi"

import { IGetMarkaResponse } from "types/Marka/MarkaResponse"

export const markaEndpoints = markaApi.injectEndpoints({
	endpoints: (builder) => ({
		getMarka: builder.query<IGetMarkaResponse, object>({
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
