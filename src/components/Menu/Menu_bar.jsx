import React from 'react';
import { useSelector } from 'react-redux';

import '../../sass/Menu_bar.scss';
const MenuBar = ({ site, click }) => {
	const isloged = useSelector((state) => state.login.isUserLogeed);

	let btnStyle;
	if (site === 'menu') {
		btnStyle = 'hamburger';
	} else {
		btnStyle = 'hamburger-close';
	}

	return (
		<div className='menu-bar'>
			{isloged ? <div className='menu-bar__avatar'></div> : null}
			<button className={btnStyle} onClick={click}></button>;
		</div>
	);
};

export default MenuBar;
