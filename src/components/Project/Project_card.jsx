import React from 'react';

import { projects } from '../../data/projects';
import '../../sass/Project_card.scss';
let cssVar = document.querySelector(':root');
const ProjectCard = () => {
	console.log(cssVar);
	const handleGitBtn = () => {
		window.open(projects[0].git_link);
	};
	const cssVariables_get = () => {
		let variableOne = getComputedStyle(cssVar);
	};
	const cssVariables_set = () => {
		cssVar.style.setProperty('--p1', 'wojs');
	};
	const hearoGraphicProjectCard = () => {
		// cssVariables_get();
		// cssVariables_set();
		return <div className='project-card__photo'></div>;
	};
	return (
		<div className='project-card'>
			{hearoGraphicProjectCard()}
			<div className='project-card__btns'>
				<button className='project-card__btn project-card__demo-btn'>
					Demo
				</button>
				<button
					className='project-card__btn project-card__git-btn'
					onClick={handleGitBtn}>
					Git
				</button>
			</div>
			<div className='project-card__description'>
				<h3>Description:</h3>
				<p className='project-card__description--text'>
					{projects[0].description}
				</p>
				<h3>Technologys:</h3>
				<p className='project-card__description--text'>
					{projects[0].technologys.map((tech) => {
						return tech + ', ';
					})}
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
