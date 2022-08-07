import { errorHelper } from '@/app/helpers/apiError';
import prisma from '@/database/dbInstance';
import { FastifyReply, FastifyRequest } from 'fastify';

export default class AuthController {
	constructor() {}

	signUp() {
		return async (req: FastifyRequest, res: FastifyReply) => {
			const promise = prisma.user.count();
			return await errorHelper(promise);
		};
	}
}
