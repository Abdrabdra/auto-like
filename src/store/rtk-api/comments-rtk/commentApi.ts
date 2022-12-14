import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "../rtkApi"

export default createApi({
	reducerPath: "commentApi",
	baseQuery: baseQuery,
	tagTypes: ["comment"],
	endpoints: () => ({})
})
