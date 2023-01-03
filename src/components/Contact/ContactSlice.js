import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import request from '../../helpers/request';

const initialState = {
	contactData: {},
	status: 'idle', // idle | loading | succesed | failed
	error: null,
};

export const fetchContactData = createAsyncThunk(
	'contact/fetchcontactData',
	async () => {
		const response = await request.get('/aboutme');
		// console.log(response.data[0].contact);
		return response.data[0].contact;
	}
);
export const updateContact = createAsyncThunk(
	'contact/updateContact',
	async (data) => {
		const response = await request.patch('/aboutme', data);
		// console.log(response.data);
		return response.data[0].contact;
	}
);
const ContactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchContactData.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchContactData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.contactData = action.payload;
			})
			.addCase(fetchContactData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})

			// update data

			.addCase(updateContact.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(updateContact.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.contactData = action.payload;
				console.log('tu jestem');
			})
			.addCase(updateContact.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const contactData = (state) => state.contact.contactData;
export const contactDataFetchStatus = (state) => state.contact.status;
export const contactDataFetchError = (state) => state.contact.error;
export default ContactSlice.reducer;
