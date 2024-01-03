"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllTokenIds200Response = void 0;
var ListAllTokenIds200Response = (function () {
    function ListAllTokenIds200Response() {
    }
    ListAllTokenIds200Response.getAttributeTypeMap = function () {
        return ListAllTokenIds200Response.attributeTypeMap;
    };
    ListAllTokenIds200Response.discriminator = undefined;
    ListAllTokenIds200Response.attributeTypeMap = [
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
    return ListAllTokenIds200Response;
}());
exports.ListAllTokenIds200Response = ListAllTokenIds200Response;
//# sourceMappingURL=ListAllTokenIds200Response.js.map