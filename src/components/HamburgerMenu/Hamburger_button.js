import React from 'react';

import '../../sass/Hamburger_button.scss';
import MenuBar from './Menu_bar_mobile';

const HamburgerBtn = ({ click }) => {
	return (
		<>
			<MenuBar />
			<button className='hamburger' onClick={click}></button>
		</>
	);
};

export default HamburgerBtn;
