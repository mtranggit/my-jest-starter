"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, val) { return acc + val; }, 0);
};
