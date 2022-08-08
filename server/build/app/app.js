"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const fastify_1 = require("fastify");
const dotenv = require("dotenv");
const sensible_1 = require("@fastify/sensible");
const cors_1 = require("@fastify/cors");
const ajv_errors_1 = require("ajv-errors");
const dbInstance_1 = require("../database/dbInstance");
const routes_1 = require("./routes");
const jwt_1 = require("@fastify/jwt");
const swagger_1 = require("./helpers/swagger");
const swagger_2 = require("@fastify/swagger");
const proxy_addr_1 = require("@fastify/proxy-addr");
dotenv.config();
const option = {
    ajv: {
        customOptions: {
            allErrors: true,
            dynamicRef: true,
            removeAdditional: 'all',
            useDefaults: 'empty',
            coerceTypes: 'array',
            $data: true,
        },
        plugins: [ajv_errors_1.default],
    },
};
const app = (0, fastify_1.default)(option);
app.register(jwt_1.default, { secret: process.env.JWT_SECRET });
app.register(sensible_1.default);
app.register(cors_1.default);
app.register(swagger_2.default, swagger_1.default);
app.register(proxy_addr_1.default);
app.register(routes_1.default, { prefix: '/api' });
app.get('/', (req, res) => ({ status: 'OK' }));
const startServer = async () => {
    try {
        await dbInstance_1.default.$connect();
        const address = await app.listen({ port: process.env.PORT });
        console.log(`Server is listening on address : ${address}`);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.startServer = startServer;
exports.default = app;
