"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenIdListResponse = void 0;
var AccessTokenIdListResponse = (function () {
    function AccessTokenIdListResponse() {
    }
    AccessTokenIdListResponse.getAttributeTypeMap = function () {
        return AccessTokenIdListResponse.attributeTypeMap;
    };
    AccessTokenIdListResponse.discriminator = undefined;
    AccessTokenIdListResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessTokenIdArray",
            "baseName": "AccessTokenIdArray",
            "type": "Array<ListAllTokenIds200ResponseAccessTokenIdArrayInner>",
            "format": ""
        }
    ];
    return AccessTokenIdListResponse;
}());
exports.AccessTokenIdListResponse = AccessTokenIdListResponse;
//# sourceMappingURL=AccessTokenIdListResponse.js.map