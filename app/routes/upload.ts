import UploadController from '@/app/controller/upload';
import uploadFileMiddleware from '@/app/helpers/multer';
import { errorHelper } from '@/app/helpers/apiError';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
import { deleteFileSchema, uploadFileSchema } from '@/app/schema/upload';

const fileUploadRoutes = (
	fastify: FastifyInstance,
	option: FastifyServerOptions,
	next: Function
) => {
	const uploadController = new UploadController();

	fastify.route({
		method: 'POST',
		url: '/upload/:type',
		schema: uploadFileSchema,
		preValidation: uploadFileMiddleware.single('file'),
		handler: errorHelper(uploadController.uploadFile()),
	});
	fastify.route({
		method: 'GET',
		schema: deleteFileSchema,
		url: '/delete/:type/:id',
		handler: errorHelper(uploadController.deleteFile()),
	});

	next();
};

export default fileUploadRoutes;
