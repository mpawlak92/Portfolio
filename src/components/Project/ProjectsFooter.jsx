import React, { useEffect, useState } from 'react';

import request from '../../helpers/request';
import './ProjectsFooter.scss';

const ProjectsFooter = ({ isUserLogeed }) => {
	const handleFooterBtn = () => {
		window.open(githubLink);
	};
	const [githubLink, setGithubLink] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const { data } = await request.get('/aboutme');

		if (data.github_link !== undefined && data.github_link !== null) {
			setGithubLink(data.github_link);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='projects-footer'>
			{!isLoading && (
				<button className='projects-footer__git' onClick={handleFooterBtn}>
					GitHub
				</button>
			)}
			{isUserLogeed === true && (
				<button className='projects-footer__add-btn'>Dodaj nowy projekt</button>
			)}
		</div>
	);
};

export default ProjectsFooter;
