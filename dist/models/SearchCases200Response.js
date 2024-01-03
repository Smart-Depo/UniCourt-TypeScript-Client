"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCases200Response = void 0;
var SearchCases200Response = (function () {
    function SearchCases200Response() {
    }
    SearchCases200Response.getAttributeTypeMap = function () {
        return SearchCases200Response.attributeTypeMap;
    };
    SearchCases200Response.discriminator = undefined;
    SearchCases200Response.attributeTypeMap = [
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
    return SearchCases200Response;
}());
exports.SearchCases200Response = SearchCases200Response;
//# sourceMappingURL=SearchCases200Response.js.map