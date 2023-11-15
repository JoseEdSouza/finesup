"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxController = void 0;
const http = require("http");
const Box_1 = require("../models/Box");
const ApiSettings_1 = require("../config/ApiSettings");
class BoxController {
    baseUrl = ApiSettings_1.default.BASEURL + "/box";
    ///api/box/user
    getOptions = (m, box) => {
        return {
            hostname: ApiSettings_1.default.HOST,
            port: ApiSettings_1.default.PORT,
            path: ApiSettings_1.default.BASEPATH + '/box/user',
            method: m,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(box)
        };
    };
    async add(box) {
        let ok = false;
        const options = this.getOptions('POST', box);
        const req = http.request(options, res => {
            if (res.statusCode === 200)
                ok = true;
            console.log(`statusCode: ${res.statusCode}`);
        });
        req.on('error', error => {
            console.error(error);
        });
        req.end(JSON.stringify(box));
        return new Promise((resolve, reject) => {
            req.on('error', reject);
            req.on('close', () => resolve(ok));
        });
    }
    async get(userId, name) {
        const url = `${this.baseUrl}/${userId}/${name}`;
        let box = null;
        const req = http.get(url, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    const { id, name, description, actualValue, finalValue, concluded } = JSON.parse(data);
                    box = new Box_1.default(id, name, description, actualValue, finalValue, concluded);
                }
            });
        });
        req.on('error', error => {
            console.error(error);
        });
        return new Promise((resolve, reject) => {
            req.on('error', reject);
            req.on('close', () => resolve(box));
        });
    }
}
exports.BoxController = BoxController;
const c = new BoxController();
setTimeout(()=> {console.log(c.get(1, "Box 1"))} , 5000);
