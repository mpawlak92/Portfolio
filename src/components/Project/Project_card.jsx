import React from 'react';

import '../../sass/Project_card.scss';
import '../../sass/Variables.scss';

let titleBefore = document.querySelector('.project-card');
const ProjectCard = ({ name, description, technologys, git_link }) => {
	console.log(titleBefore);
	const handleGitBtn = () => {
		window.open(git_link);
	};
	const setProjectTitle = () => {
		let firsfTitlePartLength = Math.floor(name.length / 2);
		let firstTitlePart = name.slice(0, firsfTitlePartLength);
		let secendTitlePart = name.slice(firsfTitlePartLength, name.length);
		return (
			<div
				className='project-card__photo'
				data-title_1={firstTitlePart}
				data-title_2={secendTitlePart}></div>
		);
	};

	return (
		<div className='project-card'>
			{setProjectTitle()}

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
				<p className='project-card__description--text'>{description}</p>
				<h3>Technologys:</h3>
				<p className='project-card__description--text'>
					{technologys.map((tech) => {
						return tech + ', ';
					})}
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
