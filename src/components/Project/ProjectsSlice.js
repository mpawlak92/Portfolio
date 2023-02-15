import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import request from '../../helpers/request';

const initialState = {
	projectsData: [],
	projectStatus: 'idle', // idle | loading | succesed | failed
	error: null,
	serverResponseMessage: null,
};

export const fetchProjects = createAsyncThunk(
	'projects/fetchProjects',
	async () => {
		const response = await request.get('/projects');
		return response.data;
	}
);
export const addProjects = createAsyncThunk(
	'projects/addProjects',
	async (data) => {
		const response = await request.post('/projects', data);
		if (response.status === 201) {
			return {
				message: response.data.message,
				data: response.data,
			};
		} else {
			return response.data;
		}
	}
);
export const updateProjects = createAsyncThunk(
	'projects/updateProjects',
	async (data) => {
		const response = await request.patch(`/projects/${data._id}`, data);

		if (response.status === 201) {
			return {
				message: response.data.message,
				data: response.data,
			};
		} else {
			return response.data;
		}
	}
);
export const deleteProjects = createAsyncThunk(
	'projects/deleteProjects',
	async (id) => {
		const response = await request.delete(`/projects/${id}`);
		if (response.status === 201) {
			return {
				message: response.data,
				id,
			};
		} else {
			return response.data;
		}
	}
);
const ProjectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		resetServerResponseMessage: (state) => {
			state.serverResponseMessage = null;
		},
	},
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
				state.error = action.error.message;
			})
			//----------------------------------------------
			.addCase(updateProjects.pending, (state, action) => {
				state.projectStatus = 'loading';
			})
			.addCase(updateProjects.fulfilled, (state, action) => {
				state.projectStatus = 'succeeded';
				const index = state.projectsData
					.map((object) => object._id)
					.indexOf(action.payload.data._id);
				state.serverResponseMessage = action.payload.message;
				state.projectsData[index] = action.payload.data;
			})
			.addCase(updateProjects.rejected, (state, action) => {
				state.projectStatus = 'failed';
				alert(action.error.message);
				state.error = action.error.message;
			})
			//----------------------------------------------
			.addCase(addProjects.pending, (state, action) => {
				state.projectStatus = 'loading';
			})
			.addCase(addProjects.fulfilled, (state, action) => {
				state.serverResponseMessage = action.payload.message;
				state.projectsData.push(action.payload.data);
			})
			.addCase(addProjects.rejected, (state, action) => {
				state.projectStatus = 'failed';
				alert(action.error.message);
				state.error = action.error.message;
			})
			//----------------------------------------------
			.addCase(deleteProjects.pending, (state, action) => {
				state.projectStatus = 'loading';
			})
			.addCase(deleteProjects.fulfilled, (state, action) => {
				const index = state.projectsData
					.map((object) => object._id)
					.indexOf(action.payload.id);
				state.serverResponseMessage = action.payload.message;
				state.projectsData.splice(index, 1);
			})
			.addCase(deleteProjects.rejected, (state, action) => {
				state.projectStatus = 'failed';
				alert(action.error.message);
				state.error = action.error.message;
			});
	},
});

export const projectsData = (state) => state.projects.projectsData;
export const projectsDataFetchStatus = (state) => state.projects.projectStatus;
export const projectsDataFetchError = (state) => state.projects.error;
export const serverResponseMessage = (state) =>
	state.projects.serverResponseMessage;

export const { resetServerResponseMessage } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
