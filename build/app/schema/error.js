"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorResponse = {
    description: 'Error response',
    type: 'object',
    properties: {
        statusCode: { type: 'integer' },
        error: { type: 'string' },
        message: { type: 'string' },
    },
};
exports.default = errorResponse;
