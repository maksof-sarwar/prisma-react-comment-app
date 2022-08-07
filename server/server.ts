import fastify from 'fastify';
import * as dotenv from 'dotenv';
import sensible from '@fastify/sensible';
import cors from '@fastify/cors';
import 'module-alias/register';
import { router } from '@/app/routes';
dotenv.config();
const app = fastify({ logger: false });
app.register(sensible);
app.register(cors);
app.register(router, { prefix: '/api' });

export const startServer = () => {
	app.listen({ port: process.env.PORT as any }, (err, address) => {
		if (err) console.log(err?.message);
		console.log(`Server is listening on address : ${address}`);
	});
};

export default app;
