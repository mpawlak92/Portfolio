import React from 'react';
import Modal from '../Modal/Modal';
import './SkilDeleteWarning.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateAboutMe, aboutmeData } from './AboutMeSlice';

const SkilDeleteWarning = ({ index, handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const data = useSelector(aboutmeData);
	const handleDelete = async (e) => {
		const newSkilsArry = [...data.skills];

		newSkilsArry.splice(index, 1);
		console.log(newSkilsArry);
		dispatch(updateAboutMe({ skills: newSkilsArry }));
		handleOnClose();
	};

	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<div className='delete-box'>
				<p className='delete-box__delete-msg'>Do wanna delete this item?</p>
				<button className='delete-box__delete-btn' onClick={handleDelete}>
					Yes
				</button>
				<button className='delete-box__cancel-btn' onClick={handleOnClose}>
					Cancel
				</button>
			</div>
		</Modal>
	);
};

export default SkilDeleteWarning;
