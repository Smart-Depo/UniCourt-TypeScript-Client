"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedCases = void 0;
var RelatedCases = (function () {
    function RelatedCases() {
    }
    RelatedCases.getAttributeTypeMap = function () {
        return RelatedCases.attributeTypeMap;
    };
    RelatedCases.discriminator = undefined;
    RelatedCases.attributeTypeMap = [
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
    return RelatedCases;
}());
exports.RelatedCases = RelatedCases;
//# sourceMappingURL=RelatedCases.js.map