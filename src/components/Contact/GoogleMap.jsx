import React from 'react';
import './GoogleMap.scss';
const GoogleMap = () => {
	return (
		<div className='google-map'>
			<iframe
				title='google-map'
				width='600'
				height='400'
				id='gmap_canvas'
				src='https://maps.google.com/maps?q=Galeria%20D%C4%99biec,%20Pozna%C5%84&t=&z=13&ie=UTF8&iwloc=&output=embed'></iframe>
		</div>
	);
};

export default GoogleMap;
