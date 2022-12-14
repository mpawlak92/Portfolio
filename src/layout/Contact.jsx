import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	contactDataFetchStatus,
	contactDataFetchError,
	fetchContactData,
} from '../components/Contact/ContactSlice';

import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Loading from '../components/Loading/Loading';

import './Contact.scss';
const Contact = () => {
	const dispatch = useDispatch();
	const isLoged = useSelector((state) => state.login.isUserLogeed);
	const fetchStatus = useSelector(contactDataFetchStatus);
	const fetchError = useSelector(contactDataFetchError);

	useEffect(() => {
		if (fetchStatus === 'idle') {
			dispatch(fetchContactData());
		}
	}, [fetchStatus, dispatch]);
	
	
	if (fetchStatus === 'loading') {
		return <Loading />;
	} else if (fetchStatus === 'succeeded') {
		return (
			<div className='contact'>
				<ContactInfo isUserLogeed={isLoged} />
				<ContactForm />
			</div>
		);
	} else if (fetchStatus === 'failed') {
		return <p>{fetchError}</p>;
	}
};

export default Contact;
