"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormAttorneySearchResult = void 0;
var NormAttorneySearchResult = (function () {
    function NormAttorneySearchResult() {
    }
    NormAttorneySearchResult.getAttributeTypeMap = function () {
        return NormAttorneySearchResult.attributeTypeMap;
    };
    NormAttorneySearchResult.discriminator = undefined;
    NormAttorneySearchResult.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "hasAssociatedPublicData",
            "baseName": "hasAssociatedPublicData",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "normAttorneyDetailsAPI",
            "baseName": "normAttorneyDetailsAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "matchedObjectArray",
            "baseName": "matchedObjectArray",
            "type": "Array<CaseSearchResult1MatchedObjectArrayInner>",
            "format": ""
        }
    ];
    return NormAttorneySearchResult;
}());
exports.NormAttorneySearchResult = NormAttorneySearchResult;
//# sourceMappingURL=NormAttorneySearchResult.js.map