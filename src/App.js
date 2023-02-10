import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './layout/Menu';
import AboutMe from './layout/AboutMe';
import Projects from './layout/Projects';
import Contact from './layout/Contact';
import './sass/App.scss';

import { useDispatch } from 'react-redux';
import { login } from './components/LoginForm/LoginSlice';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import { createContext } from 'react';
import FixedIcons from './components/FixedIcons/FixedIcons';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

export const ThemeContext = createContext(null);
const App = () => {
	const cookies = new Cookies();
	const [theme, setTheme] = useState('light');
	const dispatch = useDispatch();

	const readCookies = () => {
		const user = cookies.get('isUserLogeed');
		const themeCookies = cookies.get('dark-light-mode');
		if (user) {
			dispatch(login());
		}
		if (themeCookies) {
			setTheme(themeCookies);
		}
	};
	const themeToogle = () => {
		setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
		const themeCookies = cookies.get('dark-light-mode');
		let newTheme;
		if (theme === 'light') {
			newTheme = 'dark';
		} else {
			newTheme = 'light';
		}

		if (themeCookies) {
			cookies.remove('dark-light-mode');
			cookies.set('dark-light-mode', newTheme, {
				maxAge: 86400,
				SameSite: 'Strict',
			});
		} else {
			cookies.set('dark-light-mode', newTheme, {
				maxAge: 86400,
				SameSite: 'Strict',
			});
		}
	};
	useEffect(() => {
		readCookies();
	});
	return (
		<ThemeContext.Provider value={{ theme, setTheme, themeToogle }}>
			<div id={theme}>
				<Menu />
				<Routes>
					<Route path='*' element={<NotFoundPage />} />
					<Route path='/' element={<AboutMe />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
				</Routes>
				<FixedIcons />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
