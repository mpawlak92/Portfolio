import React, { useState } from 'react';

import HamburgerBtn from '../components/HamburgerMenu/Hamburger_button';
import HamburgerMenuPanel from '../components/HamburgerMenu/Hamburger_menu_panel';

import '../sass/Menu.scss';

const Menu = () => {
	const [menuIsActive, setMenuIsActive] = useState(false);

	const handleBtnClick = (e) => {
		setMenuIsActive(!menuIsActive);
	};
	return (
		<>
			<HamburgerBtn click={handleBtnClick} />
			<HamburgerMenuPanel click={handleBtnClick} menuIsActive={menuIsActive} />
		</>
	);
};

export default Menu;
