import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import request from '../../helpers/request';

const initialState = {
	projectsData: [],
	projectStatus: 'idle', // idle | loading | succesed | failed
	error: null,
};

export const fetchProjects = createAsyncThunk(
	'projects/fetchProjects',
	async () => {
		const response = await request.get('/projects');

		return response.data;
	}
);
export const updateProjects = createAsyncThunk(
	'projects/updateProjects',
	async (data) => {
		const response = await request.patch(`/projects/${data.id}`, data);
		return response.data;
	}
);
export const addProjects = createAsyncThunk(
	'projects/addProjects',
	async (data) => {
		const response = await request.post('/projects', data);
		return response.data;
	}
);
export const deleteProjects = createAsyncThunk(
	'projects/deleteProjects',
	async (id) => {
		const response = await request.delete(`/projects/${id}`);
		console.log(response.data);
		return response.data;
	}
);
const ProjectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProjects.pending, (state, action) => {
				state.projectStatus = 'loading';
			})
			.addCase(fetchProjects.fulfilled, (state, action) => {
				state.projectStatus = 'succeeded';
				state.projectsData = action.payload;
			})
			.addCase(fetchProjects.rejected, (state, action) => {
				state.projectStatus = 'failed';
				console.log(action.error.message);
				state.error = action.error.message;
			})
			.addCase(updateProjects.fulfilled, (state, action) => {
				state.projectStatus = 'succeeded';
				const index = state.projectsData
					.map((object) => object.id)
					.indexOf(action.payload.id);

				state.projectsData[index] = action.payload;
			})
			.addCase(addProjects.fulfilled, (state, action) => {
				state.projectsData.push(action.payload);
			})
			.addCase(deleteProjects.fulfilled, (state, action) => {
				const index = state.projectsData
					.map((object) => object.id)
					.indexOf(action.payload.id);
				state.projectsData.splice(index, 1);
			});
	},
});

export const projectsData = (state) => state.projects.projectsData;
export const projectsDataFetchStatus = (state) => state.projects.projectStatus;
export const projectsDataFetchError = (state) => state.projects.error;
export default ProjectsSlice.reducer;
