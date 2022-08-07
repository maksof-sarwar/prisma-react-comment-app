import fastify, { FastifyPluginOptions, FastifyServerOptions } from 'fastify';
import * as dotenv from 'dotenv';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import ajvErrors from 'ajv-errors';
import router from '@/app/routes';
import prisma from '@/database/dbInstance';
import { jwtPlugin, verifyToken } from '@/app/helpers/jwt';
dotenv.config();
const option: FastifyServerOptions = {
	logger: {
		useLevelLabels: true,
		level: 'warn',
	},
	ajv: {
		customOptions: {
			allErrors: true,
			dynamicRef: true,
			removeAdditional: 'all',
			useDefaults: 'empty',
			coerceTypes: 'array',
			$data: true,
		},
		plugins: [ajvErrors],
	},
	trustProxy: true,
};
const app = fastify(option);
app.register(sensible);
app.register(cors);
app.addHook('preValidation', async (request, reply) => {
	await request.jwtVerify();
});
app.register(router, { prefix: '/api' });
app.register(jwtPlugin);
export const startServer = async () => {
	try {
		await prisma.$connect();
		const address = await app.listen({ port: process.env.PORT as any });
		console.log(`Server is listening on address : ${address}`);
	} catch (error: any) {
		console.log(error);
		process.exit(1);
	}
};

export default app;
