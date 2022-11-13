import React from 'react';

import { aboutme } from '../../data/aboutme';
import '../../sass/Description_aboutme.scss';
const DescriptionAboutMe = () => {
	return (
		<>
			<div className='my-descryption'>{aboutme.description}</div>
		</>
	);
};

export default DescriptionAboutMe;
