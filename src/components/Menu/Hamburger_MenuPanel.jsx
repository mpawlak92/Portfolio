import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../LoginForm/LoginSlice';
import Cookies from 'universal-cookie';
import LoginForm from '../LoginForm/LoginForm';
import { ThemeContext } from '../../App';
import MenuBar from './Menu_bar';
import ReactSwitch from 'react-switch';
import './Hamburger_menuPanel.scss';

import { aboutmeData } from '../Aboutme/AboutMeSlice';

const HamburgerMenuPanel = ({ click, menuIsActive }) => {
	const cookies = new Cookies();
	const isLogged = useSelector((state) => state.login.isUserLogeed);
	const dispatch = useDispatch();
	const { theme, themeToogle } = useContext(ThemeContext);
	const [isModalActive, setIsModalActive] = useState(false);
	const fetchedata = useSelector(aboutmeData);

	const handleLoginBtn = () => {
		if (isLogged) {
			cookies.remove('isUserLogeed');
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
					<Link
						to='/Portfolio'
						className='hamburger-panel__link'
						onClick={click}>
						About me
					</Link>
					<Link
						to='/Portfolio/projects'
						className='hamburger-panel__link'
						onClick={click}>
						Portfolio
					</Link>
					<Link
						to='/Portfolio/contact'
						className='hamburger-panel__link'
						onClick={click}>
						Contact
					</Link>
					<Link
						to={location.pathname}
						className='hamburger-panel__link'
						onClick={handleLoginBtn}>
						{isLogged ? 'Logout' : 'Login'}
					</Link>
					<div className='brightnes-mode'>
						<label>{theme === 'light' ? 'Light mode' : 'Dark mode'}</label>
						<ReactSwitch
							aria-label='It is brightnes-mode switcher'
							onChange={themeToogle}
							checked={theme === 'light'}
						/>
					</div>
					<div className=' fixed-icons--mobile fixed-icons__github--mobile'>
						<a href={fetchedata.github_link} target='_blank' rel='noreferrer'>
							<p>Github</p>
							<div className='github-icon'></div>
						</a>
					</div>

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
