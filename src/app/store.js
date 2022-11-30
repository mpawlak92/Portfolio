import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/LoginForm/LoginSlice';
import AboutMeSlice from '../components/Aboutme/AboutMeSlice';

export const store = configureStore({
	reducer: {
		login: loginReducer,
		aboutme: AboutMeSlice,
	},
});
