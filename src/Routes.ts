import { IRoute } from './models/route.model';
import { lazy } from 'react';
const route: IRoute[] = [
	{
		path: '/',
		component: lazy(() => import('./pages/Dashboard')),
		data: { private: true },
		name: 'dashboard',
	},
	{
		path: '/verify-token/:remember/:token',
		component: lazy(() => import('./pages/VerifyToken')),
		data: null,
		name: 'verify-token',
	},
	{
		path: '/auth',
		component: lazy(() => import('./pages/Auth')),
		data: { private: false },
		name: 'auth',
		children: [
			{
				path: 'sign-in',
				component: lazy(() => import('./components/Auth/SignIn/SignIn')),
				data: null,
				name: 'sign-in',
			},
			{
				path: 'sign-up',
				component: lazy(() => import('./components/Auth/SignUp/SignUp')),
				data: null,
				name: 'sign-up',
			},
			{
				path: '',
				component: null,
				data: { to: '/auth/sign-in' },
				name: 'redirect to sign-in',
			},
		],
	},
	{
		path: '*',
		component: null,
		data: { to: '/' },
		name: 'redirect to landing-page',
	},
];

export default route;
