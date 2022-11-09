import React from 'react';

import ContactForm from '../components/ContactForm_contact';
import ContactInfo from '../components/Info_contact';

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
