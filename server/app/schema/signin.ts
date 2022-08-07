import { FastifySchema } from 'fastify';

const signInSchema: FastifySchema = {
	body: {
		type: 'object',
		properties: {
			email: {
				type: 'string',
			},
			password: {
				type: 'string',
			},
		},
		required: ['email', 'password'],
		errorMessage: {
			required: {
				email: '$email is missing',
				password: '$password is missing',
			},
		},
	},
};
export default signInSchema;
