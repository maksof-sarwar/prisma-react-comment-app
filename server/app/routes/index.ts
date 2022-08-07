import authRoutes from '@/app/routes/auth';
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
		url: '/health',
		handler: (req, res) =>
			res.status(200).send({
				statusCode: 200,
				message: `Server is running on PORT ${process.env.PORT} process : ${cluster.worker?.process.pid}`,
			}),
	});
	fastify.register(authRoutes, { prefix: '/auth' });
	next();
}
