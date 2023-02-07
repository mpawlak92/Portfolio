import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import { useDispatch } from 'react-redux';
import { login } from './LoginSlice';

import request from '../../helpers/request';
import Cookies from 'universal-cookie';
const LoginForm = ({ handleOnClose, isModalActive }) => {
	//initialize cookie
	const cookies = new Cookies();
	const dispatch = useDispatch();

	const [userInput, setUserInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [isLoginError, setIsLoginError] = useState(false);

	const handleUserInput = (e) => {
		setUserInput(e.target.value);
	};
	const handlePasswordInput = (e) => {
		setPasswordInput(e.target.value);
	};
	const inputsClear = () => {
		setUserInput('');
		setPasswordInput('');
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			username: userInput,
			password: passwordInput,
		};

		request
			.post('/user', userData, {
				headers: {
					'content-type': 'application/json',
					accept: 'application/json',
				},
			})
			.then((response) => {
				if (response.data.status) {
					dispatch(login());
					cookies.set('isUserLogeed', 'true', {
						maxAge: 120,
						SameSite: 'Strict',
					});
					// console.log(cookies.get('isUserLogeed'));
					setIsLoginError(false);
					handleOnClose();
				} else {
					setIsLoginError(response.data.message);
				}
			});
		inputsClear();
	};
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			<form className='modal__wrapper' method='POST' onSubmit={handleOnSubmit}>
				{isLoginError ? (
					<div className='modal__error'>{isLoginError}</div>
				) : null}
				<label className='modal__label' htmlFor='user'>
					User:
				</label>
				<input
					className='modal__input--login-form'
					type='text'
					id='user'
					name='username'
					value={userInput}
					onChange={handleUserInput}
				/>
				<label className='modal__label' htmlFor='pass'>
					Password:
				</label>
				<input
					className='modal__input--login-form'
					type='password'
					id='pass'
					name='password'
					value={passwordInput}
					onChange={handlePasswordInput}
				/>

				<button className='modal__accept-btn' type='submit'>
					Sign in
				</button>
			</form>
		</Modal>
	);
};

export default LoginForm;
