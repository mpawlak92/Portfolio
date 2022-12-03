import React from 'react';
import Modal from '../Modal/Modal';
import './SkilDeleteAllWarning.scss';
import { useDispatch} from 'react-redux';
import { updateAboutMe} from './AboutMeSlice';

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
			<div className='delete-box'>
				<p className='delete-box__delete-msg'>Do wanna delete ALL items?</p>
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

export default SkilDeleteAllWarning;
