import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import request from '../../helpers/request';

import './DescriptionAboutMeEdifForm.scss';
const DescriptionAboutMeEdifForm = ({ data, handleOnClose, isModalActive }) => {
	const [descriptionText, setDescriptionText] = useState(data);

	const handleDescriptionTextarea = (e) => {
		setDescriptionText(e.target.value);
	};
	const handleOnsubmit = async (e) => {
		e.preventDefault();
		await request.patch('/aboutme', { description: descriptionText });
		handleOnClose(e);
		//niedokończona funkcja najpierw wszystkie dane do contextu
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
