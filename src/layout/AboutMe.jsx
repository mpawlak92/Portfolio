import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	aboutmeData,
	aboutmeDataFetchStatus,
	aboutmeDataFetchError,
	fetchAboutMeData,
} from '../components/Aboutme/AboutMeSlice';

import Cv from '../components/Aboutme/Cv';
import DescriptionAboutMe from '../components/Aboutme/DescriptionAboutMe';
import Loading from '../components/Loading/Loading';
import Skills from '../components/Aboutme/SkillsAboutMe';

import './AboutMe.scss';

const Home = () => {
	const dispatch = useDispatch();

	const isLoged = useSelector((state) => state.login.isUserLogeed);
	const fetchedData = useSelector(aboutmeData);
	const fetchStatus = useSelector(aboutmeDataFetchStatus);
	const fetchError = useSelector(aboutmeDataFetchError);

	useEffect(() => {
		if (fetchStatus === 'idle') {
			dispatch(fetchAboutMeData());
		}
	}, [fetchStatus, dispatch]);
	
	if (fetchStatus === 'loading') {
		return <Loading />;
	} else if (fetchStatus === 'succeeded') {
		return (
			<div className='about-me'>
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
