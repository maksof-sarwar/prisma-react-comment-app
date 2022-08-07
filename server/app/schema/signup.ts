import { FastifySchema } from 'fastify';

const signUpSchema: FastifySchema = {
	body: {
		type: 'object',
		properties: {
			name: {
				type: 'string',
			},
			email: {
				type: 'string',
				format: 'email',
				errorMessage: {
					format: 'is invalid',
				},
			},
			password: {
				type: 'string',
				minLength: 6,
				errorMessage: {
					minLength: 'is too short',
				},
			},
		},
		required: ['name', 'email', 'password'],
		errorMessage: {
			required: {
				name: '$name is missing',
				email: '$email is missing',
				password: '$password is missing',
			},
		},
	},
};
export default signUpSchema;
