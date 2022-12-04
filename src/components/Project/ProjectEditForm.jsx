import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { updateProjects, projectsData } from './ProjectsSlice';

const ProjectEditForm = ({ id, handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const data = useSelector(projectsData);
	const index = data.findIndex((project) => project.id === id);

	const [descriptionText, setDescriptionText] = useState(
		data[index].description
	);
	const [editError, setEditError] = useState(false);
	const canSave = Boolean(descriptionText);

	const handleDescriptionText = (e) => {
		setDescriptionText(e.target.value);
	};
	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			const editedObject = {
				id,
				name: 'Aga-Music',
				description: descriptionText,
				technologys: ['HTML', 'CSS', 'JavaScript', 'React'],
				git_link: 'https://github.com/mpawlak92/Portfolio',
			};

			dispatch(updateProjects(editedObject));
			setEditError(false);
			handleOnClose(e);
		} else {
			setEditError(true);
		}
	};

	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<form
				className='skil-edit-form'
				method='submit'
				onSubmit={handleOnsubmit}>
				<label className='skil-edit-form__label'>Title:</label>
				<input
					className='skil-edit-form__input'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionText}
				/>

				<label className='skil-edit-form__label'>Git link:</label>
				<input
					className='skil-edit-form__input'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionText}
				/>

				<label className='skil-edit-form__label'>Description:</label>
				<input
					className='skil-edit-form__input'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionText}
				/>

				<label className='skil-edit-form__label'>
					Technologys(have to be separated b comma with spaces eg: HTML, CSS,
					BEM):
				</label>
				<input
					className='skil-edit-form__input'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionText}
				/>

				{editError && (
					<div className='skil-edit-form__error'>
						<p>Pole nie moze być puste!</p>
					</div>
				)}
				<div className='skil-edit-form__btns'>
					<button className='skil-edit-form__btns__save-btn' type='submit'>
						Save
					</button>
					<button
						className='skil-edit-form__btns__cancel-btn'
						onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ProjectEditForm;
