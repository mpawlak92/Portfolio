import React from 'react';
import { useSelector } from 'react-redux';

import { aboutme } from '../../data/aboutme';
import './SkillsAboutMe.scss';
const Skills = () => {
	const isloged = useSelector((state) => state.login.isUserLogeed);

	const skillList = () => {
		return aboutme.skills.map((skil) => (
			<li key={skil}>
				{skil}
				{isloged === true && <button>Edytuj</button>}
				{isloged === true && <button>Usuń</button>}
			</li>
		));
	};

	return (
		<div className='skills-box'>
			<h1>Stack</h1>
			<ul className='skills-box__list'>{skillList()}</ul>
			{isloged === true && <button>Dodaj</button>}
			{isloged === true && <button>Usuń wszystkie</button>}
		</div>
	);
};

export default Skills;
// import { useSelector } from 'react-redux';
// 	const isloged = useSelector((state) => state.login.isUserLogeed);
