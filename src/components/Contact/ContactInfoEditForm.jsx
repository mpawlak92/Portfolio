import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import './ContactInfoEditForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { contactData, updateContact } from './ContactSlice';

const ContactInfoEditForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();
	const data = useSelector(contactData);

	const [phoneInput, setPhoneInput] = useState(data.phone);
	const [emailInput, setEmailInput] = useState(data.email);
	const [linkedinInput, setLinkedinInput] = useState(data.linkedin_link);
	const [editError, setEditError] = useState(false);

	const canSave = [phoneInput, emailInput, linkedinInput].every(Boolean);

	const handlePhoneInput = (e) => {
		setPhoneInput(e.target.value);
	};
	const handleEmailInput = (e) => {
		setEmailInput(e.target.value);
	};
	const handleLinkedinInput = (e) => {
		setLinkedinInput(e.target.value);
	};
	const handleOnsubmit = async (e) => {
		e.preventDefault();
		if (canSave) {
			const newContactInfo = {
				linkedin_link: linkedinInput,
				email: emailInput,
				phone: phoneInput,
			};

			dispatch(updateContact({ contact: newContactInfo }));
			setEditError(false);
			handleOnClose(e);
		} else {
			setEditError(true);
		}
	};
	const resetModalFielsdOnClose = () => {
		setPhoneInput(data.phone);
		setEmailInput(data.email);
		setLinkedinInput(data.linkedin_link);
		handleOnClose();
	};
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<form
				className='contact-info-edit-form'
				method='submit'
				onSubmit={handleOnsubmit}>
				<h1>Edit your contact informations</h1>
				<label className='contact-info-edit-form__label'>Phone:</label>
				<input
					className='contact-info-edit-form__input'
					type='number'
					value={phoneInput}
					onChange={handlePhoneInput}
				/>
				<label className='contact-info-edit-form__label'>Email:</label>
				<input
					className='contact-info-edit-form__input'
					type='email'
					value={emailInput}
					onChange={handleEmailInput}
				/>
				<label className='contact-info-edit-form__label'>Linkedin:</label>
				<input
					className='contact-info-edit-form__input'
					type='text'
					value={linkedinInput}
					onChange={handleLinkedinInput}
				/>
				{editError && (
					<div className='contact-info-edit-form__error'>
						<p>No field can't be empty.</p>
					</div>
				)}
				<div className='contact-info-edit-form__btns'>
					<button
						className='contact-info-edit-form__btns__save-btn'
						type='submit'>
						Save
					</button>
					<button
						className='contact-info-edit-form__btns__cancel-btn'
						onClick={resetModalFielsdOnClose}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ContactInfoEditForm;
