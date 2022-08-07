import fastify, { FastifyServerOptions, onRequestHookHandler } from 'fastify';
import * as dotenv from 'dotenv';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import ajvErrors from 'ajv-errors';
import prisma from '@/database/dbInstance';
import router from '@/app/routes';
import JWT from '@fastify/jwt';
// Declaration merging
declare module 'fastify' {
	export interface FastifyInstance {
		authenticate: onRequestHookHandler;
	}
}
dotenv.config();
const option: FastifyServerOptions = {
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
};
const app = fastify(option);
app.register(JWT, { secret: process.env.JWT_SECRET as string });
app.register(sensible);
app.register(cors);
app.register(router, { prefix: '/api' });

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
