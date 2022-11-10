import React from 'react';

import '../sass/ContactFormPopUp_contact.scss';

const ContactFormPopUp = ({ message, click }) => {
	return (
		<div className='popup'>
			<div className='popup__close' onClick={click}></div>
			<p className='popup__text'>{message}</p>
		</div>
	);
};

export default ContactFormPopUp;
