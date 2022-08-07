import { generateToken } from '@/app/helpers/jwt';
import { hashPassword } from '@/app/helpers/password';
import prisma from '@/database/dbInstance';
import { FastifyReply, FastifyRequest } from 'fastify';
console.log(process.env.JWT_EXPIRY);
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
			return {
				user: await prisma.user.create({
					data,
				}),
			};
		};
	}
	signIn() {
		return async (req: FastifyRequest, res: FastifyReply) => {
			const data = req.body as any;
			const user = await prisma.user.findUnique({
				where: { email: data.email },
			});
			if (!user) throw res.notFound(`user from ${data.email} not found`);
			const token = await generateToken(user);
			return {
				token,
			};
		};
	}
}
