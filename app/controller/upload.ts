import {
	uploadToCloudinary,
	deleteFromCloudinary,
} from '@/app/helpers/cloudinary';
import { FastifyReply, FastifyRequest } from 'fastify';

export default class UploadController {
	constructor() {}

	uploadFile() {
		return async (req: FastifyRequest, res: FastifyReply) => {
			const { type } = req.params as any;
			const filePath = req['file'].path;
			return uploadToCloudinary(filePath, type);
		};
	}
	deleteFile() {
		return async (req: FastifyRequest, res: FastifyReply) => {
			const { id, type } = req.params as any;
			return deleteFromCloudinary(`${type}/${id}`);
		};
	}
}
