import React from 'react';
import { useSelector } from 'react-redux';

import { aboutme } from '../../data/aboutme';
import './DescriptionAboutMe.scss';
const DescriptionAboutMe = () => {
	const isloged = useSelector((state) => state.login.isUserLogeed);
	return (
		<>
			<div className='my-descryption'>{aboutme.description}</div>
			{isloged === true && <button>Edytuj</button>}
		</>
	);
};

export default DescriptionAboutMe;
