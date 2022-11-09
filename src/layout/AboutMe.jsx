import React from 'react';

import DescriptionAboutMe from '../components/Description_aboutme';
import Cv from '../components/Cv';
import Skills from '../components/Skills_aboutme';

import '../sass/AboutMe.scss';

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
