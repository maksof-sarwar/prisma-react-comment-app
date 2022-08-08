"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controller/auth");
const apiError_1 = require("../helpers/apiError");
const auth_2 = require("../schema/auth");
const authRoutes = (fastify, option, next) => {
    const authController = new auth_1.default();
    fastify.route({
        method: 'POST',
        url: '/sign-up',
        schema: auth_2.signUpSchema,
        handler: (0, apiError_1.errorHelper)(authController.signUp()),
    });
    fastify.route({
        method: 'POST',
        url: '/sign-in',
        schema: auth_2.signInSchema,
        handler: (0, apiError_1.errorHelper)(authController.signIn()),
    });
    next();
};
exports.default = authRoutes;
