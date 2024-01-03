"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCaseRelationshipTypes200Response = void 0;
var GetCaseRelationshipTypes200Response = (function () {
    function GetCaseRelationshipTypes200Response() {
    }
    GetCaseRelationshipTypes200Response.getAttributeTypeMap = function () {
        return GetCaseRelationshipTypes200Response.attributeTypeMap;
    };
    GetCaseRelationshipTypes200Response.discriminator = undefined;
    GetCaseRelationshipTypes200Response.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseRelationshipTypeArray",
            "baseName": "caseRelationshipTypeArray",
            "type": "Array<CaseRelationshipType1>",
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
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
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
        }
    ];
    return GetCaseRelationshipTypes200Response;
}());
exports.GetCaseRelationshipTypes200Response = GetCaseRelationshipTypes200Response;
//# sourceMappingURL=GetCaseRelationshipTypes200Response.js.map