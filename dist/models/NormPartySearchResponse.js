"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormPartySearchResponse = void 0;
var NormPartySearchResponse = (function () {
    function NormPartySearchResponse() {
    }
    NormPartySearchResponse.getAttributeTypeMap = function () {
        return NormPartySearchResponse.attributeTypeMap;
    };
    NormPartySearchResponse.discriminator = undefined;
    NormPartySearchResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartySearchResultArray",
            "baseName": "normPartySearchResultArray",
            "type": "Array<SearchNormalizedParties200ResponseNormPartySearchResultArrayInner>",
            "format": ""
        },
        {
            "name": "q",
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartySearchId",
            "baseName": "normPartySearchId",
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
    return NormPartySearchResponse;
}());
exports.NormPartySearchResponse = NormPartySearchResponse;
//# sourceMappingURL=NormPartySearchResponse.js.map