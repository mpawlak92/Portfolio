import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Loading from '../components/Loading/Loading';
import request from '../helpers/request';

import './Contact.scss';
const Contact = () => {
	const isLoged = useSelector((state) => state.login.isUserLogeed);

	const [contactData, setContactData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const { data } = await request.get('/aboutme');
		setContactData(data);
		setIsLoading(false);
	};
	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) return <Loading />;
	return (
		<div className='contact'>
			<ContactInfo
				phone={contactData.phone}
				mail={contactData.email}
				linkedin={contactData.linkedin_link}
				isUserLogeed={isLoged}
			/>
			<ContactForm />
		</div>
	);
};

export default Contact;
