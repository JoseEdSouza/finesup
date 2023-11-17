"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxController = void 0;
var undici_1 = require("undici");
var Box_1 = require("../models/Box");
var ApiSettings_1 = require("../config/ApiSettings");
var BoxController = /** @class */ (function () {
    function BoxController() {
    }
    BoxController.prototype.get = function (userId, name) {
        return __awaiter(this, void 0, void 0, function () {
            var response, box;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, undici_1.fetch)("".concat(ApiSettings_1.default.BASEURL, "/box/").concat(userId, "/").concat(name))];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new Error('Box not found');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        box = _a.sent();
                        return [2 /*return*/, new Box_1.default(box.user_id, box.name, box.description, box.actual_value, box.final_value, box.concluded)];
                }
            });
        });
    };
    BoxController.prototype.getAll = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, boxes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, undici_1.fetch)("".concat(ApiSettings_1.default.BASEURL, "/all/box/").concat(userId))];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new Error('user not found');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        boxes = _a.sent();
                        return [2 /*return*/, boxes.map(function (box) { return new Box_1.default(box.user_id, box.name, box.description, box.actual_value, box.final_value, box.concluded); })];
                }
            });
        });
    };
    BoxController.prototype.add = function (box) {
        return __awaiter(this, void 0, void 0, function () {
            var response, addedBox;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, undici_1.fetch)("".concat(ApiSettings_1.default.BASEURL, "/box"), {
                            method: 'POST',
                            body: JSON.stringify({
                                user_id: box.userId,
                                name: box.name,
                                description: box.description,
                                actual_value: box.actualValue,
                                final_value: box.finalValue,
                                concluded: box.concluded
                            }),
                            headers: { 'Content-Type': 'application/json' }
                        })];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new Error('Failed to add box');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        addedBox = _a.sent();
                        return [2 /*return*/, new Box_1.default(addedBox.user_id, addedBox.name, addedBox.description, addedBox.actual_value, addedBox.final_value, addedBox.concluded)];
                }
            });
        });
    };
    return BoxController;
}());
exports.BoxController = BoxController;
exports.default = BoxController;
var c = new BoxController();
c.getAll(1).then(console.log).catch(console.error);
var myNewBox = new Box_1.default(1, 'My new box', 'My new box description', 0, 0, false);
c.add(myNewBox).then(console.log).catch(console.error);
