import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { updateAboutMe, aboutmeData } from './AboutMeSlice';

const SkilEditForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();

	const [skilInput, setSkilInput] = useState(null);
	const [editError, setEditError] = useState(false);

	const canSave = Boolean(skilInput);

	const handleSkilInput = (e) => {
		setSkilInput(e.target.value);
	};

	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			dispatch(updateAboutMe({ skills[]: skilInput }));
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
			<form className='skil-edit-form' method='submit' onSubmit={handleOnsubmit}>
				<label className='skil-edit-form__label'>Set your new description:</label>
				<input
					className='skil-edit-form__input'
					type='text'
					value={skilInput}
					onChange={handleSkilInput}
				/>
				{editError && (
					<div className='skil-edit-form__error'>
						<p>Pole nie moze być puste!</p>
					</div>
				)}
				<div className='skil-edit-form__btns'>
					<button className='skil-edit-form__btns__save-btn' type='submit'>
						Save
					</button>
					<button
						className='skil-edit-form__btns__cancel-btn'
						onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default SkilEditForm;
