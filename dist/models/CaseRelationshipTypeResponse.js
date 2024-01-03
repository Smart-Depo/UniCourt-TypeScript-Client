"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseRelationshipTypeResponse = void 0;
var CaseRelationshipTypeResponse = (function () {
    function CaseRelationshipTypeResponse() {
    }
    CaseRelationshipTypeResponse.getAttributeTypeMap = function () {
        return CaseRelationshipTypeResponse.attributeTypeMap;
    };
    CaseRelationshipTypeResponse.discriminator = undefined;
    CaseRelationshipTypeResponse.attributeTypeMap = [
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
    return CaseRelationshipTypeResponse;
}());
exports.CaseRelationshipTypeResponse = CaseRelationshipTypeResponse;
//# sourceMappingURL=CaseRelationshipTypeResponse.js.map