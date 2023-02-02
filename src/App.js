import React from 'react';
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

const App = () => {
	const cookies = new Cookies();
	const dispatch = useDispatch();

	const readCookies = () => {
		const user = cookies.get('isUserLogeed');
		if (user) {
			dispatch(login());
		}
	};
	useEffect(() => {
		readCookies();
	});
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<AboutMe />}></Route>
				<Route path='/projects' element={<Projects />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</>
	);
};

export default App;
