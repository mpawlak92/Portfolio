import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../LoginForm/LoginSlice';
// import { aboutmeData } from '../Aboutme/AboutMeSlice';
import Cookies from 'universal-cookie';
import LoginForm from '../LoginForm/LoginForm';
import './Desctop_menu.scss';

const DesctopMenu = ({ click }) => {
	const cookies = new Cookies();
	const isLogged = useSelector((state) => state.login.isUserLogeed);
	// const data = useSelector(aboutmeData);
	const dispatch = useDispatch();

	const [isModalActive, setIsModalActive] = useState(false);

	const handleLoginBtn = () => {
		if (isLogged) {
			cookies.remove('isUserLogeed');
			dispatch(logout());
		} else {
			setIsModalActive(true);
		}
	};
	const handleLoginModalClose = () => {
		setIsModalActive(false);
	};
	// const handleGitLink = () => {
	// 	window.open(data.github_link);
	// };

	const location = useLocation();
	return (
		<>
			<div className='desctop_menu'>
				<NavLink
					to='/Portfolio'
					className={({ isActive }) =>
						isActive ? 'desctop_menu__link--active' : 'desctop_menu__link'
					}
					onClick={click}>
					About me
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) =>
						isActive ? 'desctop_menu__link--active' : 'desctop_menu__link'
					}
					onClick={click}>
					Portfolio
				</NavLink>
				<NavLink
					to='/contact'
					className={({ isActive }) =>
						isActive ? 'desctop_menu__link--active' : 'desctop_menu__link'
					}
					onClick={click}>
					Contact
				</NavLink>

				{/* <Link
					to={location.pathname}
					className='desctop_menu__link'
					onClick={handleGitLink}>
					<span className='git-ico'></span> GitHub
				</Link> */}

				<NavLink
					to={location.pathname}
					className='desctop_menu__link'
					onClick={handleLoginBtn}>
					{isLogged ? 'Logout' : 'Login'}
				</NavLink>
				<LoginForm
					isModalActive={isModalActive}
					handleOnClose={handleLoginModalClose}
				/>
			</div>
		</>
	);
};

export default DesctopMenu;
