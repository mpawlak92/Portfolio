import React from 'react';

import '../sass/Cv.scss';
const Cv = () => {
	return (
		<>
			<div className='cv'>
				<a
					className='cv__link'
					href='https://drive.google.com/file/d/1Mn99u5BkpHCvdJaI3LrLFVNVaoZBcbdr/view?usp=share_link'
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
