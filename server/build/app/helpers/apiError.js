"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHelper = void 0;
const app_1 = require("../app");
var errorType;
(function (errorType) {
    errorType["NotFoundError"] = "NotFoundError";
})(errorType || (errorType = {}));
const errorHelper = (handler) => {
    return async (req, res) => {
        const [error, data] = await app_1.default.to(handler(req, res));
        if (error) {
            if (error?.name == errorType.NotFoundError)
                return app_1.default.httpErrors.notFound(error.message);
            return app_1.default.httpErrors.internalServerError(error.message);
        }
        return data;
    };
};
exports.errorHelper = errorHelper;
