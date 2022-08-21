import { FastifyReply, FastifyRequest } from 'fastify';

export function verifyApiKey() {
	return async (req: FastifyRequest, res: FastifyReply) => {
		try {
			if (!req.headers['x-api-key']) throw new Error(`Api Key is missing.`);
			if (req.headers['x-api-key'] != process.env['X_API_KEY'])
				throw new Error(`Api Key is incorrect.`);
		} catch (err: any) {
			res.forbidden(err.message);
		}
	};
}
