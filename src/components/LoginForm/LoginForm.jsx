import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

import { useDispatch } from 'react-redux';
import { login } from './LoginSlice';

import request from '../../helpers/request';

import './LoginForm.scss';
const LoginForm = ({ handleOnClose, isModalActive }) => {
	const dispatch = useDispatch();

	const [UsersData, setUsersData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
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

	// const userDataValidation = (e) => {
	// 	e.preventDefault();
	// 	const userCheck = UsersData.filter((user) => user.name === userInput);
	// 	if (userCheck.length > 0) {
	// 		if (userCheck[userCheck.length - 1].password === passwordInput) {
	// 			dispatch(login());
	// 			setIsLoginError(false);
	// 			handleOnClose();
	// 			inputsClear();
	// 		} else {
	// 			setIsLoginError(true);
	// 			inputsClear();
	// 		}
	// 	} else {
	// 		setIsLoginError(true);
	// 		inputsClear();
	// 	}
	// };

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
				console.log(response);
			});
	};
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			<form className='login-form' method='POST' onSubmit={handleOnSubmit}>
				{isLoginError ? (
					<div className='login-form__error'>Wrong password or username!</div>
				) : null}
				{isLoading ? (
					<div className='login-form__error'>Is Loading...</div>
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
