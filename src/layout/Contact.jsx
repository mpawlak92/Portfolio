import React from 'react';

import ContactForm from '../components/Contact/ContactFormPopUp_contact';
import ContactInfo from '../components/Contact/Info_contact';

import '../sass/Contact.scss';
const Contact = () => {
	return (
		<div className='contact'>
			<ContactInfo />
			<ContactForm />
		</div>
	);
};

export default Contact;
