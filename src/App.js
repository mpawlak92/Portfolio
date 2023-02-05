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

export const ThemeContext = createContext(null);
const App = () => {
	const cookies = new Cookies();
	const [theme, setTheme] = useState('light');
	const dispatch = useDispatch();

	const readCookies = () => {
		const user = cookies.get('isUserLogeed');
		if (user) {
			dispatch(login());
		}
	};
	const themeToogle = () => {
		setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
	};
	useEffect(() => {
		readCookies();
	});
	return (
		<ThemeContext.Provider value={{ theme, setTheme, themeToogle }}>
			<div id={theme}>
				<Menu />
				<Routes>
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
