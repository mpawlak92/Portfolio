import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateAboutMe, aboutmeData } from './AboutMeSlice';

const CvForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();

	const data = useSelector(aboutmeData);
	const [cvLinkInput, setCvLinkInput] = useState(data.cv_link);
	const [editError, setEditError] = useState(false);

	const canSave = Boolean(cvLinkInput);

	const handleLinkInput = (e) => {
		setCvLinkInput(e.target.value);
	};

	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			dispatch(updateAboutMe({ cv_link: cvLinkInput }));
			setEditError(false);
			handleOnClose(e);
		} else {
			setEditError(true);
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
				<label className='modal__label'>Set your new description:</label>
				<input
					className='modal__input'
					type='text'
					value={cvLinkInput}
					onChange={handleLinkInput}
				/>
				{editError && (
					<div className='modal__error'>
						<p>Field can't be empty</p>
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

export default CvForm;
