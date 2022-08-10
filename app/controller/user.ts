import prisma from '@/database/dbInstance';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default class UserController {
	constructor() {}

	getAllUser() {
		return async (req: FastifyRequest, res: FastifyReply) => {
			return prisma.user.findMany({ where: { deletedAt: null } });
		};
	}
}
