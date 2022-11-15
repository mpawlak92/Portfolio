import React from 'react';

import { aboutme } from '../../data/aboutme';
import '../../sass/ProjectsFooter.scss';
const ProjectsFooter = () => {
	const handleFooterBtn = () => {
		window.open(aboutme.github_link);
	};
	return (
		<div className='projects-footer'>
			<button className='projects-footer__git' onClick={handleFooterBtn}>
				GitHub
			</button>
		</div>
	);
};

export default ProjectsFooter;
