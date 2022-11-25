import React from 'react';

import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

import './Contact.scss';
const Contact = () => {
	return (
		<div className='contact'>
			<ContactInfo />
			<ContactForm />
		</div>
	);
};

export default Contact;
