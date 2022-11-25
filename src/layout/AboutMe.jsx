import React from 'react';

import DescriptionAboutMe from '../components/Aboutme/DescriptionAboutMe';
import Cv from '../components/Aboutme/Cv';
import Skills from '../components/Aboutme/SkillsAboutMe';

import './AboutMe.scss';

const Home = () => {
	return (
		<div className='about-me'>
			<DescriptionAboutMe />
			<Cv />
			<Skills />
		</div>
	);
};

export default Home;
