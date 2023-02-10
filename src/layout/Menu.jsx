import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	aboutmeData,
	aboutmeDataFetchStatus,
	// aboutmeDataFetchError,
	fetchAboutMeData,
} from '../components/Aboutme/AboutMeSlice';

// import Loading from '../components/Loading/Loading';
import HamburgerMenuPanel from '../components/Menu/Hamburger_MenuPanel';
import MenuBar from '../components/Menu/Menu_bar';

const Menu = () => {
	const [menuIsActive, setMenuIsActive] = useState(false);

	const dispatch = useDispatch();

	const fetchedData = useSelector(aboutmeData);
	const fetchStatus = useSelector(aboutmeDataFetchStatus);
	// const fetchError = useSelector(aboutmeDataFetchError);

	useEffect(() => {
		if (fetchStatus === 'idle') {
			dispatch(fetchAboutMeData());
		}
	}, [fetchStatus, dispatch]);

	const handleBtnClick = () => {
		setMenuIsActive(!menuIsActive);
	};

	if (fetchStatus === 'loading') {
		//dont render error because <Loading /> component is rendeing on each page what causes double rendering <Loading /> component
		return;
	} else if (fetchStatus === 'succeeded') {
		return (
			<>
				<MenuBar
					click={handleBtnClick}
					menuIsActive={menuIsActive}
					site={'menu'}
				/>
				<HamburgerMenuPanel
					click={handleBtnClick}
					menuIsActive={menuIsActive}
					data={fetchedData}
				/>
			</>
		);
	} else if (fetchStatus === 'failed') {
		//dont render error because this same error is rendeing on each page
		return;
	}
};

export default Menu;
