"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = exports.getExpireTime = void 0;
const app_1 = require("../app");
const dbInstance_1 = require("../../database/dbInstance");
const getExpireTime = (day) => 60 * 60 * 24 * day;
exports.getExpireTime = getExpireTime;
async function generateToken(payLoad, expiry = undefined) {
    const expiresIn = (payLoad.expiresIn =
        expiry || (0, exports.getExpireTime)(Number(process.env.JWT_EXPIRY)));
    const isObject = typeof payLoad === 'object';
    if (!payLoad) {
        const error = new TypeError('Token Payload Should Not Be Empty');
        throw error;
    }
    if (!isObject) {
        const error = new TypeError('Token Payload Must Be An Object');
        throw error;
    }
    return app_1.default.jwt.sign(payLoad, { expiresIn });
}
exports.generateToken = generateToken;
function verifyToken() {
    return async (req, res) => {
        try {
            await req.jwtVerify();
            const token = (req.headers.authorization || req.headers.Authorization || '')
                .split('Bearer ')
                .pop();
            const user = await dbInstance_1.default.session.findUniqueOrThrow({
                where: { token },
                select: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            createdAt: true,
                        },
                    },
                },
            });
            req.user = user;
        }
        catch (err) {
            res.forbidden(err.message);
        }
    };
}
exports.verifyToken = verifyToken;
