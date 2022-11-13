import React from 'react';

import { auboutme } from '../../data/aboutme';
import '../../sass/Skills_aboutme.scss';
const Skills = () => {
	const skillList = () => {
		return auboutme.skills.map((skil) => <li key={skil}>{skil}</li>);
	};

	return (
		<div className='skills-box'>
			<h1>Stack</h1>
			<ul className='skills-box__list'>{skillList()}</ul>
		</div>
	);
};

export default Skills;
