import React, { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjects, projectsData } from './ProjectsSlice';

const ProjectEditForm = ({ id, handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const data = useSelector(projectsData);
	const index = data.findIndex((project) => project._id === id);

	const [titleInput, setTitleInput] = useState(data[index].name);
	const [gitLinkInput, setGitLinkInput] = useState(data[index].git_link);
	const [demoLinkInput, setDemoLinkInput] = useState(data[index].demo_link);
	const [descriptionText, setDescriptionText] = useState(
		data[index].description
	);
	const [technologysInput, setTechnologysInput] = useState(
		data[index].technologys
	);
	const [editError, setEditError] = useState(false);

	const [selectedFile, setSelectedFile] = useState(null);
	const coverRef = useRef(null);
	const canSave = Boolean(titleInput);

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
				demo_link: demoLinkInput,
				projectCover: selectedFile,
			};

			dispatch(updateProjects(editedObject));
			setEditError(false);
			coverRef.current.value = null;
			handleOnClose(e);
		} else {
			setEditError(true);
		}
	};
	const handleFileSelect = (e) => {
		const fileObj = e.target.files[0];
		if (!fileObj) {
			return;
		} else {
			//covert file to base64

			// Encode the file using the FileReader API
			const reader = new FileReader();
			reader.onloadend = () => {
				// Use a regex to remove data url part
				const base64String = reader.result
					.replace('data:', '')
					.replace(/^.+,/, '');

				// console.log(base64String);
				// Logs wL2dvYWwgbW9yZ...
				setSelectedFile(base64String);
			};
			reader.readAsDataURL(fileObj);
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

export default ProjectEditForm;
