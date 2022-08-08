import { generateToken } from '@/app/helpers/jwt';
import { hashPassword, matchPassword } from '@/app/helpers/password';
import prisma from '@/database/dbInstance';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default class AuthController {
	constructor() {}

	signUp() {
		return async (req: FastifyRequest, res: FastifyReply) => {
			const data = req.body as any;
			const user = await prisma.user.findUnique({
				where: { email: data.email },
			});
			if (user) throw res.conflict(`user from ${data.email} already exsist`);
			data['password'] = await hashPassword(data['password']);
			return prisma.user.create({
				data,
			});
		};
	}
	signIn() {
		return async (req: FastifyRequest, res: FastifyReply) => {
			const data = req.body as any;
			const user = await prisma.user.findUniqueOrThrow({
				where: { email: data.email },
				select: { password: true, id: true, email: true },
			});
			const match = await matchPassword(data.password, user.password);
			if (!match) throw res.unauthorized(`incorrect password`);
			const token = await generateToken(user);
			await prisma.session.upsert({
				where: {
					userId: user.id,
				},
				create: { token, userId: user.id },
				update: { token, userId: user.id },
			});
			return {
				token,
				email: user.email,
			};
		};
	}
}
