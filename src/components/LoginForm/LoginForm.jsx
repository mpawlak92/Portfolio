import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import { useDispatch } from 'react-redux';
import { login } from './LoginSlice';

import request from '../../helpers/request';
import Cookies from 'universal-cookie';
import './LoginForm.scss';
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
					cookies.set('isUserLogeed', 'true', { maxAge: 120 });
					// console.log(cookies.get('isUserLogeed'));
					setIsLoginError(false);
					handleOnClose();
				} else {
					setIsLoginError(response.data.message);
				}
			});
		inputsClear();
		console.log(cookies.get('isUserLogeed'));
	};
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			<form className='login-form' method='POST' onSubmit={handleOnSubmit}>
				{isLoginError ? (
					<div className='login-form__error'>{isLoginError}</div>
				) : null}
				<label className='login-form__label' htmlFor='user'>
					User:
				</label>
				<input
					className='login-form__input'
					type='text'
					id='user'
					name='username'
					value={userInput}
					onChange={handleUserInput}
				/>
				<label className='login-form__label' htmlFor='pass'>
					Password:
				</label>
				<input
					className='login-form__input'
					type='password'
					id='pass'
					name='password'
					value={passwordInput}
					onChange={handlePasswordInput}
				/>

				<button className='login-form__btn' type='submit'>
					Sign in
				</button>
			</form>
		</Modal>
	);
};

export default LoginForm;
