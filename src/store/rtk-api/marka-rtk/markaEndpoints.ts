import markaApi from "./markaApi"

import { IGetMarkaResponse } from "types/Marka/MarkaResponse"
import { IMarka } from "types/Marka/Marka"

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
		}),
		getModel: builder.query<IGetMarkaResponse, object>({
			query: (arg) => {
				return {
					url: `/model`,
					params: { ...arg }
				}
			},
			providesTags: ["model"]
		}),
		getBody: builder.query<IMarka[], string>({
			query: () => {
				return {
					url: `/body-type`
				}
			},
			providesTags: ["body"]
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

export const { useGetMarkaQuery, useGetModelQuery, useGetBodyQuery } =
	markaEndpoints
