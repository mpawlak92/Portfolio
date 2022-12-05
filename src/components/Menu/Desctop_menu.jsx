import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../LoginForm/LoginSlice';
import { aboutmeData } from '../Aboutme/AboutMeSlice';

import LoginForm from '../LoginForm/LoginForm';
import './Desctop_menu.scss';

const DesctopMenu = ({ click }) => {
	const isLogged = useSelector((state) => state.login.isUserLogeed);
	const data = useSelector(aboutmeData);
	const dispatch = useDispatch();

	const [isModalActive, setIsModalActive] = useState(false);

	const handleLoginBtn = () => {
		if (isLogged) {
			dispatch(logout());
		} else {
			setIsModalActive(true);
		}
	};
	const handleLoginModalClose = () => {
		setIsModalActive(false);
	};
	const handleGitLink = () => {
		window.open(data.github_link);
	};

	const location = useLocation();
	return (
		<>
			<div className='desctop_menu'>
				<Link to='/' className='desctop_menu__link' onClick={click}>
					About me
				</Link>
				<Link to='/projects' className='desctop_menu__link' onClick={click}>
					Portfolio
				</Link>
				<Link to='/contact' className='desctop_menu__link' onClick={click}>
					Contact
				</Link>

				<Link
					to={location.pathname}
					className='desctop_menu__link'
					onClick={handleGitLink}>
					<span className='git-ico'></span> GitHub
				</Link>

				<Link
					to={location.pathname}
					className='desctop_menu__link'
					onClick={handleLoginBtn}>
					{isLogged ? 'Logout' : 'Login'}
				</Link>
				<LoginForm
					isModalActive={isModalActive}
					handleOnClose={handleLoginModalClose}
				/>
			</div>
		</>
	);
};

export default DesctopMenu;
