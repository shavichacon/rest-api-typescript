"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3000;
        this.app = express_1.default();
    }
    return Server;
}());
exports.Server = Server;
