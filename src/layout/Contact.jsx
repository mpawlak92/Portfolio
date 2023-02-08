import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	contactDataFetchStatus,
	contactDataFetchError,
	fetchContactData,
} from '../components/Contact/ContactSlice';

import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import GoogleMap from '../components/Contact/GoogleMap';
import Loading from '../components/Loading/Loading';

import './Contact.scss';
import ApiConnectionErrorPage from '../components/ApiConnectionErrorPage/ApiConnectionErrorPage';
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
				<GoogleMap />
				<ContactInfo isUserLogeed={isLoged} />
				<ContactForm />
			</div>
		);
	} else if (fetchStatus === 'failed') {
		return <ApiConnectionErrorPage message={fetchError} />;
	}
};

export default Contact;
