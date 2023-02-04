import React from 'react';
import './NameBoxAboutMe.scss';
import Typewriter from 'typewriter-effect';
const NameBoxAboutme = () => {
	return (
		<div className='my-name'>
			<h1 className='my-name__heading'>Hi, my name is Michał Pawlak</h1>
			<div className='my-name__typewriter'>
				<Typewriter
					options={{
						strings: ["I'm a Frontend developer"],
						pauseFor: 3000,
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
		</div>
	);
};

export default NameBoxAboutme;
