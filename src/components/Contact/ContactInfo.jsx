import React from 'react';

import './ContactInfo.scss';
const ContactInfo = ({ phone, mail, linkedin, isUserLogeed }) => {
	return (
		<div className='contact-info'>
			<h3 className='contact-info__head'>Contact info:</h3>
			<ul>
				<li>
					<div className='contact-info__tel-ico'></div>
					<p>
						{phone.slice(0, 3) +
							'-' +
							phone.slice(3, 6) +
							'-' +
							phone.slice(6, 9)}
					</p>
				</li>
				<li>
					<div className='contact-info__mail-ico'></div>
					<p>{mail}</p>
				</li>
				<li>
					<a href={linkedin} target='_blank' rel='noopener noreferrer'>
						<div className='contact-info__linkedin-ico'></div>
						<p>Linkedin</p>
					</a>
				</li>
			</ul>
			{isUserLogeed === true && (
				<button className='contact-info__edit-btn'>Edytuj</button>
			)}
		</div>
	);
};

export default ContactInfo;
