import React from 'react';
import { useSelector } from 'react-redux';

import { aboutme } from '../../data/aboutme';
import './Cv.scss';
const Cv = () => {
	const isloged = useSelector((state) => state.login.isUserLogeed);

	return (
		<>
			<div className='cv'>
				<a
					className='cv__link'
					href={aboutme.cv_link}
					target='_blank'
					rel='noopener noreferrer'>
					<div className='cv__download-icon'></div>
					Show CV
				</a>
				{isloged === true && <button>Zmień</button>}
			</div>
		</>
	);
};

export default Cv;
