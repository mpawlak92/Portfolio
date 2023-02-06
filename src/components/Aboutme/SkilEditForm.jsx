import React, { useState } from 'react';
import Modal from '../Modal/Modal';
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
				className='modal__wrapper'
				method='submit'
				onSubmit={handleOnsubmit}>
				<label className='modal__label'>Edit your skil:</label>
				<input
					className='modal__input'
					type='text'
					value={skilInput}
					onChange={handleSkilInput}
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

export default SkilEditForm;
