"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseRelatedCases = void 0;
var GetCase200ResponseRelatedCases = (function () {
    function GetCase200ResponseRelatedCases() {
    }
    GetCase200ResponseRelatedCases.getAttributeTypeMap = function () {
        return GetCase200ResponseRelatedCases.attributeTypeMap;
    };
    GetCase200ResponseRelatedCases.discriminator = undefined;
    GetCase200ResponseRelatedCases.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "relatedCaseArray",
            "baseName": "relatedCaseArray",
            "type": "Array<GetCase200ResponseRelatedCasesRelatedCaseArrayInner>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
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
        }
    ];
    return GetCase200ResponseRelatedCases;
}());
exports.GetCase200ResponseRelatedCases = GetCase200ResponseRelatedCases;
//# sourceMappingURL=GetCase200ResponseRelatedCases.js.map