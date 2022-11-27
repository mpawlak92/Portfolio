import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Cv from '../components/Aboutme/Cv';
import DescriptionAboutMe from '../components/Aboutme/DescriptionAboutMe';
import Loading from '../components/Loading/Loading';
import Skills from '../components/Aboutme/SkillsAboutMe';
import request from '../helpers/request';

import './AboutMe.scss';

const Home = () => {
	const isLoged = useSelector((state) => state.login.isUserLogeed);

	const [aboutmeData, setAboutmeData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchDataAboutme = async () => {
		const { data } = await request.get('/aboutme');
		setAboutmeData(data);
		setIsLoading(false);
	};
	useEffect(() => {
		fetchDataAboutme();
	}, []);

	if (isLoading) return <Loading />;

	return (
		<div className='about-me'>
			<DescriptionAboutMe
				data={aboutmeData.description}
				isUserLogeed={isLoged}
			/>
			<Cv data={aboutmeData.cv_link} isUserLogeed={isLoged} />
			<Skills data={aboutmeData.skills} sUserLogeed={isLoged} />
		</div>
	);
};

export default Home;
