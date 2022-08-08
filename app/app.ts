import fastify, { FastifyServerOptions, onRequestHookHandler } from 'fastify';
import * as dotenv from 'dotenv';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import ajvErrors from 'ajv-errors';
import prisma from '@/database/dbInstance';
import router from '@/app/routes';
import JWT from '@fastify/jwt';
import swaggerOptions from '@/app/helpers/swagger';
import fastifySwagger from '@fastify/swagger';
import compression from '@fastify/compress';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
const FRONTENDFOLDER = 'client';
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
app.register(compression);
app.register(fastifySwagger, swaggerOptions);
app.register(router, { prefix: '/api' });
app.register(fastifyStatic, {
	root: join(__dirname, FRONTENDFOLDER),
});

export const startServer = async () => {
	try {
		await prisma.$connect();
		const address = await app.listen({
			port: process.env.PORT as any,
			host: '0.0.0.0',
		});
		console.log(`Server is listening on PORT : ${address.split(':').pop()}`);
	} catch (error: any) {
		console.log(error);
		process.exit(1);
	}
};

export default app;
