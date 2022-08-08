"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbInstance_1 = require("../../database/dbInstance");
class UserController {
    constructor() { }
    getAllUser() {
        return async (req, res) => {
            return dbInstance_1.default.user.findMany();
        };
    }
}
exports.default = UserController;
