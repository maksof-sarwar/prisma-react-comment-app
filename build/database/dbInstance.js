"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    errorFormat: 'minimal',
    // log: ['query', 'info', 'warn', 'error'],
});
async function excludePasswordMiddleware(params, next) {
    const result = await next(params);
    if (params?.model === 'User' && !params?.args?.select?.password) {
        delete result?.password;
        if (result?.length)
            result.forEach((r) => delete r?.password);
    }
    return result;
}
prisma.$use(excludePasswordMiddleware);
exports.default = prisma;
