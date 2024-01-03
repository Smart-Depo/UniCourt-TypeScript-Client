"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseClassResponse = void 0;
var CaseClassResponse = (function () {
    function CaseClassResponse() {
    }
    CaseClassResponse.getAttributeTypeMap = function () {
        return CaseClassResponse.attributeTypeMap;
    };
    CaseClassResponse.discriminator = undefined;
    CaseClassResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseClassArray",
            "baseName": "caseClassArray",
            "type": "Array<CaseClass1>",
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
    return CaseClassResponse;
}());
exports.CaseClassResponse = CaseClassResponse;
//# sourceMappingURL=CaseClassResponse.js.map