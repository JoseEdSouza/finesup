"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box(userId, name, description, actualValue, finalValue, concluded) {
        if (actualValue === void 0) { actualValue = 0; }
        if (concluded === void 0) { concluded = false; }
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.actualValue = actualValue;
        this.finalValue = finalValue;
        this.concluded = concluded;
    }
    Box.prototype.deposit = function (value) {
        if (this.actualValue + value > this.finalValue) {
            this.actualValue = this.finalValue;
            this.concluded = true;
        }
        else
            this.actualValue += value;
    };
    Box.prototype.withdraw = function (value) {
        if (this.actualValue - value < 0) {
            this.actualValue = 0;
            this.concluded = false;
        }
        else
            this.actualValue -= value;
    };
    return Box;
}());
exports.Box = Box;
exports.default = Box;
