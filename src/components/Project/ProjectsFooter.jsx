import React, { useState } from 'react';

import ProjectAddForm from './ProjectAddForm';
import './ProjectsFooter.scss';

const ProjectsFooter = ({ data, isUserLogeed }) => {
	const handleFooterBtn = () => {
		window.open(data);
	};

	const [isAddModalActive, setIsAddModalActive] = useState(false);

	const handleAddBtn = () => {
		setIsAddModalActive(true);
	};
	const handleOnAddModalClose = (e) => {
		e.preventDefault();
		setIsAddModalActive(false);
	};

	return (
		<div className='projects-footer'>
			<button className='projects-footer__git' onClick={handleFooterBtn}>
				GitHub
			</button>

			{isUserLogeed === true && (
				<button className='projects-footer__add-btn' onClick={handleAddBtn}>
					Dodaj nowy projekt
				</button>
			)}
			<ProjectAddForm
				isModalActive={isAddModalActive}
				handleOnClose={handleOnAddModalClose}
			/>
		</div>
	);
};

export default ProjectsFooter;
