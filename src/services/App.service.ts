import axios, { AxiosPromise } from 'axios';
const baseUrl = `https://sarwar-webrtc.herokuapp.com/api/`;
axios.interceptors.response.use(
	(response) => response?.data,
	(error) => Promise.reject(error?.response?.data?.message ?? 'Error')
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
