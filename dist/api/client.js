"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const wufoo_1 = __importDefault(require("./wufoo"));
function getApiUrl(formName, endPoint) {
    // apply transformation of uriTemplate
    return wufoo_1.default.getUri(formName, endPoint);
}
exports.getApiUrl = getApiUrl;
exports.default = {
    get: axios_1.default.get,
    getApiUrl,
};
//# sourceMappingURL=client.js.map