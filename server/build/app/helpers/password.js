"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchPassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync(10);
async function hashPassword(password) {
    if (!password) {
        const error = TypeError(`Password must not be empty!`);
        throw error;
    }
    return await bcrypt.hashSync(password, saltRounds);
}
exports.hashPassword = hashPassword;
async function matchPassword(plainPassword, hashedPassword) {
    if (!plainPassword || !hashedPassword) {
        const error = TypeError('Password/Hash Should Not Be Empty');
        throw error;
    }
    return await bcrypt.compareSync(plainPassword, hashedPassword);
}
exports.matchPassword = matchPassword;
