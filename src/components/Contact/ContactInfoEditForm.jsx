import React, { useState } from 'react';
import Modal from '../Modal/Modal';
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

	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={false}>
			<form
				className='modal__wrapper'
				method='submit'
				onSubmit={handleOnsubmit}>
				<label className='modal__label--left'>Phone:</label>
				<input
					className='modal__input'
					type='number'
					value={phoneInput}
					onChange={handlePhoneInput}
				/>
				<label className='modal__label--left'>Email:</label>
				<input
					className='modal__input'
					type='email'
					value={emailInput}
					onChange={handleEmailInput}
				/>
				<label className='modal__label--left'>Linkedin:</label>
				<input
					className='modal__input'
					type='text'
					value={linkedinInput}
					onChange={handleLinkedinInput}
				/>
				{editError && (
					<div className='modal__error'>
						<p>No field can't be empty.</p>
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

export default ContactInfoEditForm;
