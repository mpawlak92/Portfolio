import React from 'react';

import './DescriptionAboutMe.scss';
const DescriptionAboutMe = ({ data, isUserLogeed }) => {
	return (
		<>
			<div className='my-descryption'>{data}</div>
			{isUserLogeed === true && <button>Edytuj</button>}
		</>
	);
};

export default DescriptionAboutMe;
