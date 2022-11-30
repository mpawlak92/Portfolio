import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../helpers/request';

const initialState = {
	aboutmeData: {},
	status: 'idle', // idle | loading | succesed | failed
	error: null,
};

export const fetchAboutMeData = createAsyncThunk(
	'aboutme/fetchAboutMeData',
	async () => {
		try {
			const response = await request.get('/aboutme');
			console.log(response);
			return response.data;
		} catch (err) {
			return err.message;
		}
	}
);

const AboutMeSlice = createSlice({
	name: 'aboutme',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchAboutMeData.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchAboutMeData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.aboutmeData = action.payload;
			})
			.addCase(fetchAboutMeData.rejected, (state, action) => {
				state.status = 'faild';
				state.error = action.error.message;
			});
	},
});

export const aboutmeData = (state) => state.aboutme.aboutmeData;
export const aboutmeDataFetchStatus = (state) => state.aboutme.status;
export const aboutmeDataFetchError = (state) => state.aboutme.error;
export default AboutMeSlice.reducer;
