import { getStorage } from '@/services/storage.service';
import { message } from 'antd';
import axios, { AxiosPromise } from 'axios';
const baseUrl = `https://sarwar-webrtc.herokuapp.com/api/`;
axios.interceptors.request.use((req) => {
	const AuthToken: string | null = getStorage('credential')?.token;
	if (AuthToken) {
		req.headers!['Authorization'] = `Bearer ${AuthToken}`;
	}
	return req;
});
axios.interceptors.response.use(
	(response) => response?.data,
	(error) => {
		if (error?.response?.status == 403) {
			window.location.href = '/auth';
		}
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
