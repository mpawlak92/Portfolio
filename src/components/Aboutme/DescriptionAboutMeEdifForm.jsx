import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

import request from '../../helpers/request';

import './DescriptionAboutMeEdifForm.scss';
const DescriptionAboutMeEdifForm = ({ handleOnClose, isModalActive }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [descriptionText, setDescriptionText] = useState('');

	const fetchData = async () => {
		const { data } = await request.get('/aboutme');
		setDescriptionText(data.description);
		setIsLoading(false);
	};
	useEffect(() => {
		console.log('pobranie danych');
		fetchData();
	}, []);

	const handleDescriptionTextarea = (e) => {
		setDescriptionText(e.target.value);
	};

	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<form className='description-edit-form'>
				{isLoading ? (
					<div className='description-edit-form__error'>Is Loading...</div>
				) : null}
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
