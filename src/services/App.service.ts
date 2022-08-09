import { message } from 'antd';
import axios, { AxiosPromise } from 'axios';
const baseUrl = `https://sarwar-webrtc.herokuapp.com/api/`;
axios.interceptors.response.use(
	(response) => response?.data,
	(error) => {
		const msg = error?.response?.data?.message ?? error.message;
		message.error(msg);
		return Promise.reject(msg);
	}
);
export function post(endpoint, data, headers = {}): AxiosPromise {
	const options = {
		url: baseUrl + endpoint,
		method: 'POST',
		data: data,
		headers: {
			...headers,
			Authorization: `Bearer ${''}`,
		},
	};
	return axios(options);
}

export function get(endpoint, headers = {}): AxiosPromise {
	const options = {
		url: baseUrl + endpoint,
		method: 'GET',
		headers: {
			...headers,
			Authorization: `Bearer ${''}`,
		},
	};
	return axios(options);
}
