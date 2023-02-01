import React, { useState } from 'react';

import './DescriptionAboutMe.scss';
import DescriptionAboutMeEdifForm from './DescriptionAboutMeEdifForm';

const DescriptionAboutMe = ({ data, isUserLogeed }) => {
	const [isModalActive, setIsModalActive] = useState(false);

	const handleEditBtn = () => {
		setIsModalActive(true);
	};
	const handleOnModalClose = (e) => {
		e.preventDefault();
		setIsModalActive(false);
	};

	return (
		<>
			<div className='my-descryption'>
				{data}
				{isUserLogeed === true && (
					<button className='my-descryption__edit-btn' onClick={handleEditBtn}>
						Edit
					</button>
				)}
			</div>
			<DescriptionAboutMeEdifForm
				isModalActive={isModalActive}
				handleOnClose={handleOnModalClose}
			/>
		</>
	);
};

export default DescriptionAboutMe;
