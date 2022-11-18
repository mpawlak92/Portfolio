import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../LoginForm/LoginSlice';

import MenuBar from './Menu_bar';
import LoginForm from '../LoginForm/LoginForm';

import { aboutme } from '../../data/aboutme';
import './Hamburger_menuPanel.scss';

const HamburgerMenuPanel = ({ menuIsActive, click }) => {
	const [isModalActive, setIsModalActive] = useState(false);

	const isloged = useSelector((state) => state.login.isUserLogeed);
	const dispatch = useDispatch();

	const handleLoginBtn = () => {
		if (isloged) {
			dispatch(logout());
			click();
		} else {
			click();
			setIsModalActive(true);
		}
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
						<span className='git-ico'></span> GitHub
					</Link>
					<Link
						to={location.pathname}
						className='hamburger-panel__link'
						onClick={handleLoginBtn}>
						{isloged ? 'Logout' : 'Login'}
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
