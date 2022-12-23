import axios from 'axios';

const request = axios.create({
	// baseURL: 'http://localhost:8000/',
	baseURL: 'https://fast-dawn-69451.herokuapp.com/',
});

export default request;
