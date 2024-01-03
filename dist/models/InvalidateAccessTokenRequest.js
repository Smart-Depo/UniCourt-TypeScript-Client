"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidateAccessTokenRequest = void 0;
var InvalidateAccessTokenRequest = (function () {
    function InvalidateAccessTokenRequest() {
    }
    InvalidateAccessTokenRequest.getAttributeTypeMap = function () {
        return InvalidateAccessTokenRequest.attributeTypeMap;
    };
    InvalidateAccessTokenRequest.discriminator = undefined;
    InvalidateAccessTokenRequest.attributeTypeMap = [
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
        },
        {
            "name": "tokenId",
            "baseName": "tokenId",
            "type": "string",
            "format": ""
        }
    ];
    return InvalidateAccessTokenRequest;
}());
exports.InvalidateAccessTokenRequest = InvalidateAccessTokenRequest;
//# sourceMappingURL=InvalidateAccessTokenRequest.js.map