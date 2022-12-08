//library
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

//reducer
import authReducer from './reducers/auth/auth.slice'
import stepperReducer from './reducers/stepper/stepper.slice'

//rtk
import announcementApi from './rtk-api/announcement-rtk/announcementApi'
import userApi from './rtk-api/user-rtk/userApi'

const rootReducer = combineReducers({
	auth: authReducer,
	stepper: stepperReducer,

	[announcementApi.reducerPath]: announcementApi.reducer,
	[userApi.reducerPath]: userApi.reducer
})

export const store = configureStore({
	reducer: rootReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(announcementApi.middleware, userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
