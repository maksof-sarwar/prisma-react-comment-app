"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../helpers/jwt");
const auth_1 = require("./auth");
const user_1 = require("./user");
const _cluster = require("node:cluster");
const cluster = _cluster;
function router(fastify, option, next) {
    //Health Route
    fastify.route({
        method: 'GET',
        schema: {
            tags: ['health'],
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        statusCode: { type: 'integer' },
                    },
                },
            },
        },
        url: '/health',
        handler: (req, res) => ({
            statusCode: 200,
            message: `Server is running on PORT ${process.env.PORT} process : ${cluster?.worker?.process.pid || process.pid}`,
        }),
    });
    next();
    fastify.decorate('authenticate', (0, jwt_1.verifyToken)());
    fastify.register(auth_1.default, { prefix: '/auth' });
    fastify.register(user_1.default, { prefix: '/user' });
    next();
}
exports.default = router;
