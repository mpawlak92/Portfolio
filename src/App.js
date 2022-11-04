import React from 'react';

import Menu from './layout/Menu';
import Home from './layout/Home';
import Projects from './layout/Projects';
import Contact from './layout/Contact';

const App = () => {
	return (
		<>
			<Menu />
			<Home />
			<Projects />
			<Contact />
		</>
	);
};

export default App;
