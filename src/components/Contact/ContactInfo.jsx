import React from 'react';
import { useSelector } from 'react-redux';

import { aboutme } from '../../data/aboutme';
import './ContactInfo.scss';
const ContactInfo = () => {
	const isloged = useSelector((state) => state.login.isUserLogeed);
	// import { useSelector } from 'react-redux';
	// 	const isloged = useSelector((state) => state.login.isUserLogeed);
	return (
		<div className='contact-info'>
			<h3 className='contact-info__head'>Contact info:</h3>
			<ul>
				<li>
					<div className='contact-info__tel-ico'></div>
					<p>{aboutme.phone}</p>
					{isloged === true && <button>Usuń</button>}
				</li>
				<li>
					<div className='contact-info__mail-ico'></div>
					<p>{aboutme.email}</p>
					{isloged === true && <button>Usuń</button>}
				</li>
				<li>
					<a
						href={aboutme.github_link}
						target='_blank'
						rel='noopener noreferrer'>
						<div className='contact-info__linkedin-ico'></div>
						<p>Linkedin</p>
					</a>
					{isloged === true && <button>Edytuj</button>}
				</li>
			</ul>
			{isloged === true && <button>Edytuj</button>}
		</div>
	);
};

export default ContactInfo;
