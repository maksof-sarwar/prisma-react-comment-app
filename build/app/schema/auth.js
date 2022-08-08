"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = exports.signInSchema = void 0;
const error_1 = require("./error");
exports.signInSchema = {
    tags: ['Auth'],
    body: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
            },
            password: {
                type: 'string',
            },
        },
        required: ['email', 'password'],
        errorMessage: {
            required: {
                email: '$email is missing',
                password: '$password is missing',
            },
        },
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                token: { type: 'string' },
                email: { type: 'string' },
            },
        },
        default: error_1.default,
    },
};
exports.signUpSchema = {
    tags: ['Auth'],
    body: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
            },
            email: {
                type: 'string',
                format: 'email',
                errorMessage: {
                    format: 'is invalid',
                },
            },
            password: {
                type: 'string',
                minLength: 6,
                errorMessage: {
                    minLength: 'is too short',
                },
            },
        },
        required: ['name', 'email', 'password'],
        errorMessage: {
            required: {
                name: '$name is missing',
                email: '$email is missing',
                password: '$password is missing',
            },
        },
    },
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
        default: error_1.default,
    },
};
