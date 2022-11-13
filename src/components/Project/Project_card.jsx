import React from 'react';

import '../../sass/Project_card.scss';
const ProjectCard = () => {
	return (
		<div className='project-card'>
			<div className='project-card__photo'>
				<div className='project-card__hero-img'></div>
				<h2 className='project-card__title'>TEST</h2>
			</div>
			<dic className='project-card__btns'>
				<button className='project-card__btn project-card__demo-btn'>
					Demo
				</button>
				<button className='project-card__btn project-card__git-btn'>Git</button>
			</dic>
			<div className='project-card__description'>
				<h3>Description:</h3>
				<p className='project-card__description--text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					expedita officiis ipsam minus. Tempore repudiandae vitae vel? Quasi,
					beatae at eos ducimus veniam fugit corrupti cum placeat consequuntur
					delectus tenetur.
				</p>
				<h3>Technologys:</h3>
				<p className='project-card__description--text'>
					{' '}
					HTML, CSS, JavaScript, React
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
