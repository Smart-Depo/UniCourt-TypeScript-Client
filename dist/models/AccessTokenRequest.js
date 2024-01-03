"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenRequest = void 0;
var AccessTokenRequest = (function () {
    function AccessTokenRequest() {
    }
    AccessTokenRequest.getAttributeTypeMap = function () {
        return AccessTokenRequest.attributeTypeMap;
    };
    AccessTokenRequest.discriminator = undefined;
    AccessTokenRequest.attributeTypeMap = [
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
    return AccessTokenRequest;
}());
exports.AccessTokenRequest = AccessTokenRequest;
//# sourceMappingURL=AccessTokenRequest.js.map