import React from 'react';
import Modal from '../Modal/Modal';
import './ProjectDeleteWarning.scss';
import { useDispatch } from 'react-redux';
import { deleteProjects } from './ProjectsSlice';

const ProjectDeleteWarning = ({ id, handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();

	const handleDelete = async (e) => {
		e.preventDefault();
		dispatch(deleteProjects(id));

		handleOnClose(e);
	};

	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<div className='delete-project-box'>
				<p className='delete-project-box__delete-msg'>
					Do wanna delete this project? {id}
				</p>
				<button
					className='delete-project-box__delete-btn'
					onClick={handleDelete}>
					Yes
				</button>
				<button
					className='delete-project-box__cancel-btn'
					onClick={handleOnClose}>
					Cancel
				</button>
			</div>
		</Modal>
	);
};

export default ProjectDeleteWarning;
