import React, { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import './ProjectAddForm.scss';
import { useDispatch } from 'react-redux';
import { addProjects } from './ProjectsSlice';

const ProjectAddForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const [titleInput, setTitleInput] = useState('');
	const [gitLinkInput, setGitLinkInput] = useState('');
	const [descriptionText, setDescriptionText] = useState('');
	const [technologysInput, setTechnologysInput] = useState('');
	const [editError, setEditError] = useState(false);
	const canSave = Boolean(titleInput);

	const [selectedFile, setSelectedFile] = useState(null);
	const coverRef = useRef(null);
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
	const clearForm = () => {
		setTechnologysInput('');
		setDescriptionText('');
		setGitLinkInput('');
		setTitleInput('');
		coverRef.current.value = null;
	};
	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			const technologys = technologysInput.toString();

			const editedObject = {
				name: titleInput,
				description: descriptionText,
				technologys: technologys.split(','),
				git_link: gitLinkInput,
				image: selectedFile,
			};

			dispatch(addProjects(editedObject));
			setEditError(false);
			clearForm();
			handleOnClose(e);
		} else {
			setEditError(true);
		}
	};
	const handleFileSelect = (e) => {
		const fileObj = e.target.files[0];
		setSelectedFile(e.target.files[0]);
		if (!fileObj) {
			return;
		}
	};
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<form
				className='project-add-form'
				method='submit'
				encType='multipart/form-data'
				onSubmit={handleOnsubmit}>
				<label className='project-add-form__label'>Title:</label>
				<input
					className='project-add-form__input'
					type='text'
					value={titleInput}
					onChange={handleTitleInput}
				/>

				<label className='project-add-form__label'>Cover:</label>
				<input
					ref={coverRef}
					className='project-add-form__input'
					type='file'
					name='cover'
					onChange={handleFileSelect}
				/>

				<label className='project-add-form__label'>Git link:</label>
				<input
					className='project-add-form__input'
					type='text'
					value={gitLinkInput}
					onChange={handleGitLinkInput}
				/>

				<label className='project-add-form__label'>Description:</label>
				<input
					className='project-add-form__input'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionText}
				/>

				<label className='project-add-form__label'>
					Technologys(have to be separated by comma with spaces eg: HTML, CSS,
					BEM):
				</label>
				<input
					className='project-add-form__input'
					type='text'
					value={technologysInput}
					onChange={handleTechnologysInput}
				/>

				{editError && (
					<div className='project-add-form__error'>
						<p>Title field can't be empty</p>
					</div>
				)}
				<div className='project-add-form__btns'>
					<button className='project-add-form__btns__save-btn' type='submit'>
						Save
					</button>
					<button
						className='project-add-form__btns__cancel-btn'
						onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ProjectAddForm;
