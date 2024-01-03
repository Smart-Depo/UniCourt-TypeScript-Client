"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeGroupResponse = void 0;
var CaseTypeGroupResponse = (function () {
    function CaseTypeGroupResponse() {
    }
    CaseTypeGroupResponse.getAttributeTypeMap = function () {
        return CaseTypeGroupResponse.attributeTypeMap;
    };
    CaseTypeGroupResponse.discriminator = undefined;
    CaseTypeGroupResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseTypeGroupArray",
            "baseName": "caseTypeGroupArray",
            "type": "Array<CaseTypeGroup1>",
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
    return CaseTypeGroupResponse;
}());
exports.CaseTypeGroupResponse = CaseTypeGroupResponse;
//# sourceMappingURL=CaseTypeGroupResponse.js.map