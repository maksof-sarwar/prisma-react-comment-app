"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controller/user");
const apiError_1 = require("../helpers/apiError");
const user_2 = require("../schema/user");
const userRoutes = (fastify, option, next) => {
    const userController = new user_1.default();
    fastify.route({
        method: 'GET',
        url: '/',
        schema: user_2.userSchema,
        onRequest: [fastify.authenticate],
        handler: (0, apiError_1.errorHelper)(userController.getAllUser()),
    });
    next();
};
exports.default = userRoutes;
