import errorResponse from '@/app/schema/error';
import { FastifySchema } from 'fastify';
const base = {
	tags: ['User'],
	security: [{ auth: [] }],
};
export const userSchema: FastifySchema = {
	...base,
	response: {
		200: {
			type: 'array',
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

export const getProfileSchema: FastifySchema = {
	...base,
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
