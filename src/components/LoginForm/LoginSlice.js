import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isUserLogeed: false,
};


export const loginSlice = createSlice({
	name: 'login',
	initialState: initialState,
	reducers: {
		login: (state) => {
			state.isUserLogeed = true;
		},
		logout: (state) => {
			state.isUserLogeed = false;
		},
	},
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
