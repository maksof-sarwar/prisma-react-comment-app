import app from '@/app/app';
import prisma from '@/database/dbInstance';
import { FastifyReply } from 'fastify';
import { FastifyRequest } from 'fastify';
import { string } from 'yup';

export const getExpireTime = (day: number) => 60 * 60 * 24 * day;

export async function generateToken(payLoad, expiry = undefined) {
	const expiresIn = (payLoad.expiresIn =
		expiry || getExpireTime(Number(process.env.JWT_EXPIRY)));
	const isObject = typeof payLoad === 'object';
	if (!payLoad) {
		const error = new TypeError('Token Payload Should Not Be Empty');
		throw error;
	}

	if (!isObject) {
		const error = new TypeError('Token Payload Must Be An Object');
		throw error;
	}

	return app.jwt.sign(payLoad, { expiresIn });
}

export function verifyToken() {
	return async (req: FastifyRequest, res: FastifyReply) => {
		try {
			await req.jwtVerify();
			const token = (
				(req.headers.authorization || req.headers.Authorization || '') as string
			)
				.split('Bearer ')
				.pop() as string;
			const user = await prisma.session.findUniqueOrThrow({
				where: { token },
				select: {
					user: {
						select: {
							id: true,
							email: true,
							name: true,
							createdAt: true,
						},
					},
				},
			});
			req.user = user;
		} catch (err: any) {
			res.forbidden(err.message);
		}
	};
}
