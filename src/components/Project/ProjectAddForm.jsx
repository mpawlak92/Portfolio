import React, { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { addProjects } from './ProjectsSlice';

const ProjectAddForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const [titleInput, setTitleInput] = useState('');
	const [gitLinkInput, setGitLinkInput] = useState('');
	const [demoLinkInput, setDemoLinkInput] = useState('');
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
	const handleDemoLinkInput = (e) => {
		setDemoLinkInput(e.target.value);
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
		setDemoLinkInput('');
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
				demo_link: demoLinkInput,
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
				className='modal__wrapper'
				method='submit'
				encType='multipart/form-data'
				onSubmit={handleOnsubmit}>
				<label className='modal__label--left'>Title:</label>
				<input
					className='modal__input'
					type='text'
					value={titleInput}
					onChange={handleTitleInput}
				/>

				<label className='modal__label--left'>Cover:</label>
				<input
					ref={coverRef}
					className='modal__input'
					type='file'
					name='cover'
					onChange={handleFileSelect}
				/>

				<label className='modal__label--left'>Git link:</label>
				<input
					className='modal__input'
					type='text'
					value={gitLinkInput}
					onChange={handleGitLinkInput}
				/>
				<label className='modal__label--left'>Demo link:</label>
				<input
					className='modal__input'
					type='text'
					value={demoLinkInput}
					onChange={handleDemoLinkInput}
				/>

				<label className='modal__label--left'>Description:</label>
				<input
					className='modal__input'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionText}
				/>

				<label className='modal__label--left'>
					Technologys(have to be separated by comma with spaces eg: HTML, CSS,
					BEM):
				</label>
				<input
					className='modal__input'
					type='text'
					value={technologysInput}
					onChange={handleTechnologysInput}
				/>

				{editError && (
					<div className='modal__error'>
						<p>Title field can't be empty</p>
					</div>
				)}
				<div className='modal__btns'>
					<button className='modal__accept-btn' type='submit'>
						Save
					</button>
					<button className='modal__cancel-btn' onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ProjectAddForm;
