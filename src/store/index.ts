//library
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"

//reducer
import authReducer from "./reducers/auth/auth.slice"
import stepperReducer from "./reducers/stepper/stepper.slice"

//rtk
import announcementApi from "./rtk-api/announcement-rtk/announcementApi"
import commentApi from "./rtk-api/comments-rtk/commentApi"
import markaApi from "./rtk-api/marka-rtk/markaApi"
import userApi from "./rtk-api/user-rtk/userApi"

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["whitelist"]
}

const whitelistPersistConfig = {
	key: "whitelist",
	storage: storage
}

const rootReducer = combineReducers({
	auth: persistReducer(whitelistPersistConfig, authReducer),
	stepper: stepperReducer,

	[announcementApi.reducerPath]: announcementApi.reducer,
	[commentApi.reducerPath]: commentApi.reducer,
	[markaApi.reducerPath]: markaApi.reducer,
	[userApi.reducerPath]: userApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(
			announcementApi.middleware,
			commentApi.middleware,
			markaApi.middleware,
			userApi.middleware
		)
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
