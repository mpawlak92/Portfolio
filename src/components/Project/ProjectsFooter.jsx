import React from 'react';
import { useSelector } from 'react-redux';

import { aboutme } from '../../data/aboutme';
import './ProjectsFooter.scss';
const ProjectsFooter = () => {
	const isloged = useSelector((state) => state.login.isUserLogeed);

	const handleFooterBtn = () => {
		window.open(aboutme.github_link);
	};
	return (
		<div className='projects-footer'>
			<button className='projects-footer__git' onClick={handleFooterBtn}>
				GitHub
			</button>
			{isloged === true && <button>Dodaj</button>}
		</div>
	);
};

export default ProjectsFooter;
