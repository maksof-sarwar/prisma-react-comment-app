import AuthController from '@/app/controller/auth';
import { errorHelper } from '@/app/helpers/apiError';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
const authController = new AuthController();
const authRoutes = (
	fastify: FastifyInstance,
	option: FastifyServerOptions,
	next: Function
) => {
	fastify.route({
		method: 'POST',
		url: '/sign-up',
		handler: authController.signUp(),
	});
	next();
};

export default authRoutes;
