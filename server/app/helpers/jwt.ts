import app from '@/app/app';
import { FastifyInstance, FastifyReply } from 'fastify';
import { FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import JWT from '@fastify/jwt';

export async function generateToken(payLoad, expiry = undefined) {
	const isObject = typeof payLoad === 'object';
	if (!payLoad) {
		const error = new TypeError('Token Payload Should Not Be Empty');
		throw error;
	}

	if (!isObject) {
		const error = new TypeError('Token Payload Must Be An Object');
		throw error;
	}

	return app.jwt.sign(payLoad);
}

export async function verifyToken() {
	return async (req: FastifyRequest, res: FastifyReply) => {
		try {
			await req.jwtVerify();
		} catch (err: any) {
			res.forbidden(err.message);
		}
	};
}

export const jwtPlugin = fastifyPlugin(
	(fastify: FastifyInstance, opts, done) => {
		fastify.register(JWT, { secret: process.env.JWT_SECRET as string });
		fastify.decorate('authenticate', verifyToken());
		done();
	}
);
