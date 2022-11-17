import React from 'react';
import Modal from '../Modal/Modal';
import './LoginForm.scss';
const LoginForm = ({ handleOnClose, isModalActive }) => {
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			<form className='login-form'>
				<div className='login-form__error'>Nieprawidłowy login lub hasło.</div>
				<label className='login-form__label' htmlFor='user'>
					User:
				</label>
				<input className='login-form__input' tepe='text' id='user' />
				<label className='login-form__label' htmlFor='pass'>
					Password:
				</label>
				<input className='login-form__input' tepe='password' id='pass' />
			</form>
		</Modal>
	);
};

export default LoginForm;
