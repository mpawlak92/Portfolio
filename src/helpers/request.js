import axios from 'axios';

const request = axios.create({
	// baseURL: 'http://localhost:8000/',
	baseURL: 'https://apiportfolio-lclh.onrender.com/',
});

export default request;
