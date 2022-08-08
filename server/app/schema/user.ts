import errorResponse from '@/app/schema/error';
import { SwaggerOptions } from '@fastify/swagger';
import { FastifySchema } from 'fastify';

export const userSchema: FastifySchema = {
	tags: ['User'],
	security: [{ auth: [] }],
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
