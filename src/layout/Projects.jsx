import React from 'react';

import ProjectsFooter from '../components/Project/ProjectsFooter';
import ProjectCard from '../components/Project/Project_card';
import '../sass/Projects.scss';

const Projects = () => {
	return (
		<div className='projects'>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectsFooter />
		</div>
	);
};

export default Projects;
