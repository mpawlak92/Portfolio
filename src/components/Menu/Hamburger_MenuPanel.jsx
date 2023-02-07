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
import FixedIcons from '../FixedIcons/FixedIcons';

const HamburgerMenuPanel = ({ click, menuIsActive }) => {
	const cookies = new Cookies();
	const isLogged = useSelector((state) => state.login.isUserLogeed);
	const dispatch = useDispatch();
	const { theme, themeToogle } = useContext(ThemeContext);
	const [isModalActive, setIsModalActive] = useState(false);

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
						onClick={handleLoginBtn}>
						{isLogged ? 'Logout' : 'Login'}
					</Link>
					<div className='brightnes-mode'>
						<label>{theme === 'light' ? 'Light mode' : 'Dark mode'}</label>
						<ReactSwitch onChange={themeToogle} checked={theme === 'light'} />
					</div>
					<FixedIcons />

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
