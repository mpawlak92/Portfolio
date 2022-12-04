import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	projectsData,
	projectsDataFetchStatus,
	projectsDataFetchError,
	fetchProjects,
} from '../components/Project/ProjectsSlice';

import Loading from '../components/Loading/Loading';
import ProjectsFooter from '../components/Project/ProjectsFooter';
import ProjectCard from '../components/Project/Project_card';

import './Projects.scss';

const Projects = () => {
	const dispatch = useDispatch();
	const isLoged = useSelector((state) => state.login.isUserLogeed);
	const fetchedData = useSelector(projectsData);
	const fetchStatus = useSelector(projectsDataFetchStatus);
	const fetchError = useSelector(projectsDataFetchError);

	useEffect(() => {
		if (fetchStatus === 'idle') {
			dispatch(fetchProjects());
		}
	}, [fetchStatus, dispatch]);

	if (fetchStatus === 'loading') {
		return <Loading />;
	} else if (fetchStatus === 'succeeded') {
		return (
			<div className='projects'>
				{fetchedData.map((project) => (
					<ProjectCard key={project.id} {...project} isUserLogeed={isLoged} />
				))}
				<ProjectsFooter isUserLogeed={isLoged} />
			</div>
		);
	} else if (fetchStatus === 'failed') {
		return <p>{fetchError}</p>;
	}
};

export default Projects;
