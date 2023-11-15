"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
class Box {
    userId;
    name;
    description;
    actualValue;
    finalValue;
    concluded;
    constructor(userId, name, description, actualValue = 0, finalValue, concluded = false) {
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.actualValue = actualValue;
        this.finalValue = finalValue;
        this.concluded = concluded;
    }
    deposit(value) {
        if (this.actualValue + value > this.finalValue) {
            this.actualValue = this.finalValue;
            this.concluded = true;
        }
        else
            this.actualValue += value;
    }
    withdraw(value) {
        if (this.actualValue - value < 0) {
            this.actualValue = 0;
            this.concluded = false;
        }
        else
            this.actualValue -= value;
    }
}
exports.Box = Box;
exports.default = Box;
