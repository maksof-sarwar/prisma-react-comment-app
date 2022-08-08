"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const os_1 = require("os");
const _cluster = require("node:cluster");
const cluster = _cluster;
const workers = (0, os_1.cpus)().length;
var ENV;
(function (ENV) {
    ENV["DEV"] = "DEVELOPMENT";
    ENV["PROD"] = "PRODUCTION";
})(ENV || (ENV = {}));
if (process.env.ENV == ENV.DEV) {
    (0, app_1.startServer)();
}
else {
    if (cluster.isPrimary) {
        for (let w of new Array(workers))
            cluster.fork();
        cluster.on('exit', cluster.fork);
    }
    else {
        (0, app_1.startServer)();
    }
}
