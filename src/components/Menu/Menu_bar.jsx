import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DesctopMenu from './Desctop_menu';

import './Menu_bar.scss';
const MenuBar = ({ click, site }) => {
	const isloged = useSelector((state) => state.login.isUserLogeed);

	const style = {
		flexDirection: !isloged ? 'row-reverse' : 'row',
	};
	let btnStyle;
	if (site === 'menu') {
		btnStyle = 'hamburger';
	} else {
		btnStyle = 'hamburger-close';
	}
	const [windowSize, setWindowSize] = useState(getWindowSize());

	function getWindowSize() {
		const { innerWidth } = window;
		return { innerWidth };
	}

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<div style={style} className='menu-bar'>
			{isloged ? <div className='menu-bar__avatar'></div> : null}
			{windowSize.innerWidth < 800 ? (
				<div className={btnStyle} onClick={click}></div>
			) : null}
			{windowSize.innerWidth >= 800 ? <DesctopMenu /> : null}
		</div>
	);
};

export default MenuBar;
