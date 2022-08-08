const errorResponse = {
	description: 'Error response',
	type: 'object',
	properties: {
		statusCode: { type: 'integer' },
		error: { type: 'string' },
		message: { type: 'string' },
	},
};

export default errorResponse;
