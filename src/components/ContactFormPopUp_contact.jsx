import React from 'react';

import '../sass/ContactFormPopUp_contact.scss';

const ContactFormPopUp = ({ message }) => {
	return (
		<div className='popup'>
			console.log(message);
			<h2>{message}</h2>
		</div>
	);
};

export default ContactFormPopUp;
