import app from '@/app/app';

export const errorHelper = (handler: Function) => {
	return async (req, res) => {
		const [error, data] = await app.to(handler(req, res));
		if (error) return app.httpErrors.internalServerError(error.message);
		return data;
	};
};
