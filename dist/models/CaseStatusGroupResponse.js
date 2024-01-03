"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStatusGroupResponse = void 0;
var CaseStatusGroupResponse = (function () {
    function CaseStatusGroupResponse() {
    }
    CaseStatusGroupResponse.getAttributeTypeMap = function () {
        return CaseStatusGroupResponse.attributeTypeMap;
    };
    CaseStatusGroupResponse.discriminator = undefined;
    CaseStatusGroupResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseStatusGroupArray",
            "baseName": "caseStatusGroupArray",
            "type": "Array<CaseStatusGroup1>",
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
    return CaseStatusGroupResponse;
}());
exports.CaseStatusGroupResponse = CaseStatusGroupResponse;
//# sourceMappingURL=CaseStatusGroupResponse.js.map