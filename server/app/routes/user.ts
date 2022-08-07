import UserController from '@/app/controller/user';
import { errorHelper } from '@/app/helpers/apiError';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
const userRoutes = (
	fastify: FastifyInstance,
	option: FastifyServerOptions,
	next: Function
) => {
	const userController = new UserController();
	fastify.route({
		method: 'GET',
		url: '/',
		onRequest: [fastify.authenticate],
		handler: errorHelper(userController.getAllUser()),
	});

	next();
};

export default userRoutes;
