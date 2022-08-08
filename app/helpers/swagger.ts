import errorResponse from '@/app/schema/error';
import { SwaggerOptions } from '@fastify/swagger';

const swaggerOptions: SwaggerOptions = {
	routePrefix: '/api/doc',
	mode: 'dynamic',
	openapi: {
		info: {
			title: 'apidoc',
			description: 'Testing the Fastify swagger API',
			version: '0.1.0',
		},
		components: {
			securitySchemes: {
				auth: {
					type: 'http',
					bearerFormat: 'JWT',
					scheme: 'bearer',
				},
			},
		},
		servers: [
			{ url: 'http://localhost:9001', description: 'development' },
			{
				url: 'https://prisma-react-sarwar.herokuapp.com',
				description: 'production',
			},
		],
	},

	exposeRoute: true,
};

export default swaggerOptions;
