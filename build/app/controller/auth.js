"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../helpers/jwt");
const password_1 = require("../helpers/password");
const dbInstance_1 = require("../../database/dbInstance");
class AuthController {
    constructor() { }
    signUp() {
        return async (req, res) => {
            const data = req.body;
            const user = await dbInstance_1.default.user.findUnique({
                where: { email: data.email },
            });
            if (user)
                throw res.conflict(`user from ${data.email} already exsist`);
            data['password'] = await (0, password_1.hashPassword)(data['password']);
            return dbInstance_1.default.user.create({
                data,
            });
        };
    }
    signIn() {
        return async (req, res) => {
            const data = req.body;
            const user = await dbInstance_1.default.user.findUniqueOrThrow({
                where: { email: data.email },
                select: { password: true, id: true, email: true },
            });
            const match = await (0, password_1.matchPassword)(data.password, user.password);
            if (!match)
                throw res.unauthorized(`incorrect password`);
            const token = await (0, jwt_1.generateToken)(user);
            await dbInstance_1.default.session.upsert({
                where: {
                    userId: user.id,
                },
                create: { token, userId: user.id },
                update: { token, userId: user.id },
            });
            return {
                token,
                email: user.email,
            };
        };
    }
}
exports.default = AuthController;
