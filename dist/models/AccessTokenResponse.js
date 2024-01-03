"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenResponse = void 0;
var AccessTokenResponse = (function () {
    function AccessTokenResponse() {
    }
    AccessTokenResponse.getAttributeTypeMap = function () {
        return AccessTokenResponse.attributeTypeMap;
    };
    AccessTokenResponse.discriminator = undefined;
    AccessTokenResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenId",
            "baseName": "tokenId",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenType",
            "baseName": "tokenType",
            "type": "string",
            "format": ""
        }
    ];
    return AccessTokenResponse;
}());
exports.AccessTokenResponse = AccessTokenResponse;
//# sourceMappingURL=AccessTokenResponse.js.map