import React from 'react';

import ProjectsFooter from '../components/Project/ProjectsFooter';
import ProjectCard from '../components/Project/Project_card';
import { projects } from '../data/projects';
import '../sass/Projects.scss';

const Projects = () => {
	return (
		<div className='projects'>
			{/* <ProjectCard /> */}
			{projects.map((project) => (
				<ProjectCard key={project.id} {...project} />
			))}
			<ProjectsFooter />
		</div>
	);
};

export default Projects;
