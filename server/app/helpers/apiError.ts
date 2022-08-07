import app from '@/server';

export const errorHelper = async (promise) => {
	const [error, data] = await app.to(promise);
	if (error) app.httpErrors.internalServerError(error.message);
	return data;
};
