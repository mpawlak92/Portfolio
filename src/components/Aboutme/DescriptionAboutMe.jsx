import React from 'react';

import './DescriptionAboutMe.scss';
const DescriptionAboutMe = ({ data, isUserLogeed }) => {
	return (
		<>
			<div className='my-descryption'>
				{data}
				{isUserLogeed === true && (
					<button className='my-descryption__edit-btn'>Edytuj</button>
				)}
			</div>
		</>
	);
};

export default DescriptionAboutMe;
