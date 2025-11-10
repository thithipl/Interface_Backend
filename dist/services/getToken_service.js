"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTokenService = void 0;
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
class GetTokenService {
    constructor() {
        this.baseUrl = process.env.FPI_URL || 'https://www.fortuneparts.net';
    }
    async login(data) {
        const payload = qs_1.default.stringify({
            email: data.email,
            password: data.password,
        });
        const response = await axios_1.default.post(`${this.baseUrl}/api/login`, payload, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        return response.data;
    }
}
exports.GetTokenService = GetTokenService;
//# sourceMappingURL=getToken_service.js.map