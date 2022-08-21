import errorResponse from '@/app/schema/error';
import { FastifySchema } from 'fastify';

export const uploadFileSchema: FastifySchema = {
	tags: ['Upload'],
	consumes: ['multipart/form-data'],
	params: {
		type: 'object',
		properties: {
			type: {
				enum: ['attachments', 'image', 'video'],
			},
		},
		required: ['type'],
		errorMessage: {
			required: {
				type: '$type is missing',
			},
		},
	},
	body: {
		type: 'object',
		properties: {
			file: { type: 'string', format: 'binary' },
		},
		description: 'The file to upload.',
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				id: { type: 'string' },
				url: { type: 'string' },
			},
		},
		default: errorResponse,
	},
};
export const deleteFileSchema: FastifySchema = {
	tags: ['Upload'],
	params: {
		type: 'object',
		properties: {
			type: {
				enum: ['attachments', 'image', 'video'],
			},
			id: { type: 'string' },
		},
		required: ['type', 'id'],
		errorMessage: {
			required: {
				type: '$type is missing',
				tyidpe: '$id is missing',
			},
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: { message: { type: 'string' } },
		},
		default: errorResponse,
	},
};
