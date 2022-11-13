import React from 'react';
import { Link } from 'react-router-dom';

import MenuBar from './Menu_Bar';

import { auboutme } from '../../data/aboutme';
import '../../sass/Mobile_menu_panel.scss';

const HamburgerMenuPanel = ({ menuIsActive, click }) => {
	const handleGitLink = () => {
		window.open(auboutme.github_link);
		click();
	};
	let classToggle = menuIsActive
		? 'hamburger-panel hamburger-panel__isactive'
		: 'hamburger-panel';
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

					{/* i am using hear button becouse 'a' mark generate some problems with menu bar component still i dont know what it happend... */}
					<button
						className='hamburger-panel__github-link'
						onClick={handleGitLink}>
						<div className='git-ico'></div> GitHub
					</button>
					{/* <a
							onClick={click}
							className='hamburger-panel__github-link'
							href='https://github.com/mpawlak92?tab=repositories'
							target='_blank'
							rel='noopener noreferrer'>
							Git
						</a> */}
				</div>
			</div>
		</>
	);
};

export default HamburgerMenuPanel;
