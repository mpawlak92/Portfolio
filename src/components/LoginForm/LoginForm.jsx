import React from 'react';
import Modal from '../Modal/Modal';
const LoginForm = ({ handleOnClose, isModalActive }) => {
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			{/* <form>
				<div>
					<label>User</label>
					<input tepe='text' />
				</div>
				<div>
					<label>Password</label>
					<input tepe='password' />
				</div>
			</form> */}
			<p>hdgfhdjk</p>
		</Modal>
	);
};

export default LoginForm;
