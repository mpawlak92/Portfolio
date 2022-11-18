import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import { useDispatch } from 'react-redux';
import { login } from './LoginSlice';

import { users } from '../../data/users';
import './LoginForm.scss';
const LoginForm = ({ handleOnClose, isModalActive }) => {
	const [userInput, setUserInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [isLoginError, setIsLoginError] = useState(false);

	const dispatch = useDispatch();

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
	const userDataValidation = (e) => {
		e.preventDefault();
		const userCheck = users.filter((user) => user.name === userInput);

		if (userCheck.length > 0) {
			if (userCheck[userCheck.length - 1].password === passwordInput) {
				dispatch(login());
				setIsLoginError(false);
				handleOnClose();
				inputsClear();
			} else {
				setIsLoginError(true);
				inputsClear();
			}
		} else {
			setIsLoginError(true);
			inputsClear();
		}
	};
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			<form className='login-form' onSubmit={userDataValidation}>
				{isLoginError ? (
					<div className='login-form__error'>
						Nieprawidłowy login lub hasło.
					</div>
				) : null}
				<label className='login-form__label' htmlFor='user'>
					User:
				</label>
				<input
					className='login-form__input'
					type='text'
					id='user'
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
					value={passwordInput}
					onChange={handlePasswordInput}
				/>

				<button className='login-form__btns' type='submit'>
					Sign in
				</button>
			</form>
		</Modal>
	);
};

export default LoginForm;
