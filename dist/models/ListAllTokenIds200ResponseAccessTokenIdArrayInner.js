"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllTokenIds200ResponseAccessTokenIdArrayInner = void 0;
var ListAllTokenIds200ResponseAccessTokenIdArrayInner = (function () {
    function ListAllTokenIds200ResponseAccessTokenIdArrayInner() {
    }
    ListAllTokenIds200ResponseAccessTokenIdArrayInner.getAttributeTypeMap = function () {
        return ListAllTokenIds200ResponseAccessTokenIdArrayInner.attributeTypeMap;
    };
    ListAllTokenIds200ResponseAccessTokenIdArrayInner.discriminator = undefined;
    ListAllTokenIds200ResponseAccessTokenIdArrayInner.attributeTypeMap = [
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
    return ListAllTokenIds200ResponseAccessTokenIdArrayInner;
}());
exports.ListAllTokenIds200ResponseAccessTokenIdArrayInner = ListAllTokenIds200ResponseAccessTokenIdArrayInner;
//# sourceMappingURL=ListAllTokenIds200ResponseAccessTokenIdArrayInner.js.map