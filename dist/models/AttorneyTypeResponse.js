"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttorneyTypeResponse = void 0;
var AttorneyTypeResponse = (function () {
    function AttorneyTypeResponse() {
    }
    AttorneyTypeResponse.getAttributeTypeMap = function () {
        return AttorneyTypeResponse.attributeTypeMap;
    };
    AttorneyTypeResponse.discriminator = undefined;
    AttorneyTypeResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyTypeArray",
            "baseName": "attorneyTypeArray",
            "type": "Array<AttorneyType1>",
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
    return AttorneyTypeResponse;
}());
exports.AttorneyTypeResponse = AttorneyTypeResponse;
//# sourceMappingURL=AttorneyTypeResponse.js.map