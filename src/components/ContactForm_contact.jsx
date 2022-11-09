import React from 'react';

import '../sass/ContactForm_contact.scss';

const ContactForm = () => {
	const handleSubmitForm = () => {};
	return (
		<div className='contact-form'>
			<form onSubmit={handleSubmitForm}>
				<label htmlFor='name'>
					<span className='contact-form__label'>Name and Surname:</span>
				</label>
				<input className='contact-form__input' type='text' id='name' />
				<div className='contact-form__error-info'>Podaj poprawne dane!</div>
				<label htmlFor='tel'>
					<span className='contact-form__label'>Phone number:</span>
				</label>
				<input className='contact-form__input' type='number' id='tel' />
				<div className='contact-form__error-info'></div>
				<label htmlFor='mail'>
					<span className='contact-form__label'>E-mail:</span>
				</label>
				<input className='contact-form__input' type='mail' id='mail' />
				<div className='contact-form__error-info'></div>
				<label htmlFor='message'>
					<span className='contact-form__label'>Message:</span>
				</label>
				<textarea
					className='contact-form__textarea'
					id='message'
					placeholder='Please write Your message here.'></textarea>
				<div className='contact-form__error-info'></div>
				<button className='contact-form__submit-btn'>Submit</button>
			</form>
		</div>
	);
};

export default ContactForm;
