"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPacerCredential200Response = void 0;
var GetPacerCredential200Response = (function () {
    function GetPacerCredential200Response() {
    }
    GetPacerCredential200Response.getAttributeTypeMap = function () {
        return GetPacerCredential200Response.attributeTypeMap;
    };
    GetPacerCredential200Response.discriminator = undefined;
    GetPacerCredential200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "pacerCredentialArray",
            "baseName": "pacerCredentialArray",
            "type": "Array<GetPacerCredential200ResponsePacerCredentialArrayInner>",
            "format": ""
        }
    ];
    return GetPacerCredential200Response;
}());
exports.GetPacerCredential200Response = GetPacerCredential200Response;
//# sourceMappingURL=GetPacerCredential200Response.js.map