import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Loading from '../components/Loading/Loading';
import ProjectsFooter from '../components/Project/ProjectsFooter';
import ProjectCard from '../components/Project/Project_card';
import request from '../helpers/request';
import './Projects.scss';

const Projects = () => {
	const isLoged = useSelector((state) => state.login.isUserLogeed);

	const [projectsData, setProjectsData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const { data } = await request.get('/projects');
		setProjectsData(data);
		setIsLoading(false);
	};
	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) return <Loading />;

	return (
		<div className='projects'>
			{projectsData.map((project) => (
				<ProjectCard key={project.id} {...project} isUserLogeed={isLoged} />
			))}
			<ProjectsFooter isUserLogeed={isLoged} />
		</div>
	);
};

export default Projects;
