import React from 'react';

import { projects } from '../../data/projects';
import '../../sass/Project_card.scss';
const ProjectCard = () => {
	const handleGitBtn = () => {
		window.open(projects[0].git_link);
	};
	return (
		<div className='project-card'>
			<div className='project-card__photo'>
				<div className='project-card__hero-img'></div>
				<h2 className='project-card__title'>{projects[0].name}</h2>
			</div>
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
