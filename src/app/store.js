import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/LoginForm/LoginSlice';

export const store = configureStore({
	reducer: {
		login: loginReducer,
	},
});
