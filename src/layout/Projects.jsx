import React from 'react';
import ProjectCard from '../components/Project/Project_card';
import '../sass/Projects.scss';

const Projects = () => {
	return (
		<div className='projects'>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
};

export default Projects;
