import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './CvForm.scss';
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
			<form className='cv-edit-form' method='submit' onSubmit={handleOnsubmit}>
				<label className='cv-edit-form__label'>Set your new description:</label>
				<input
					className='cv-edit-form__input'
					type='text'
					value={cvLinkInput}
					onChange={handleLinkInput}
				/>
				{editError && (
					<div className='cv-edit-form__error'>
						<p>Field can't be empty</p>
					</div>
				)}
				<div className='cv-edit-form__btns'>
					<button className='cv-edit-form__btns__save-btn' type='submit'>
						Save
					</button>
					<button
						className='cv-edit-form__btns__cancel-btn'
						onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CvForm;
