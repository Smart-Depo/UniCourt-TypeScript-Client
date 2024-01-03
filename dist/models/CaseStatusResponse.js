"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStatusResponse = void 0;
var CaseStatusResponse = (function () {
    function CaseStatusResponse() {
    }
    CaseStatusResponse.getAttributeTypeMap = function () {
        return CaseStatusResponse.attributeTypeMap;
    };
    CaseStatusResponse.discriminator = undefined;
    CaseStatusResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStatusArray",
            "baseName": "caseStatusArray",
            "type": "Array<CaseStatus1>",
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
    return CaseStatusResponse;
}());
exports.CaseStatusResponse = CaseStatusResponse;
//# sourceMappingURL=CaseStatusResponse.js.map