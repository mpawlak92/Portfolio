import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './SkilAddForm.scss';

import { useDispatch, useSelector } from 'react-redux';
import { updateAboutMe, aboutmeData } from './AboutMeSlice';

const SkilAddForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const data = useSelector(aboutmeData);
	const [skilInput, setSkilInput] = useState('');
	const [editError, setEditError] = useState(false);
	const canSave = Boolean(skilInput);

	const handleSkilInput = (e) => {
		setSkilInput(e.target.value);
	};
	const handleOnsubmit = async (e) => {
		e.preventDefault();

		const isNoRepeat = data.skills.indexOf(skilInput);

		if (canSave && isNoRepeat === -1) {
			const newSkilsArray = [...data.skills, skilInput];

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
			<form className='skil-add-form' method='submit' onSubmit={handleOnsubmit}>
				<label className='skil-add-form__label'>Add your new skil:</label>
				<input
					className='skil-add-form__input'
					type='text'
					value={skilInput}
					onChange={handleSkilInput}
				/>
				{editError && (
					<div className='skil-add-form__error'>
						<p>Field can't be epmty or skil exist</p>
					</div>
				)}
				<div className='skil-add-form__btns'>
					<button className='skil-add-form__btns__save-btn' type='submit'>
						Save
					</button>
					<button
						className='skil-add-form__btns__cancel-btn'
						onClick={handleOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default SkilAddForm;
