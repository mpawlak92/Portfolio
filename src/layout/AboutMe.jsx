import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	aboutmeData,
	aboutmeDataFetchStatus,
	aboutmeDataFetchError,
	fetchAboutMeData,
	editAboutmeDataMessageReset,
	serverResponseMessage,
} from '../components/Aboutme/AboutMeSlice';

import Cv from '../components/Aboutme/Cv';
import DescriptionAboutMe from '../components/Aboutme/DescriptionAboutMe';
import NameBoxAboutme from '../components/Aboutme/NameBoxAboutMe';
import Loading from '../components/Loading/Loading';
import Skills from '../components/Aboutme/SkillsAboutMe';
import PhotoAboutme from '../components/Aboutme/PhotoAboutMe';
import EditMsgAboutMe from '../components/Aboutme/EditMsgAboutMe';

import './AboutMe.scss';

const Home = () => {
	const dispatch = useDispatch();

	const isLoged = useSelector((state) => state.login.isUserLogeed);
	const fetchedData = useSelector(aboutmeData);
	const fetchStatus = useSelector(aboutmeDataFetchStatus);
	const fetchError = useSelector(aboutmeDataFetchError);
	const aboutMeEditMessage = useSelector(serverResponseMessage);

	useEffect(() => {
		if (fetchStatus === 'idle') {
			dispatch(fetchAboutMeData());
		}
	}, [fetchStatus, dispatch]);

	const dishapiredMessage = () => {
		if (aboutMeEditMessage) {
			setTimeout(() => {
				dispatch(editAboutmeDataMessageReset());
			}, 3000);
		}
	};
	dishapiredMessage();
	if (fetchStatus === 'loading') {
		return <Loading />;
	} else if (fetchStatus === 'succeeded') {
		return (
			<div className='about-me'>
				<EditMsgAboutMe message={aboutMeEditMessage}></EditMsgAboutMe>
				<PhotoAboutme />
				<NameBoxAboutme />
				<DescriptionAboutMe
					data={fetchedData.description}
					isUserLogeed={isLoged}
				/>
				<Cv data={fetchedData.cv_link} isUserLogeed={isLoged} />
				<Skills data={fetchedData.skills} sUserLogeed={isLoged} />
			</div>
		);
	} else if (fetchStatus === 'failed') {
		return <p>{fetchError}</p>;
	}
};

export default Home;
