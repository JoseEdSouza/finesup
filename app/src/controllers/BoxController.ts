import * as http from 'http';
import Box from "../models/Box";
import ApiSettings from "../config/ApiSettings";

export class BoxController {

    baseUrl = ApiSettings.BASEURL + "/box"
    ///api/box/user
    getOptions = (m: string, box: Box) => {
        return {
            hostname: ApiSettings.HOST,
            port: ApiSettings.PORT,
            path: ApiSettings.BASEPATH + '/box/user',
            method: m,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(box)
        };
    }

    async add(box: Box): Promise<boolean> {
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
    async get(userId: number, name: string): Promise<Box | null> {
        const url = `${this.baseUrl}/${userId}/${name}`;
        let box: Box | null = null;
        const req = http.get(url, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    const { id, name, description, actualValue, finalValue, concluded } = JSON.parse(data);
                    box = new Box(id, name, description, actualValue, finalValue, concluded);
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


const c = new BoxController()
console.log(c.get(1, "Box 1"))



