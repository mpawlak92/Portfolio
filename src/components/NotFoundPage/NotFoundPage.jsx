import React from 'react';
import './NotFoundPage.scss';
import pagenotfound from '../../icons/404.svg';
const NotFoundPage = () => {
	return (
		<div className='Not-found-page'>
			<img
				src={pagenotfound}
				alt='blue robot with 404 error above head'
				className='Not-found-page__img'
			/>
			<h1 className='Not-found-page__message'>Page not found</h1>
		</div>
	);
};

export default NotFoundPage;
