import React from 'react';
import spinner from '../../icons/Spinner.gif';
import './Loading.scss';
const Loading = () => {
	return (
		<div className='loading'>
			<img src={spinner} alt='' />
			<h1>Loading...</h1>
			<h2>
				Please be patient, it can takes about 30-40 secunds becouse for now i am
				using free hosting for my API. Thanks :)
			</h2>
		</div>
	);
};

export default Loading;
