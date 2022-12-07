import React from 'react';
import Modal from '../Modal/Modal';
import './SkilDeleteAllWarning.scss';
import { useDispatch } from 'react-redux';
import { updateAboutMe } from './AboutMeSlice';

const SkilDeleteAllWarning = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();

	const handleDelete = async (e) => {
		dispatch(updateAboutMe({ skills: [] }));
		handleOnClose();
	};

	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<div className='delete-all-box'>
				<p className='delete-all-box__delete-msg'>Do wanna delete ALL items?</p>
				<button className='delete-all-box__delete-btn' onClick={handleDelete}>
					Yes
				</button>
				<button className='delete-all-box__cancel-btn' onClick={handleOnClose}>
					Cancel
				</button>
			</div>
		</Modal>
	);
};

export default SkilDeleteAllWarning;
