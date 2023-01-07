import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { contactData, serverResponseMessage, reset } from './ContactSlice';
import './ContactInfo.scss';
import ContactInfoEditForm from './ContactInfoEditForm';

const ContactInfo = ({ isUserLogeed }) => {
	const dispatch = useDispatch();
	const contactInfo = useSelector(contactData);
	const contactInfoEditStatusMessage = useSelector(serverResponseMessage);

	const [isModalActive, setIsModalActive] = useState(false);

	const handleEditBtn = () => {
		setIsModalActive(true);
	};
	const handleOnModalClose = () => {
		setIsModalActive(false);
	};
	const dishapiredMessage = () => {
		if (contactInfoEditStatusMessage) {
			setTimeout(() => {
				dispatch(reset());
			}, 3000);
		}
	};
	dishapiredMessage();
	return (
		<div className='contact-info'>
			<h3 className='contact-info__head'>Contact info:</h3>
			<ul>
				<li>
					<div className='contact-info__tel-ico'></div>
					<p>
						{String(contactInfo.phone).slice(0, 3) +
							'-' +
							String(contactInfo.phone).slice(3, 6) +
							'-' +
							String(contactInfo.phone).slice(6, 9)}
					</p>
				</li>
				<li>
					<div className='contact-info__mail-ico'></div>
					<p>{contactInfo.email}</p>
				</li>
				<li>
					<a
						href={contactInfo.linkedin}
						target='_blank'
						rel='noopener noreferrer'>
						<div className='contact-info__linkedin-ico'></div>
						<p>Linkedin</p>
					</a>
				</li>
			</ul>
			{isUserLogeed === true && (
				<button className='contact-info__edit-btn' onClick={handleEditBtn}>
					Edytuj
				</button>
			)}
			{/* {contactInfoEditStatusMessage !== null && <div>'cos'</div>} */}
			<div className='contact-info__edit-message'>
				{contactInfoEditStatusMessage}
			</div>

			<ContactInfoEditForm
				isModalActive={isModalActive}
				handleOnClose={handleOnModalClose}
			/>
		</div>
	);
};

export default ContactInfo;
