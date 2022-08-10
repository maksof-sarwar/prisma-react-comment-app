import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
	errorFormat: 'minimal',
	// log: ['query', 'info', 'warn', 'error'],
});
async function excludePasswordMiddleware(params, next) {
	const result = await next(params);
	if (params?.model === 'User' && !params?.args?.select?.password) {
		delete result?.password;
		if (result?.length) result.forEach((r) => delete r?.password);
	}
	return result;
}

prisma.$use(excludePasswordMiddleware);
export default prisma;
