import React from 'react';

import '../../sass/Menu_bar.scss';
const MenuBar = ({ site, click }) => {
	let btnStyle;
	if (site === 'menu') {
		btnStyle = 'hamburger';
	} else {
		btnStyle = 'hamburger-close';
	}

	return (
		<div className='menu-bar'>
			<div className='menu-bar__logo'></div>
			<button className={btnStyle} onClick={click}></button>;
		</div>
	);
};

export default MenuBar;
