import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import MenuBar from './Menu_bar_mobile';
import AboutMe from '../../layout/AboutMe';
import Contact from '../../layout/Contact';
import Projects from '../../layout/Projects';

import '../../sass/Hamburger_menu_panel.scss';

const HamburgerMenuPanel = ({ menuIsActive, click }) => {
	let classToggle = menuIsActive
		? 'hamburger-panel hamburger-panel__isactive'
		: 'hamburger-panel';
	return (
		<>
			<div className={classToggle}>
				<MenuBar />
				<button className='hamburger-panel__close' onClick={click}></button>
				<div className='hamburger-panel__menu'>
					<Link to='/' onClick={click}>
						About me
					</Link>
					<Link to='/projects' onClick={click}>
						Portfolio
					</Link>
					<Link to='/contact' onClick={click}>
						Contact
					</Link>
					<a
						className='hamburger-panel__github-link'
						href='https://github.com/mpawlak92?tab=repositories'
						target='_blank'
						rel='noopener noreferrer'
						onClick={click}>
						Git
					</a>
				</div>
			</div>
			<Routes>
				<Route path='/' element={<AboutMe />}></Route>
				<Route path='projects' element={<Projects />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</>
	);
};

export default HamburgerMenuPanel;
