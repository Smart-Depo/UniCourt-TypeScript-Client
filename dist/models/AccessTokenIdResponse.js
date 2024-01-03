"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenIdResponse = void 0;
var AccessTokenIdResponse = (function () {
    function AccessTokenIdResponse() {
    }
    AccessTokenIdResponse.getAttributeTypeMap = function () {
        return AccessTokenIdResponse.attributeTypeMap;
    };
    AccessTokenIdResponse.discriminator = undefined;
    AccessTokenIdResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "issuedDate",
            "baseName": "issuedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "issueAddress",
            "baseName": "issueAddress",
            "type": "string",
            "format": ""
        }
    ];
    return AccessTokenIdResponse;
}());
exports.AccessTokenIdResponse = AccessTokenIdResponse;
//# sourceMappingURL=AccessTokenIdResponse.js.map