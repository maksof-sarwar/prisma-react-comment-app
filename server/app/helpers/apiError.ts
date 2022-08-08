import app from '@/app/app';
import { FastifyReply, FastifyRequest } from 'fastify';
enum errorType {
	NotFoundError = 'NotFoundError',
}
export const errorHelper = (handler: Function) => {
	return async (req: FastifyRequest, res: FastifyReply) => {
		const [error, data] = await app.to(handler(req, res));
		if (error) {
			if (error?.name == errorType.NotFoundError)
				return app.httpErrors.notFound(error.message);
			return app.httpErrors.internalServerError(error.message);
		}
		return data;
	};
};
