import React from 'react';
import './PhotoAboutMe.scss';
import myphoto from '../../img/me.jpg';
const PhotoAboutme = () => {
	return (
		<div className='my-photo'>
			<img src={myphoto} alt='' />
		</div>
	);
};

export default PhotoAboutme;
