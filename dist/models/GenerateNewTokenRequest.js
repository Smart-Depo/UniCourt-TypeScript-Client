"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateNewTokenRequest = void 0;
var GenerateNewTokenRequest = (function () {
    function GenerateNewTokenRequest() {
    }
    GenerateNewTokenRequest.getAttributeTypeMap = function () {
        return GenerateNewTokenRequest.attributeTypeMap;
    };
    GenerateNewTokenRequest.discriminator = undefined;
    GenerateNewTokenRequest.attributeTypeMap = [
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        }
    ];
    return GenerateNewTokenRequest;
}());
exports.GenerateNewTokenRequest = GenerateNewTokenRequest;
//# sourceMappingURL=GenerateNewTokenRequest.js.map