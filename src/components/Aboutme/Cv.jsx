import React from 'react';

import './Cv.scss';
const Cv = ({ data, isUserLogeed }) => {
	return (
		<>
			<div className='cv'>
				<a
					className='cv__link'
					href={data}
					target='_blank'
					rel='noopener noreferrer'>
					<div className='cv__download-icon'></div>
					Show CV
				</a>
				{isUserLogeed === true && (
					<button className='cv__edit-btn'>Zmień</button>
				)}
			</div>
		</>
	);
};

export default Cv;
