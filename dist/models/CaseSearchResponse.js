"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseSearchResponse = void 0;
var CaseSearchResponse = (function () {
    function CaseSearchResponse() {
    }
    CaseSearchResponse.getAttributeTypeMap = function () {
        return CaseSearchResponse.attributeTypeMap;
    };
    CaseSearchResponse.discriminator = undefined;
    CaseSearchResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchResultArray",
            "baseName": "caseSearchResultArray",
            "type": "Array<CaseSearchResult1>",
            "format": ""
        },
        {
            "name": "q",
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchId",
            "baseName": "caseSearchId",
            "type": "string",
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
    return CaseSearchResponse;
}());
exports.CaseSearchResponse = CaseSearchResponse;
//# sourceMappingURL=CaseSearchResponse.js.map