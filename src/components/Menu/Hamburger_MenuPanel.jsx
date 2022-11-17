import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import MenuBar from './Menu_bar';

import { aboutme } from '../../data/aboutme';
import '../../sass/Hamburger_menuPanel.scss';
import LoginForm from '../LoginForm/LoginForm';
import { useState } from 'react';

const HamburgerMenuPanel = ({ menuIsActive, click }) => {
	const [isModalActive, setIsModalActive] = useState(false);

	const handleLoginBtn = () => {
		click();
		setIsModalActive(true);
	};
	const handleLoginModalClose = () => {
		setIsModalActive(false);
	};
	const handleGitLink = () => {
		click();
		window.open(aboutme.github_link);
	};
	let classToggle = menuIsActive
		? 'hamburger-panel hamburger-panel__isactive'
		: 'hamburger-panel';

	const location = useLocation();
	return (
		<>
			<div className={classToggle}>
				<MenuBar
					click={click}
					menuIsActive={menuIsActive}
					site={'menu_panel'}
				/>
				<div className='hamburger-panel__menu'>
					<Link to='/' className='hamburger-panel__link' onClick={click}>
						About me
					</Link>
					<Link
						to='/projects'
						className='hamburger-panel__link'
						onClick={click}>
						Portfolio
					</Link>
					<Link to='/contact' className='hamburger-panel__link' onClick={click}>
						Contact
					</Link>
					<Link
						to={location.pathname}
						className='hamburger-panel__link'
						onClick={handleGitLink}>
						<div className='git-ico'></div> GitHub
					</Link>
					<Link
						to={location.pathname}
						className='hamburger-panel__link'
						onClick={handleLoginBtn}>
						Login
					</Link>
					<LoginForm
						isModalActive={isModalActive}
						handleOnClose={handleLoginModalClose}
					/>
				</div>
			</div>
		</>
	);
};

export default HamburgerMenuPanel;
