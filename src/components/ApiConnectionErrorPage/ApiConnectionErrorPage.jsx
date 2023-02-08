import React from 'react';
import errorIco from '../../icons/error-ico.png';
import './ApiConnectionErrorPage.scss';
const ApiConnectionErrorPage = ({ message }) => {
	return (
		<div className='ApiConnectionErrorPage'>
			<img src={errorIco} alt='' />
			<h1>{message}</h1>
			<h2>We can not realize your request.Try once more for feew minuts</h2>
		</div>
	);
};

export default ApiConnectionErrorPage;
