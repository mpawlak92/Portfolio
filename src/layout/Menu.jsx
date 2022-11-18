import React, { useState } from 'react';

import HamburgerMenuPanel from '../components/Menu/Hamburger_MenuPanel';
import MenuBar from '../components/Menu/Menu_bar';

const Menu = () => {
	const [menuIsActive, setMenuIsActive] = useState(false);

	const handleBtnClick = () => {
		setMenuIsActive(!menuIsActive);
	};
	return (
		<>
			<MenuBar
				click={handleBtnClick}
				menuIsActive={menuIsActive}
				site={'menu'}
			/>
			<HamburgerMenuPanel click={handleBtnClick} menuIsActive={menuIsActive} />
		</>
	);
};

export default Menu;
