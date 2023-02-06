import React from 'react';
import Modal from '../Modal/Modal';
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
			<div className='modal__wrapper'>
				<p className='modal__delete-warning'>Do wanna delete ALL items?</p>
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

export default SkilDeleteAllWarning;
