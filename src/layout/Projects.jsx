import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	projectsData,
	projectsDataFetchStatus,
	projectsDataFetchError,
	fetchProjects,
	serverResponseMessage,
	resetServerResponseMessage,
} from '../components/Project/ProjectsSlice';
import {
	aboutmeData,
	aboutmeDataFetchStatus,
	aboutmeDataFetchError,
	fetchAboutMeData,
} from '../components/Aboutme/AboutMeSlice';

import Loading from '../components/Loading/Loading';
import ProjectsFooter from '../components/Project/ProjectsFooter';
import ProjectCard from '../components/Project/Project_card';

import './Projects.scss';
import ApiConnectionErrorPage from '../components/ApiConnectionErrorPage/ApiConnectionErrorPage';

const Projects = () => {
	const dispatch = useDispatch();
	const isLoged = useSelector((state) => state.login.isUserLogeed);

	const fetchedData = useSelector(projectsData);
	const fetchStatus = useSelector(projectsDataFetchStatus);
	const fetchError = useSelector(projectsDataFetchError);

	const fetchedAboutmeData = useSelector(aboutmeData);
	const fetchAboutmeStatus = useSelector(aboutmeDataFetchStatus);
	const fetchAboutmeError = useSelector(aboutmeDataFetchError);

	const projectsEditStatusMessage = useSelector(serverResponseMessage);

	useEffect(() => {
		if (fetchStatus === 'idle') {
			dispatch(fetchProjects());
		}
		if (fetchAboutmeStatus === 'idle') {
			dispatch(fetchAboutMeData());
		}
	}, [fetchStatus, fetchAboutmeStatus, dispatch]);

	const dishapiredMessage = () => {
		if (projectsEditStatusMessage) {
			window.scroll({
				top: 0,
				behavior: 'smooth',
			});
			setTimeout(() => {
				dispatch(resetServerResponseMessage());
			}, 3000);
		}
	};

	

	if (fetchStatus && fetchAboutmeStatus === 'loading') {
		return <Loading />;
	} else if (fetchStatus && fetchAboutmeStatus === 'succeeded') {
		return (
			<div className='projects'>
				<div
					id='serverResponseMessage'
					className='projects__edit-message'
					style={{
						display: projectsEditStatusMessage != null ? 'block' : 'none',
					}}>
					{dishapiredMessage()}
					{projectsEditStatusMessage}
				</div>

				{/* {fetchedData.map((project) => (
					<ProjectCard key={project._id} {...project} isUserLogeed={isLoged} />
				))} */}
				{fetchedData.map((project) => (
					<ProjectCard key={project._id} {...project} isUserLogeed={isLoged} />
				))}
				<ProjectsFooter
					isUserLogeed={isLoged}
					data={fetchedAboutmeData.github_link}
				/>
			</div>
		);
	} else if (fetchStatus === 'failed') {
		return <ApiConnectionErrorPage message={fetchError} />;
	} else if (fetchAboutmeStatus === 'failed') {
		return <ApiConnectionErrorPage message={fetchAboutmeError} />;
	}
};

export default Projects;
