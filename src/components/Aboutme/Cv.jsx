import React, { useState } from 'react';

import './Cv.scss';
import CvForm from './CvForm';
const Cv = ({ data, isUserLogeed }) => {
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
			<div className='cv'>
				<a
					className='cv__link'
					href={data}
					target='_blank'
					rel='noopener noreferrer'>
					<div className='cv__download-icon'></div>
					Show CV
				</a>
				{isUserLogeed === true && (
					<button className='cv__edit-btn' onClick={handleEditBtn}>
						Edit
					</button>
				)}
				<CvForm
					isModalActive={isModalActive}
					handleOnClose={handleOnModalClose}
				/>
			</div>
		</>
	);
};

export default Cv;
