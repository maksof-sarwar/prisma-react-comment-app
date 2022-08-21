import UserController from '@/app/controller/user';
import { errorHelper } from '@/app/helpers/apiError';
import { userSchema } from '@/app/schema/user';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
const userRoutes = (
	fastify: FastifyInstance,
	option: FastifyServerOptions,
	next: Function
) => {
	const userController = new UserController();
	fastify.addHook('onRequest', fastify.authenticate);
	fastify.route({
		method: 'GET',
		url: '',
		schema: userSchema,
		handler: errorHelper(userController.getAllUser()),
	});

	next();
};

export default userRoutes;