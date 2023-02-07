import React, { useRef, useEffect, useState } from 'react';

import './Project_card.scss';
import '../../sass/Variables.scss';
import ProjectEditForm from './ProjectEditForm';
import ProjectDeleteWarning from './ProjectDeleteWarning';

const ProjectCard = ({
	_id,
	name,
	description,
	technologys,
	git_link,
	projectCover,
	isUserLogeed,
}) => {
	const [isEditModalActive, setIsEditModalActive] = useState(false);
	const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
	const [isaccordionActive, setIsaccordionActive] = useState(null);

	const handleEditBtn = () => {
		setIsEditModalActive(true);
	};
	const handleOnEditModalClose = (e) => {
		e.preventDefault();
		setIsEditModalActive(false);
	};
	const handleDeleteBtn = () => {
		setIsDeleteModalActive(true);
	};
	const handleOnDeleteModalClose = (e) => {
		e.preventDefault();
		setIsDeleteModalActive(false);
	};

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

	const handleAccordion = () => {
		if (isaccordionActive != null) {
			setIsaccordionActive(null);
		} else {
			setIsaccordionActive(true);
		}
	};
	useEffect(() => {
		setProjectTitle();
	});

	let photoUrl =
		process.env.REACT_APP_API_URL + projectCover.replace(/\\/g, '/');

	return (
		<div className='project-card'>
			<div
				ref={projectCardPhotoRef}
				className='project-card__photo'
				style={{
					backgroundImage: 'url(' + photoUrl + ')',
				}}
				data-title_1=''
				data-title_2=''></div>
			<button className='project-card__btn'>Demo</button>
			<button className='project-card__btn' onClick={handleGitBtn}>
				Git
			</button>
			<div className='project-card__btns'>
				{isUserLogeed === true && (
					<button className='project-card__edit-btn' onClick={handleEditBtn}>
						Edutuj
					</button>
				)}
				{isUserLogeed === true && (
					<button className='project-card__del-btn' onClick={handleDeleteBtn}>
						Usuń
					</button>
				)}
			</div>

			{/* //--------------------- */}
			<div className='accordion'>
				<div
					className='accordion__btn'
					style={{
						transform: isaccordionActive != null ? 'rotateX(180deg)' : '',
					}}
					onClick={handleAccordion}></div>
				<div
					className='accordion__info'
					style={{
						display: isaccordionActive != null ? 'block' : 'none',
					}}>
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
			</div>

			<ProjectEditForm
				isModalActive={isEditModalActive}
				handleOnClose={handleOnEditModalClose}
				id={_id}
			/>
			<ProjectDeleteWarning
				isModalActive={isDeleteModalActive}
				handleOnClose={handleOnDeleteModalClose}
				id={_id}
				name={name}
			/>
		</div>
	);
};

export default ProjectCard;
