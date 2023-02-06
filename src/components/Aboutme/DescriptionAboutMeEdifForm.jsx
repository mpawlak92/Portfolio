import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateAboutMe, aboutmeData } from './AboutMeSlice';
const DescriptionAboutMeEdifForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();

	const data = useSelector(aboutmeData);
	const [descriptionText, setDescriptionText] = useState(data.description);
	const [editError, setEditError] = useState(false);

	const canSave = Boolean(descriptionText);

	const handleDescriptionTextarea = (e) => {
		setDescriptionText(e.target.value);
	};

	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			dispatch(updateAboutMe({ description: descriptionText }));
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
				<textarea
					className='modal__textarea'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionTextarea}
				/>
				{editError && (
					<div className='modal__error'>
						<p>Field can't be empty!</p>
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

export default DescriptionAboutMeEdifForm;
