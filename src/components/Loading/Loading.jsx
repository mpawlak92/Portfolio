import React from 'react';
import spinner from '../../icons/Spinner.gif';
import './Loading.scss';
const Loading = () => {
	return (
		<div className='loading'>
			<img src={spinner} alt='' />
			<h1>Loading...</h1>
		</div>
	);
};

export default Loading;
