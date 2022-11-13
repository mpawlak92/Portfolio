import React from 'react';

import { aboutme } from '../../data/aboutme';
import '../../sass/Cv.scss';
const Cv = () => {
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
			</div>
		</>
	);
};

export default Cv;
