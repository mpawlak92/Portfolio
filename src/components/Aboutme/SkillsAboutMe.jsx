import React from 'react';
import { useSelector } from 'react-redux';

import './SkillsAboutMe.scss';
const Skills = ({ data }) => {
	const isloged = useSelector((state) => state.login.isUserLogeed);

	const skillList = () => {
		return data.map((skil) => (
			<li key={skil}>
				{skil}
				{isloged === true && (
					<button className='skills-box__list__btn'>Edytuj</button>
				)}
				{isloged === true && (
					<button className='skills-box__list__btn'>Usuń</button>
				)}
			</li>
		));
	};

	return (
		<div className='skills-box'>
			<h1>Stack</h1>
			<ul className='skills-box__list'>{skillList()}</ul>
			{isloged === true && (
				<button className='skills-box__btn skills-box__add-btn'>Dodaj</button>
			)}
			{isloged === true && (
				<button className='skills-box__btn skills-box__delete-all-btn'>
					Usuń wszystkie
				</button>
			)}
		</div>
	);
};

export default Skills;
