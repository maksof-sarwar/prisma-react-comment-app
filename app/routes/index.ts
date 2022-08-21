import { verifyToken } from '@/app/helpers/jwt';
import authRoutes from '@/app/routes/auth';
import userRoutes from '@/app/routes/user';
import fileUploadRoutes from '@/app/routes/upload';
import { FastifyInstance, FastifyServerOptions } from 'fastify';

import * as _cluster from 'node:cluster';
const cluster = _cluster as unknown as _cluster.Cluster;

export default function router(
	fastify: FastifyInstance,
	option: FastifyServerOptions,
	next: Function
): void {
	//Health Route
	fastify.route({
		method: 'GET',
		schema: {
			tags: ['health'],
			response: {
				200: {
					description: 'Successful response',
					type: 'object',
					properties: {
						message: { type: 'string' },
						statusCode: { type: 'integer' },
					},
				},
			},
		},
		url: '/health',
		handler: (req, res) => ({
			statusCode: 200,
			message: `Server is running on PORT ${process.env.PORT} process : ${
				cluster?.worker?.process.pid || process.pid
			}`,
		}),
	});

	next();
	fastify.decorate('authenticate', verifyToken());
	fastify.register(authRoutes, { prefix: '/auth' });
	fastify.register(userRoutes, { prefix: '/user' });
	fastify.register(fileUploadRoutes, { prefix: '/file' });
	next();
}
