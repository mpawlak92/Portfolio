import React from 'react';

import '../sass/Info_contact.scss';
const ContactInfo = () => {
	return (
		<div className='contact-info'>
			<h3 className='contact-info__head'>Contact info:</h3>
			<ul>
				<li>
					<div className='contact-info__tel-ico'></div> <p>726-630-790</p>
				</li>
				<li>
					<div className='contact-info__mail-ico'></div>
					<p>mpawlak.it@gmail.com</p>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/mpawlak92/'
						target='_blank'
						rel='noopener noreferrer'>
						<div className='contact-info__linkedin-ico'></div>
						<p>Linkedin</p>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ContactInfo;
