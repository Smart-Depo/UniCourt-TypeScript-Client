"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrackListResponse = void 0;
var CaseTrackListResponse = (function () {
    function CaseTrackListResponse() {
    }
    CaseTrackListResponse.getAttributeTypeMap = function () {
        return CaseTrackListResponse.attributeTypeMap;
    };
    CaseTrackListResponse.discriminator = undefined;
    CaseTrackListResponse.attributeTypeMap = [
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
            "name": "caseTrackPreviewArray",
            "baseName": "caseTrackPreviewArray",
            "type": "Array<GetCaseTracks200ResponseCaseTrackPreviewArrayInner>",
            "format": ""
        }
    ];
    return CaseTrackListResponse;
}());
exports.CaseTrackListResponse = CaseTrackListResponse;
//# sourceMappingURL=CaseTrackListResponse.js.map