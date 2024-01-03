"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacerCredentialListResponse = void 0;
var PacerCredentialListResponse = (function () {
    function PacerCredentialListResponse() {
    }
    PacerCredentialListResponse.getAttributeTypeMap = function () {
        return PacerCredentialListResponse.attributeTypeMap;
    };
    PacerCredentialListResponse.discriminator = undefined;
    PacerCredentialListResponse.attributeTypeMap = [
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
    return PacerCredentialListResponse;
}());
exports.PacerCredentialListResponse = PacerCredentialListResponse;
//# sourceMappingURL=PacerCredentialListResponse.js.map