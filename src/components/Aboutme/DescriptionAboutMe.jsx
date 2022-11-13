import React from 'react';

import { auboutme } from '../../data/aboutme';
import '../../sass/Description_aboutme.scss';
const DescriptionAboutMe = () => {
	return (
		<>
			<div className='my-descryption'>{auboutme.description}</div>
		</>
	);
};

export default DescriptionAboutMe;
