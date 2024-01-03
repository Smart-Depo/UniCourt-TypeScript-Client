"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaOfLawResponse = void 0;
var AreaOfLawResponse = (function () {
    function AreaOfLawResponse() {
    }
    AreaOfLawResponse.getAttributeTypeMap = function () {
        return AreaOfLawResponse.attributeTypeMap;
    };
    AreaOfLawResponse.discriminator = undefined;
    AreaOfLawResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "areaOfLawArray",
            "baseName": "areaOfLawArray",
            "type": "Array<AreaOfLaw1>",
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
    return AreaOfLawResponse;
}());
exports.AreaOfLawResponse = AreaOfLawResponse;
//# sourceMappingURL=AreaOfLawResponse.js.map