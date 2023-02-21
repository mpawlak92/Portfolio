import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../App';
import ReactSwitch from 'react-switch';
import { aboutmeData } from '../Aboutme/AboutMeSlice';
import './FixedIcons.scss';
const FixedIcons = () => {
	const { theme, themeToogle } = useContext(ThemeContext);

	const fetchedata = useSelector(aboutmeData);

	return (
		<>
			<div className='fixed-icons fixed-icons__theme'>
				<ReactSwitch
					aria-label='It is brightnes-mode switcher'
					onChange={themeToogle}
					checked={theme === 'light'}
				/>
				<div className='theme-icon'></div>
			</div>
			<div className='fixed-icons fixed-icons__github'>
				<a
					href={fetchedata.github_link || 'https://github.com/mpawlak92'}
					target='_blank'
					rel='noreferrer'>
					<p>Github</p>
					<div className='github-icon'></div>
				</a>
			</div>
		</>
	);
};

export default FixedIcons;
