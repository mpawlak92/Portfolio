import React from 'react';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateAboutMe, aboutmeData } from './AboutMeSlice';

const SkilDeleteWarning = ({ index, handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const data = useSelector(aboutmeData);
	const handleDelete = async (e) => {
		const newSkilsArry = [...data.skills];

		newSkilsArry.splice(index, 1);
		dispatch(updateAboutMe({ skills: newSkilsArry }));
		handleOnClose();
	};

	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<div className='modal__wrapper'>
				<p className='modal__delete-warning'>Do wanna delete this item?</p>
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

export default SkilDeleteWarning;
