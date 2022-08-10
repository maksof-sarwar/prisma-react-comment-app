import AuthController from '@/app/controller/auth';
import { errorHelper } from '@/app/helpers/apiError';
import {
	getProfileSchema,
	signInSchema,
	signUpSchema,
} from '@/app/schema/auth';

import { FastifyInstance, FastifyServerOptions } from 'fastify';

const authRoutes = (
	fastify: FastifyInstance,
	option: FastifyServerOptions,
	next: Function
) => {
	const authController = new AuthController();
	fastify.route({
		method: 'POST',
		url: '/sign-up',
		schema: signUpSchema,
		handler: errorHelper(authController.signUp()),
	});
	fastify.route({
		method: 'POST',
		url: '/sign-in',
		schema: signInSchema,
		handler: errorHelper(authController.signIn()),
	});
	fastify.route({
		method: 'GET',
		url: '/get-profile/:token',
		schema: getProfileSchema,
		handler: errorHelper(authController.getProfile()),
	});
	next();
};

export default authRoutes;
