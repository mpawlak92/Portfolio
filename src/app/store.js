import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/LoginForm/LoginSlice';
import AboutMeSlice from '../components/Aboutme/AboutMeSlice';
import ContactSlice from '../components/Contact/ContactSlice';
import ProjectsSlice from '../components/Project/ProjectsSlice';

export const store = configureStore({
	reducer: {
		login: loginReducer,
		aboutme: AboutMeSlice,
		contact: ContactSlice,
		projects: ProjectsSlice,
	},
});
