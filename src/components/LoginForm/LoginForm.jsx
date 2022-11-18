import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import { useSelector, useDispatch } from 'react-redux';
import { login } from './LoginSlice';

// import { users } from '../../data/users';
import './LoginForm.scss';
const LoginForm = ({ handleOnClose, isModalActive }) => {
	// const [userInput, setUserInput] = useState();

	const islogged = useSelector((state) => state.login.isUserLogeed);
	const dispatch = useDispatch();

	const userDataValidation = (e) => {
		e.preventDefault();
		dispatch(login());
	};
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			<form className='login-form' onSubmit={userDataValidation}>
				<div className='login-form__error'>Nieprawidłowy login lub hasło.</div>
				<label className='login-form__label' htmlFor='user'>
					User:
				</label>
				{console.log(islogged)}
				<input className='login-form__input' tepe='text' id='user' />
				<label className='login-form__label' htmlFor='pass'>
					Password:
				</label>
				<input className='login-form__input' tepe='password' id='pass' />
				<div className='login-form__btns'>
					<button type='submit'>Sign in</button>
					{/* <button>Register</button> */}
				</div>
			</form>
		</Modal>
	);
};

export default LoginForm;
