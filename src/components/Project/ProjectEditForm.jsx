import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './ProjectEditForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjects, projectsData } from './ProjectsSlice';

const ProjectEditForm = ({ id, handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const data = useSelector(projectsData);
	const index = data.findIndex((project) => project._id === id);

	const [titleInput, setTitleInput] = useState(data[index].name);
	const [gitLinkInput, setGitLinkInput] = useState(data[index].git_link);
	const [descriptionText, setDescriptionText] = useState(
		data[index].description
	);
	const [technologysInput, setTechnologysInput] = useState(
		data[index].technologys
	);
	const [editError, setEditError] = useState(false);
	const canSave = Boolean(descriptionText);

	const handleTitleInput = (e) => {
		setTitleInput(e.target.value);
	};
	const handleGitLinkInput = (e) => {
		setGitLinkInput(e.target.value);
	};
	const handleDescriptionText = (e) => {
		setDescriptionText(e.target.value);
	};
	const handleTechnologysInput = (e) => {
		setTechnologysInput(e.target.value);
	};
	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			const technologys = technologysInput.toString();

			const editedObject = {
				_id: id,
				name: titleInput,
				description: descriptionText,
				technologys: technologys.split(','),
				git_link: gitLinkInput,
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
				className='project-edit-form'
				method='submit'
				onSubmit={handleOnsubmit}>
				<label className='project-edit-form__label'>Title:</label>
				<input
					className='project-edit-form__input'
					type='text'
					value={titleInput}
					onChange={handleTitleInput}
				/>

				<label className='project-edit-form__label'>Git link:</label>
				<input
					className='project-edit-form__input'
					type='text'
					value={gitLinkInput}
					onChange={handleGitLinkInput}
				/>

				<label className='project-edit-form__label'>Description:</label>
				<input
					className='project-edit-form__input'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionText}
				/>

				<label className='project-edit-form__label'>
					Technologys(have to be separated b comma with spaces eg: HTML, CSS,
					BEM):
				</label>
				<input
					className='project-edit-form__input'
					type='text'
					value={technologysInput}
					onChange={handleTechnologysInput}
				/>

				{editError && (
					<div className='project-edit-form__error'>
						<p>Pole nie moze być puste!</p>
					</div>
				)}
				<div className='project-edit-form__btns'>
					<button className='project-edit-form__btns__save-btn' type='submit'>
						Save
					</button>
					<button
						className='project-edit-form__btns__cancel-btn'
						onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ProjectEditForm;
