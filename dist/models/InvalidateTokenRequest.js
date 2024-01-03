"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidateTokenRequest = void 0;
var InvalidateTokenRequest = (function () {
    function InvalidateTokenRequest() {
    }
    InvalidateTokenRequest.getAttributeTypeMap = function () {
        return InvalidateTokenRequest.attributeTypeMap;
    };
    InvalidateTokenRequest.discriminator = undefined;
    InvalidateTokenRequest.attributeTypeMap = [
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
    return InvalidateTokenRequest;
}());
exports.InvalidateTokenRequest = InvalidateTokenRequest;
//# sourceMappingURL=InvalidateTokenRequest.js.map