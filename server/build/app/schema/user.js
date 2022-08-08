"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const error_1 = require("./error");
exports.userSchema = {
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
        default: error_1.default,
    },
};
