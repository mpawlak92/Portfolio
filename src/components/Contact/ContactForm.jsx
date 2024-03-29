import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.scss';
import ContactFormMsg from './ContactFormMessage';
import Typewriter from 'typewriter-effect';
import ReCAPTCHA from 'react-google-recaptcha';
import request from '../../helpers/request';
//flags for form error
let msgError = 0,
	phoneError = 0,
	mailError = 0,
	nameError = 0;
let popUpMessage = '';
const ContactForm = () => {
	const [nameInputValue, setNameInputValue] = useState('');
	const [phoneInputValue, setPhoneInputValue] = useState('');
	const [mailInputValue, setMailInputValue] = useState('');
	const [messageInputValue, setMessageInputValue] = useState('');
	const [isError, setIsError] = useState(true);
	const [isPopUpActive, setIsPopUpActive] = useState(false);
	const [isRechaptcha, setIsRechaptcha] = useState(false);

	const form = useRef();
	const captchaRef = useRef(null);

	useEffect(() => {
		if (isError) {
			disableBtn();
		} else {
			console.log(isRechaptcha);
			if ((isRechaptcha === true) & (isError === false)) {
				enableBtn();
			}
		}
	}, [isError, isRechaptcha]);
	function onChange(e) {
		const token = captchaRef.current.getValue();

		request.post('/recaptcha', token).then((response) => {
			console.log(response.status);
			if (response.status === 200) {
				setIsRechaptcha(true);
			} else {
				setIsRechaptcha(false);
			}
		});
	}
	const handleSubmitForm = (e) => {
		e.preventDefault();
		//sending email with emailjs.com
		emailjs
			.sendForm(
				'service_aut12a8',
				'template_pn40usl',
				form.current,
				'LtQwMiI0se9a9WQQv'
			)
			.then(
				(result) => {
					if (result.status === 200) {
						popUpMessage = 'Your message was sended. Thanks :)';
					}
					setIsPopUpActive(true);
				},
				(error) => {
					if (error.status === 400) {
						popUpMessage = 'Something goes wrong. Try one more time.';
					}
					setIsPopUpActive(true);
				}
			);

		//reseting recaptcha
		captchaRef.current.reset();
		setIsRechaptcha(false);
		//clear all formwields - set white bgc in input and textarea
		setNameInputValue('');
		setPhoneInputValue('');
		setMailInputValue('');
		setMessageInputValue('');
		let formFields = e.target.children;
		for (let fieldNumber = 1; fieldNumber <= 10; fieldNumber += 3) {
			formFields[fieldNumber].style.backgroundColor = '#fff';
		}
		setIsError(true);
	};
	const handleInput = (e) => {
		const fieldType = e.target.id;

		if (fieldType === 'name') {
			setNameInputValue(e.target.value);
			inputsValidation(e, fieldType, e.target.value);
		} else if (fieldType === 'phone') {
			setPhoneInputValue(e.target.value);
			inputsValidation(e, fieldType, e.target.value);
		} else if (fieldType === 'mail') {
			setMailInputValue(e.target.value);
			inputsValidation(e, fieldType, e.target.value);
		} else if (fieldType === 'message') {
			setMessageInputValue(e.target.value);
			inputsValidation(e, fieldType, e.target.value);
		}
	};

	const inputsValidation = (e, type, value) => {
		const regExp_name =
			/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
		const regExp_mail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+.[a-zA-Z]{2,3}$/;
		if (
			(type === 'name') |
				(type === 'phone') |
				(type === 'mail') |
				(type === 'message') &&
			value === ''
		) {
			e.target.nextElementSibling.textContent = 'The field must be completed.';
		} else if (type === 'name') {
			if (!regExp_name.test(value)) {
				e.target.nextElementSibling.textContent =
					'The field incorect. Name and surname should have min 2 characters and have space between eg. "Lin Hiu"';
				e.target.style.backgroundColor = '#fff';
				nameError = 1;
				setIsError(true);
			} else {
				nameError = 0;
				handleCorrectFormAction(e);
			}
		} else if (type === 'phone') {
			if (value.length < 9) {
				e.target.nextElementSibling.textContent =
					'The field must have minimum 9 characters.';
				e.target.style.backgroundColor = '#fff';
				phoneError = 1;

				setIsError(true);
			} else {
				phoneError = 0;
				handleCorrectFormAction(e);
			}
		} else if (type === 'mail') {
			if (!regExp_mail.test(value)) {
				e.target.nextElementSibling.textContent =
					'The field incorect. Minimal example correct one: a@c.cd';
				e.target.style.backgroundColor = '#fff';
				mailError = 1;

				setIsError(true);
			} else {
				mailError = 0;
				handleCorrectFormAction(e);
			}
		} else if (type === 'message') {
			if (value.length <= 2) {
				e.target.nextElementSibling.textContent =
					'The field must have min 10 characters.';
				e.target.style.backgroundColor = '#fff';
				msgError = 1;

				setIsError(true);
			} else {
				msgError = 0;
				handleCorrectFormAction(e);
			}
		}
	};
	const handleCorrectFormAction = (e) => {
		e.target.nextElementSibling.textContent = ' ';
		e.target.style.backgroundColor = '#e8f0fd';

		handleActiveSubmitBtn();
	};
	const handleActiveSubmitBtn = () => {
		if (
			msgError === 0 &&
			phoneError === 0 &&
			mailError === 0 &&
			nameError === 0 &&
			nameInputValue !== '' &&
			phoneInputValue !== '' &&
			messageInputValue !== '' &&
			mailInputValue !== ''
		) {
			setIsError(false);
		} else {
			setIsError(true);
		}
	};
	const handlePopUpClose = () => {
		setIsPopUpActive(false);
	};
	const enableBtn = () => {
		document.querySelector('.contact-form__submit-btn').disabled = false;
	};
	const disableBtn = () => {
		document.querySelector('.contact-form__submit-btn').disabled = true;
	};
	return (
		<>
			<ContactFormMsg
				msg={popUpMessage}
				handleOnClose={handlePopUpClose}
				isModalActive={isPopUpActive} 
			/>

			<div className='contact-form'>
				<div className='contact-form-heading'>
					<Typewriter
						options={{
							strings: ['Do You have any questions?', 'Send me a message!'],
							pauseFor: 2000,
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<form ref={form} onSubmit={handleSubmitForm}>
					<label htmlFor='name'>
						<span className='contact-form__label'>Name and Surname:</span>
					</label>
					<input
						className='contact-form__input'
						type='text'
						id='name'
						name='name'
						value={nameInputValue}
						onChange={handleInput}
					/>
					<div className='contact-form__error-info'></div>
					<label htmlFor='phone'>
						<span className='contact-form__label'>Phone number:</span>
					</label>
					<input
						className='contact-form__input'
						type='number'
						id='phone'
						name='phone'
						value={phoneInputValue}
						onChange={handleInput}
					/>
					<div className='contact-form__error-info'></div>
					<label htmlFor='mail'>
						<span className='contact-form__label'>E-mail:</span>
					</label>
					<input
						className='contact-form__input'
						type='mail'
						id='mail'
						name='mail'
						value={mailInputValue}
						onChange={handleInput}
					/>
					<div className='contact-form__error-info'></div>
					<label htmlFor='message'>
						<span className='contact-form__label'>Message:</span>
					</label>
					<textarea
						className='contact-form__textarea'
						id='message'
						name='message'
						placeholder='Please write Your message here.'
						maxLength='500'
						value={messageInputValue}
						onChange={handleInput}></textarea>
					<div className='contact-form__error-info'></div>
					<ReCAPTCHA
						ref={captchaRef}
						className='contact-form__recaptcha'
						sitekey={process.env.REACT_APP_RECAPTHA_SITE_KEY}
						hl='en'
						onChange={onChange}
					/>
					<button className='contact-form__submit-btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
