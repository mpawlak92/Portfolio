import React, { useState } from 'react';
import Modal from '../Modal/Modal';

// import request from '../../helpers/request';

import './DescriptionAboutMeEdifForm.scss';
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
			dispatch(updateAboutMe(descriptionText));
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
				className='description-edit-form'
				method='submit'
				onSubmit={handleOnsubmit}>
				<label className='description-edit-form__label'>
					Set your new description:
				</label>
				<textarea
					className='description-edit-form__textarea'
					type='text'
					value={descriptionText}
					onChange={handleDescriptionTextarea}
				/>
				<div className='description-edit-form__error'>
					{editError && <p>Pole nie moze być puste!</p>}
				</div>
				<div className='description-edit-form__btns'>
					<button
						className='description-edit-form__btns__save-btn'
						type='submit'>
						Save
					</button>
					<button
						className='description-edit-form__btns__cancel-btn'
						onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default DescriptionAboutMeEdifForm;
