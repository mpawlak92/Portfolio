import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './layout/Menu';
import AboutMe from './layout/AboutMe';
import Projects from './layout/Projects';
import Contact from './layout/Contact';
import './sass/App.scss';

const App = () => {
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
