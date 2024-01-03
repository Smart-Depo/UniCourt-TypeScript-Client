"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateListResponse = void 0;
var CaseUpdateListResponse = (function () {
    function CaseUpdateListResponse() {
    }
    CaseUpdateListResponse.getAttributeTypeMap = function () {
        return CaseUpdateListResponse.attributeTypeMap;
    };
    CaseUpdateListResponse.discriminator = undefined;
    CaseUpdateListResponse.attributeTypeMap = [
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
            "name": "caseUpdatePreviewArray",
            "baseName": "caseUpdatePreviewArray",
            "type": "Array<GetCaseUpdates200ResponseCaseUpdatePreviewArrayInner>",
            "format": ""
        }
    ];
    return CaseUpdateListResponse;
}());
exports.CaseUpdateListResponse = CaseUpdateListResponse;
//# sourceMappingURL=CaseUpdateListResponse.js.map