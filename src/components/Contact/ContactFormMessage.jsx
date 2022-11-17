import React from 'react';

import Modal from '../Modal/Modal';
import './ContactFormMessage.scss';

const ContactFormMsg = ({ msg, handleOnClose, isModalActive }) => {
	return (
		<Modal
			handleOnClose={handleOnClose}
			isOpen={isModalActive}
			shoulbBeCloseOnOutsideClick={true}>
			<div className='msg-close' onClick={handleOnClose}></div>
			<div className='msg'>
				<p className='msg__text'>{msg}</p>
			</div>
		</Modal>
	);
};

export default ContactFormMsg;
