import React, { useState } from 'react';

import HamburgerMenuPanel from '../components/Menu/Hamburger_menu_panel';

import MenuBar from '../components/Menu/Menu_bar';
import '../sass/Menu.scss';

const Menu = () => {
	const [menuIsActive, setMenuIsActive] = useState(false);

	const handleBtnClick = (e) => {
		setMenuIsActive(!menuIsActive);
	};
	return (
		<>
			<MenuBar />
			<button className='hamburger' onClick={handleBtnClick}></button>;
			<HamburgerMenuPanel click={handleBtnClick} menuIsActive={menuIsActive} />
		</>
	);
};

export default Menu;
