import React from 'react';
import './PhotoAboutMe.scss';
import myphoto from '../../img/me.jpg';
const PhotoAboutme = () => {
	return (
		<div className='my-photo'>
			<img
				src={myphoto}
				alt='My photography, I an  stanging in front of camera with hand im my pocket. I wear a black longsleeve and denim pants. '
			/>
		</div>
	);
};

export default PhotoAboutme;
