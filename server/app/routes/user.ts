import AuthController from '@/app/controller/auth';
import { errorHelper } from '@/app/helpers/apiError';
import prisma from '@/database/dbInstance';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
const userRoutes = (
	fastify: FastifyInstance,
	option: FastifyServerOptions,
	next: Function
) => {
	fastify.route({
		method: 'GET',
		url: '/',
		// onRequest: [fastify['authenticate']],
		handler: errorHelper((req, res) => {
			return prisma.user.findMany();
		}),
	});

	next();
};

export default userRoutes;
