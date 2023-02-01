import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SkilAddForm from './SkilAddForm';
import SkilDeleteAllWarning from './SkilDeleteAllWarning';
import SkilDeleteWarning from './SkilDeleteWarning';
import SkilEditForm from './SkilEditForm';

import './SkillsAboutMe.scss';

const Skills = ({ data }) => {
	const isloged = useSelector((state) => state.login.isUserLogeed);

	const [isModalActive, setIsModalActive] = useState(false);
	const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
	const [isAddModalActive, setIsAddModalActive] = useState(false);
	const [isDeleteAllModalActive, setIsDeleteAllModalActive] = useState(false);
	const [indexElement, setIndexElement] = useState('');

	const handleEditBtn = (e) => {
		setIndexElement(e.target.parentElement.getAttribute('index'));
		setIsModalActive(true);
	};
	const handleOnModalClose = (e) => {
		e.preventDefault();
		setIsModalActive(false);
	};
	const handleDeleteBtn = (e) => {
		setIndexElement(e.target.parentElement.getAttribute('index'));
		setIsDeleteModalActive(true);
	};
	const handleOnDeleteModalClose = () => {
		setIsDeleteModalActive(false);
	};
	const handleOnAddBtn = (e) => {
		setIsAddModalActive(true);
	};
	const handleOnAddModalClose = () => {
		setIsAddModalActive(false);
	};
	const handleOnDeleteAllBtn = (e) => {
		setIsDeleteAllModalActive(true);
	};
	const handleOnDeleteAlldModalClose = () => {
		setIsDeleteAllModalActive(false);
	};
	const skillList = (e) => {
		return data.map((skil) => (
			<li key={skil} index={data.indexOf(skil)}>
				{skil}

				{isloged === true && (
					<button className='skills-box__list__btn' onClick={handleEditBtn}>
						Edit
					</button>
				)}
				{isloged === true && (
					<button className='skills-box__list__btn' onClick={handleDeleteBtn}>
						Delete
					</button>
				)}
			</li>
		));
	};

	return (
		<div className='skills-box'>
			<h1>Stack</h1>
			<ul className='skills-box__list'>{skillList()}</ul>
			{isloged === true && (
				<button
					className='skills-box__btn skills-box__add-btn'
					onClick={handleOnAddBtn}>
					Add new skill
				</button>
			)}
			{isloged === true && (
				<button
					className='skills-box__btn skills-box__delete-all-btn'
					onClick={handleOnDeleteAllBtn}>
					Delete all skills
				</button>
			)}
			<SkilEditForm
				isModalActive={isModalActive}
				handleOnClose={handleOnModalClose}
				index={indexElement}
			/>
			<SkilDeleteWarning
				isModalActive={isDeleteModalActive}
				handleOnClose={handleOnDeleteModalClose}
				index={indexElement}
			/>
			<SkilAddForm
				isModalActive={isAddModalActive}
				handleOnClose={handleOnAddModalClose}
			/>
			<SkilDeleteAllWarning
				isModalActive={isDeleteAllModalActive}
				handleOnClose={handleOnDeleteAlldModalClose}
			/>
		</div>
	);
};

export default Skills;
