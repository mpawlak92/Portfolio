import React from 'react';

import DescriptionAboutMe from '../components/Aboutme/Description_aboutme';
import Cv from '../components/Aboutme/Cv';
import Skills from '../components/Aboutme/Skills_aboutme';

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
