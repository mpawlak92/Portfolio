import React, { useRef, useEffect } from 'react';

import './Project_card.scss';
import '../../sass/Variables.scss';

const ProjectCard = ({
	name,
	description,
	technologys,
	git_link,
	isUserLogeed,
}) => {
	const projectCardPhotoRef = useRef();
	const handleGitBtn = () => {
		window.open(git_link);
	};
	const setProjectTitle = () => {
		let firsfTitlePartLength = Math.floor(name.length / 2);
		let firstTitlePart = name.slice(0, firsfTitlePartLength);
		let secendTitlePart = name.slice(firsfTitlePartLength, name.length);

		projectCardPhotoRef.current.setAttribute(
			'data-title_1',
			`${firstTitlePart}`
		);
		projectCardPhotoRef.current.setAttribute(
			'data-title_2',
			`${secendTitlePart}`
		);
	};
	useEffect(() => {
		setProjectTitle();
	});
	return (
		<div className='project-card'>
			<div
				ref={projectCardPhotoRef}
				className='project-card__photo'
				data-title_1=''
				data-title_2=''></div>

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
			<div className='project-card__btns'>
				{isUserLogeed === true && (
					<button className='project-card__edit-btn'>Edutuj</button>
				)}
				{isUserLogeed === true && (
					<button className='project-card__delete-btn'>Usuń</button>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
