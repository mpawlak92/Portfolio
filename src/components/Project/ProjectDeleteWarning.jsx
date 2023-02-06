import React from 'react';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { deleteProjects } from './ProjectsSlice';

const ProjectDeleteWarning = ({ id, handleOnClose, isModalActive, name }) => {
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
			<div className='modal__wrapper'>
				<p className='modal__delete-warning'>
					Do wanna delete this project {name}?
				</p>
				<div className='modal__btns'>
					<button className='modal__accept-btn' onClick={handleDelete}>
						Yes
					</button>
					<button className='modal__cancel-btn' onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ProjectDeleteWarning;
