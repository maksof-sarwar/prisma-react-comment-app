import errorResponse from '@/app/schema/error';
import { FastifySchema } from 'fastify';

export const signInSchema: FastifySchema = {
	tags: ['Auth'],
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
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				token: { type: 'string' },
				email: { type: 'string' },
			},
		},

		default: errorResponse,
	},
};

export const signUpSchema: FastifySchema = {
	tags: ['Auth'],
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
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				id: { type: 'string' },
				name: { type: 'string' },
				email: { type: 'string' },
				createdAt: { type: 'string' },
				updatedAt: { type: 'string' },
				deletedAt: { type: 'string' },
			},
		},

		default: errorResponse,
	},
};
