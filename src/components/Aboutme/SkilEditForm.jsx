import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './SkilEditForm.scss';

import { useDispatch, useSelector } from 'react-redux';
import { updateAboutMe, aboutmeData } from './AboutMeSlice';

const SkilEditForm = ({ index, handleOnClose, isModalActive }) => {
	
	const dispatch = useDispatch();
	const data = useSelector(aboutmeData);
	// console.log(index);
	// console.log(data.skills[index]);
	// I have on idea why it doesn't work
	const [skilInput, setSkilInput] = useState(data.skills[index]);
	const [editError, setEditError] = useState(false);
	const canSave = Boolean(skilInput);

	const handleSkilInput = (e) => {
		setSkilInput(e.target.value);
	};
	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			const newSkilsArray = [...data.skills];

			newSkilsArray[index] = skilInput;

			dispatch(updateAboutMe({ skills: newSkilsArray }));
			setEditError(false);
			setSkilInput('');
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
				className='skil-edit-form'
				method='submit'
				onSubmit={handleOnsubmit}>
				<label className='skil-edit-form__label'>Edit your skil:</label>
				<input
					className='skil-edit-form__input'
					type='text'
					value={skilInput}
					onChange={handleSkilInput}
				/>
				{editError && (
					<div className='skil-edit-form__error'>
						<p>Field can't be empty</p>
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
